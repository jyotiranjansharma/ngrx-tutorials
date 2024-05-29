import { Post } from "src/app/models/posts.model"

export interface PostsState {
    posts: Post[];
}

export const initialState: PostsState = {
    posts:[
        { id: '1', title: 'Sample 1', description: 'Description 1'},
        { id: '2', title: 'Sample 2', description: 'Description 2'}
    ]
}