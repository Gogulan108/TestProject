import React, {useState} from 'react';
import "./Home.css";
import User from './User';
import Post from './Post';
import Comments from './Comments';

function Home() {
  const [isUser,setIsUser]= useState(false);
  let [userObject,setUserObject]=useState([' ']);
  const [isPost,setIsPost]= useState(false);
  let [postObject,setPostObject]=useState([' ']);
  const [isComments,setIsComments]= useState(false);
  let [commentsObject,setCommentsObject]=useState([' '])
  function userHandler() {
    let url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((response) =>  response.json()
      )
      .then((resp) => {
        setUserObject(resp);
        setIsUser(true);
        setIsPost(false);
        setIsComments(false);
      });
  }
  function postHandler(){
    let url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((response) =>  response.json()
      )
      .then((resp) => {
        console.log(resp);
        setPostObject(resp);
        setIsPost(true);
        setIsUser(false)
        setIsComments(false);
      });
  }
  function commentsHandler() {
    let url = "https://jsonplaceholder.typicode.com/comments";
    fetch(url)
      .then((response) =>  response.json()
      )
      .then((resp) => {
        console.log(resp);
        setCommentsObject(resp);
        setIsComments(true);
        setIsUser(false)
        setIsPost(false);
      });
  }
  
  return (
    <>
      <ul>
        <li>
          <p onClick={userHandler}>User</p>
        </li>
        <li>
          <p onClick={postHandler}>Posts</p>
        </li>
        <li>
          <p onClick={commentsHandler}>Comments</p>
        </li>
        <li>
        <input  type="text" placeholder="Search.." />
        <button type="submit">search</button>
        </li>
      </ul>
      {isUser && <User user={userObject} />}
      {isPost && <Post post={postObject} />}
      {isComments && <Comments comments={commentsObject} />}
    </>
  );
}
export default Home;