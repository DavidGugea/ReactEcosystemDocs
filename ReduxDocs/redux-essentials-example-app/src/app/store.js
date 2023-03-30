import { configureStore } from '@reduxjs/toolkit'

import postsReducer from "../features/posts/postsSlice";
import usersReducer from "../features/posts/usersSlice";
import notifiactionReducer from '../features/notifications/notificationsSlice';

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    notification: notifiactionReducer,
  }
});
