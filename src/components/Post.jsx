import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { usePost } from "../hooks";
import { SET_USER, SET_CURRENT_ID } from "../store/actions";

const Post = (props) => {
    // Here we can also fetch fresh data... This is random response thats why props here....
    usePost();

    // For referance........
    //   const currentId = useSelector((state) => state.main.currentId);
    //   const user = props.user.find((ele) => ele.userId === currentId);
    const fakePost = useSelector((state) => state.main.post);
    const dispatch = useDispatch();

    function handleBackClick() {
        dispatch(SET_USER(1));
        dispatch(SET_CURRENT_ID(""));
    }

    return (
        <div>
            <button onClick={() => handleBackClick()}>Back</button>
            <div>
                <h2>Title: {fakePost.title ? fakePost.title : "No title"}</h2>
                <h3>UserName: {fakePost.username ? fakePost.username : "No username"}</h3>
                <p>{fakePost.body ? fakePost.body : "No body"}</p>
                <h4>Comments:</h4>
                {fakePost.comments !== undefined ? fakePost.comments.map((comm,i) => <div key={comm.id} className="post-comments">
                    <h3>{i+1} {comm.name}</h3>
                    <p>{comm.body}</p>
                    <p>{comm.email}</p>
                </div>) : "No comments"}
            </div>
        </div>
    );
};

export default Post;