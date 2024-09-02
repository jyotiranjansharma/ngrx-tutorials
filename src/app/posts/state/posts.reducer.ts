import { createReducer, on } from "@ngrx/store"
import { initialState } from "./posts.state"
import { addPost, deletePost, updatePost } from "./posts.action"


const _postsReducer = createReducer(
    initialState,
    on(addPost, (state, action) => {

        let post = {...action.post}
        post.id = (state.posts.length + 1).toString()
        return {
            ...state,
            posts: [...state.posts, post]
        }
    }),
    on(updatePost, (state, action) => {
        console.log(action);
        let updatedPost = state.posts.map((post) => {
            return action.post.id === post.id ? action.post : post
        })
        console.log(updatedPost)
        return {
            ...state,
            posts: updatedPost
        }
    }),
    on(deletePost, (state, {id}) => {
        const updatedPosts = state.posts.filter((post) => {
            return post.id !== id;
        })
        
        return {
            ...state,
            posts: updatedPosts
        }
    })
)

export function postsReducer(state: any, action: any) {
    return _postsReducer(state, action)
}

