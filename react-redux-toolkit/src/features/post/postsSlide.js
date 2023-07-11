import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "Learning react redux", content: "it's so hard." },
  { id: 2, title: "I want to eat pizza", content: "Pizza so yummyyyy!" },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
