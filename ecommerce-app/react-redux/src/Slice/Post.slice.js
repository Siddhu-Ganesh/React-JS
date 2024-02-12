import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

 export const getAllPosts=createAsyncThunk('getAllPosts',async(payload)=>{
 const{data} = await  axios.get('https://dummyjson.com/posts')
 console.log(data,'---------' )
   return data;
});

const PostsSlice=createSlice({
    name:'postsSlice',
    initialState:{
        isLoading:false,
        data:[],
        error:null,

    },
    reducers:{

    },

    extraReducers:(builder)=>{
        builder
           .addCase(getAllPosts.pending, (state,action) =>{
                 state.isLoading=true;
           })
            .addCase(getAllPosts.fulfilled, (state,action) =>{
                  state.isLoading=false;
                  console.log(action.posts);
                  state.data=action.payload.posts;
           })
            .addCase(getAllPosts.rejected,(state,action) =>{
               state.isLoading=false;
               state.error=action.error;
           })
    }
});

export default PostsSlice.reducer;