//create store redux: configureStore tự động thêm một số phần mềm trung gian vào thiết lập store theo mặc định
import { configureStore } from "@reduxjs/toolkit";

//nhập counterReducer đưa vào khi tạo store
import counterReducer from "../features/counter/counterSlice";
import postsReducer from "../features/post/postsSlide";
import usersReducer from "../features/users/usersSlice";

//Khi gọi configureStore -> chuyển vào tất cả các reducer khác nhau trong một obj
export const store = configureStore({
  reducer: {
    //khi đưa vào obj {counter: counterReducer} ->
    //muốn có một state counter và một func couterReducer xem và cập nhật state counter
    counter: counterReducer,
    posts: postsReducer,
    users: usersReducer,
  },
});
