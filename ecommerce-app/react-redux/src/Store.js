import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from './counter.slice';
import PostsReducer from './Slice/Post.slice';

export const store = configureStore({
    reducer: {
        counter: CounterReducer, // {value: 0}
        posts: PostsReducer
    },
});



// State - {
//     counter: {
//         value: 0
//     }
// }