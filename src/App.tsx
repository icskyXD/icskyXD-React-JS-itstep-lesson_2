import React, { useState } from 'react';
import { RouterProvider } from 'react-router';
import { PostsList, SinglePost, UserList } from './components';
import router from './router';
import './styles.css'


function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )  
}
export default App;