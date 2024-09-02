import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/models/posts.model";

export const ADD_POST_ACTION = '[posts page] add post';
export const UPDATE_POST_ACTION = '[posts page] update post';
export const DELETE_POST_ACTION = '[posts page] delete post';
export const GET_ALL_POSTS_ACTION = '[posts page] get all posts';

export const getAllPosts = createAction(GET_ALL_POSTS_ACTION);

export const addPost = createAction(ADD_POST_ACTION, props<{post: Post}>());

export const updatePost = createAction(UPDATE_POST_ACTION, props<{post: Post}>());

export const deletePost = createAction(DELETE_POST_ACTION, props<{id?: string}>());

