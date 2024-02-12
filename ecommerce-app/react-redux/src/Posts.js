import {useDispatch,useSelector} from 'react-redux';
import { useEffect } from 'react';
import {getAllPosts} from './Slice/Post.slice';
import React from 'react';
function Posts(){

    const dispatch=useDispatch();
    const {data,isLoading} =useSelector((state)=>state.posts);
    console.log(isLoading,data)

    useEffect(()=>{

        dispatch(getAllPosts());
    },[])

    return(
        <div className='container'>
            <div className='row'>
               {isLoading ? (
                <div className='col-sm my-5'>
                    <h1 style={{color:'blue'}} className='text-center'>Loading....</h1>
                    </div>
               ):(
                <React.Fragment>
                    
                    {data.map(post=>(
                        <div className='col-sm-3' style={{height:'450px'}}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>

                        </div>
                    ))}
                </React.Fragment>

               )}
            </div>

        </div>
    )

}

export default Posts;