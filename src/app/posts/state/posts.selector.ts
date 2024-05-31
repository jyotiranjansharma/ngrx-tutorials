import { PostsState } from "./posts.state";
import { createFeatureSelector, createSelector } from "@ngrx/store";

const getPostsState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(getPostsState, (state) => {
    return state.posts;
})

// export const getPostById = (props: any) => createSelector(getPostsState, (state) => {
//     console.log('props in getpostbyid', props);
//     return state.posts.find((item: any) => {
//         item.id === props.id
//     })
// })

export const getPostById = createSelector(getPostsState, (state: any, props: any) => {
    return state.posts.find((item: any) => item.id === props.id);
})