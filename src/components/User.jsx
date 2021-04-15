import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useUser } from "../hooks/";
import { SET_USER, SET_CURRENT_ID } from "../store/actions";

const User = (props) => {
    // Here we can also fetch fresh data... This is random response thats why props here....
    useUser();
    // For referance .....
    // const currentId = useSelector((state) => state.main.currentId);
    // const user = props.user.find((ele) => ele.userId === currentId);
    const fakeUser = useSelector((state) => state.main.user);
  const dispatch = useDispatch();

  function handleBackClick() {
    dispatch(SET_USER(1));
    dispatch(SET_CURRENT_ID(""));
  }

  return (
    <div>
      <button onClick={() => handleBackClick()}>Back</button>
      { fakeUser &&
        <div>
          <h2>Full Name: {fakeUser ? fakeUser.name : "No name"}</h2>
          <h3>UserName: {fakeUser ? fakeUser.username : "No username"}</h3>
          <h4>Email: {fakeUser ? fakeUser.email : "No email"}</h4>
          <h5>Website: {fakeUser ? fakeUser.website : "No website"}</h5>
          <address>
            Company:
            {fakeUser.company !== undefined
              ? fakeUser.company.name +
                ", " +
                fakeUser.company.catchPhrase +
                ", " +
                fakeUser.company.bs
              : "No Company"}
          </address>
        </div>
      }
    </div>
  );
};

export default User;