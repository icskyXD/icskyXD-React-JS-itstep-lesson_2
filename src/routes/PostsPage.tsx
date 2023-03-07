import { useState } from 'react';
import { PostsList, SinglePost } from '../components';
import { Outlet, useNavigate } from 'react-router-dom';
const PostsPage = () => {
    const [ postId, setpostId ] = useState(0);
    const navigate = useNavigate()

    const onClickPost = (id: number) => {
        setpostId(id)
        navigate(`/posts/${id}`)
    }

    return (
        <div className='App'>
              <h1>Posts Page</h1>
          <div className="container">
            <div className="column">
              <PostsList onClickPost= {onClickPost}/>
            </div>
            <div className='column'>
                <Outlet/>
                {/* <SinglePost/> */}
            </div>
          </div>
        </div>
      )
}

export default PostsPage;