import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Search from "./Search";
import { SET_USER, SET_POST, SET_CURRENT_ID } from "../store/actions";

const Posts = (props) => {
    const posts = useSelector(state => state.main.posts)
    const dispatch = useDispatch();

      function handlePostClick(id) {
        dispatch(SET_POST(3));
        dispatch(SET_CURRENT_ID(id));
      }
      function handleUserClick(id) {
        dispatch(SET_USER(2));
        dispatch(SET_CURRENT_ID(id));
      }


    return (
        <>
        <Search />
      <div className="main-page-container">
        {posts.length &&
          posts.map((post, i) => (
            <div key={post.id}>
              <div className="main-page-container-list">
                <div onClick={() => handlePostClick(post.id)}>
                  <p>{post.title}</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleUserClick(post.userId)}
                >
                  User Name: {post.username}
                </button>
              </div>
            </div>
          ))}
      </div>
      </>
    );
}

export default Posts;