import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { sub } from "date-fns";
//axios: thư viện HTTP client
import axios from "axios";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

const initialState = {
  posts: [],
  status: "idle", //Yêu cầu chưa bắt đầu
  error: null,
};

//createAsyncThunk tạo ra các action creator để xử lý các tác vụ bất đồng bộ
//action creator"fetchPosts": truyền vào một tham số đầu tiên: tên của action creator ("posts/fetchPosts"),
//một tham số thứ hai: hàm bất đồng bộ xử lý các yêu cầu HTTP
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(POSTS_URL);
  //Axios gửi yêu cầu GET đến một địa chỉ URL được định nghĩa bởi biến "POSTS_URL".
  //Sau khi nhận được phản hồi từ server trả về dữ liệu từ phản hồi để lưu vào store của Redux.
  return response.data;
});

export const addNewPost = createAsyncThunk(
  "posts/addNewPost",
  //payload creator nhận được một phần đối tượng '{title, content, user}'
  async (initialPost) => {
    //gửi dữ liệu ban đầu đến axios server
    const response = await axios.post(POSTS_URL, initialPost);
    //response bao gồm obj post hoàn chỉnh, bao gồm cả ID duy nhất
    return response.data;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      //postsSlice chỉ biết về dữ liệu mà nó chịu trách nhiệm
      // -> state đối số sẽ là mảng post của chính nó không phải toàn bộ state obj redux
      reducer(state, action) {
        //state giá trị hiện tại, action đối tượng đã được gửi đi.
        state.posts.push(action.payload);
      },

      //Hàm prepare() để tạo action object khi một post mới được thêm vào slice
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            //chuyển đổi Date thành chuỗi ISO 8601
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              hooray: 0,
              heart: 0,
              rocket: 0,
              eyes: 0,
            },
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.posts.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Adding date and reaction
        let min = 1;
        const loadedPosts = action.payload.map((post) => {
          post.date = sub(new Date(), { minutes: min++ }).toISOString();
          post.reactions = {
            thumbsUp: 0,
            hooray: 0,
            heart: 0,
            rocket: 0,
            eyes: 0,
          };
          return post;
        });
        // Thêm bất kỳ bài đăng nào đã tìm nạp vào mảng
        state.posts = state.posts.concat(loadedPosts);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        const sortedPosts = state.posts.sort((a, b) => {
          if (a.id > b.id) return 1;
          if (a.id < b.id) return -1;
          return 0;
        });
        action.payload.id = sortedPosts[sortedPosts.length - 1].id + 1;

        action.payload.userId = Number(action.payload.userId);
        action.payload.date = new Date().toISOString();
        action.payload.reactions = {
          thumbsUp: 0,
          hooray: 0,
          heart: 0,
          rocket: 0,
          eyes: 0,
        };
        console.log(action.payload);
        state.posts.push(action.payload);
      });
  },
});

//xuất để component <PostsList> đọc
export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

//Khi viết reducer postAdded, createSlicetự động tạo ra func "action creater" có cùng tên
//xuất trình tạo action đó và sử dụng nó trong các component UI để gửi hành động khi người dùng nhấp vào "Save Post".
export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
