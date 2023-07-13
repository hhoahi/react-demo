import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import axios from "axios";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await axios.get(POSTS_URL);
    return [...response.data];
  } catch (err) {
    return err.message;
  }
});

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
      const existingPost = state.post.find((post) => post.id === postId);
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
        // Adding date and reactions
        let min = 1;
        const loadedPosts = action.payload.map((post) => {
          post.date = sub(new Date(), { minutes: min++ }).toISOString();
          post.reactions = {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          };
          return post;
        });
        // Add any fetched posts to the array
        state.posts = state.posts.concat(loadedPosts);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;


//Khi viết reducer postAdded, createSlicetự động tạo ra func "action creater" có cùng tên
//xuất trình tạo action đó và sử dụng nó trong các component UI để gửi hành động khi người dùng nhấp vào "Save Post".
export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
