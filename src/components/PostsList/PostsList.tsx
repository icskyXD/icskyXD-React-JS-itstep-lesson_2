import React, { useState, useEffect, FC } from 'react';
import apiClient from '../../common/api';
import { IPost } from '../../common/models';
import './PostsList.css'

// hook - use 

interface IProps {
    getSinglePost: (id: number) => void;
}
// FC - function component

const PostsList:FC<IProps> = (props) => {
    // let [count, setCount ] = useState(0);
    // const [state, setState] = useState({name:'text', age: 16}) 
    // const changeUserAge = () => {
    //     setState({name:state.name, age:22})
    // }

    const [posts, setPosts] = useState<IPost[]>([])
    const [isLoading, setIsLoading ] = useState(true)

    const getPosts = async () => {
        try {
            const res = await apiClient.get<IPost[]>('/posts')                    
            setPosts(res.data)
        }catch(e) {
            console.log({ e });   
        }finally {
            setIsLoading(false)
        }
    }

    // mount
    useEffect(() => {
        getPosts();
        
        // const interval = setInterval(() => {
        //     getPosts()
        // }, 3000)

        // return () => {
        //     // @ts-ignore
        //     clearInterval(interval);
        //     // alert('deleted')
        // }
    }, []);

    // // updated
    // useEffect(() => {
    //     setIsLoading(true)
    // }, [posts])

    // // unmounted
    // useEffect(() => {
    //     setIsLoading(true)

    //     return () => {}
    // }, [isLoading])

    if(isLoading) {
        return(<h1>LOADING...</h1>)
    }

    return (
        <div>
            {posts.map(post => (
                <div key={post.id} className='post-item'>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                    <button onClick={() => props.getSinglePost(post.id)}>View</button>
                </div>
            ))}

            {/* <h1>Count: {count}</h1>
            <button onClick={()=> {
                setCount(count+1)
            }}>Plus</button>
            <button onClick={()=> {
                setCount(count-1)
            }}>Minus</button>
            <hr />
            <h2>User: {state.name} {state.age}</h2>
            <button onClick={changeUserAge}>Change user age</button> */}
        </div>
    )
}
export default PostsList;