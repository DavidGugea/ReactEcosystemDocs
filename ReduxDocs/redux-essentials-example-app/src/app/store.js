import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import postsReducer from "../features/posts/postsSlice";
import usersReducer from "../features/posts/usersSlice";
import notifiactionReducer from '../features/notifications/notificationsSlice';

import { apiSlice } from '../features/api/apiSlice';

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    notification: notifiactionReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
});
