import React, { useState } from 'react';
import { PostsList, SinglePost, UserList } from './components';
import './styles.css'

export interface IPostId {
  id: number; 
}

function App() {
  const [isShow, setIsShow] = useState(true)
  const [ postId, setpostId ] = useState(0);

  const handleToggle = () => {
    setIsShow(!isShow)
  }  

  const getSinglePost = (props:IPostId) => {
    setpostId(props.id)
    return {postId}
  }
  console.log({postId});

  return (
    <div className='App'>
      <button onClick={handleToggle}>Toggle</button>
      {/* <UserList /> */}
      <div className="container">
        <div style={{display:isShow?'block':'none'}}>
          {isShow && <PostsList getSinglePost={getSinglePost}/>}
        </div>
        <div className="column">
          <SinglePost/>
        </div>
      </div>
    </div>
  )
}
export default App;