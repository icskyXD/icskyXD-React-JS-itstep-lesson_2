import React, { FC, useState, useEffect } from 'react';
import apiClient from '../../common/api';
import { IPost } from '../../common/models';
import { IPostId } from '../../App'
const SinglePost:FC<IPostId> = (props) => {
    const [post, setPost] = useState<IPost[]>([])    
    
    const getPost = async () => {
        const postObj = await apiClient.get<IPost[]>(`/posts/${props.id}`);
        setPost(postObj.data)
    }

    useEffect(() => {
        getPost();
    }, []);
    
    return (
            <div>
                <p>UserId: {post.userId}</p>
                <p>Id: {post.id}</p>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
            )
}
export default SinglePost