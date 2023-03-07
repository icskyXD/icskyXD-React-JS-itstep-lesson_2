import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import apiClient from '../common/api';

// const obj:Record<number | string, boolean> = {
//     120: false,
//     company: 'inDrive'
// }

const SinglePostPage = () => {
    const { postId } = useParams<string>()
    const [post, setPost] = useState({title:''})
    const navigate = useNavigate()

    const getPost = async (id:number) => {
        const res = await apiClient.get(`/posts/${id}`)
        setPost(res.data)
    }

    useEffect(()=>{
        if(postId) {
            const id = parseInt(postId);
            !isNaN(id) && getPost(id)
        }
    }, [])
    
    return (
        <div>
            <button onClick={()=>navigate('/posts')}></button>
            <h1>Single Post Page</h1>
            {/* @ts-ignore */}
            <h2>{post.title}</h2>
        </div>
    )
}
export default SinglePostPage