import { createSlice } from "@reduxjs/toolkit"

const initialState = [
  { id : '1', title: 'First Post!', content: 'Hello !' },
  { id : '1', title: 'Second Post!', content: 'More text' },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      // action.type -> posts/postAdded
      // DOMAIN/EVENT-NAME
      state.push(action.payload);
    }
  }
});

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
