import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 0, name: "Hạnh Hòa" },
  { id: 1, name: "Hoài Việt" },
  { id: 2, name: "Lưu Ly" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
