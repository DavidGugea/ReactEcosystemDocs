import { createSlice } from "@reduxjs/toolkit"
import { nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  { id : '1', title: 'First Post!', content: 'Hello !', date: sub(new Date(), {minutes: 10}).toISOString() },
  { id : '1', title: 'Second Post!', content: 'More text', date:sub(new Date(), {minutes: 5}).toISOString },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      // action.type -> posts/postAdded
      // DOMAIN/EVENT-NAME
      state.push(action.payload);
    },
    prepare(title, content, userId) {
      return {
        payload: {
          id: nanoid(),
          date: new Date().toISOString(),
          title,
          content,
          user: userId
        }
      }
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find(post => post.Id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload;
      const existingPost = state.find(post => post.id === id)
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    }
  }
});


export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;