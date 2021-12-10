import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getUserById, updateUserInfo } from "../actions/userActions";
import { Card, Container, Form, Header, Input, Page } from "../components/form";
import styled from "styled-components";
const ProfileCard = styled(Card)``;

const ProfileContainer = styled(Container)`
  justify-content: center;
  align-items: center;
`;
const ProfileForm = styled(Form)`
  justify-self: center;
  align-self: center;
  margin-top: 5px;
`;
const ProfileInput = styled(Input)`
  margin: 0px auto;
  font-weight: bold;
`;
const ProfilePage = styled(Page)``;
const ProfileHeader = styled(Header)`
  align-self: flex-start;
  justify-content: flex-start;
  margin: 10px 25px;
`;

function UserProfileScreen({
  getUserById,
  user,
  updateUserInfo,
  newInfo,
  userInfo,
  ...props
}) {
  var id = userInfo._id;

  const { userById, loading, error } = user;

  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [confirmed, setConfirmed] = useState();

  useEffect(() => {
    if (!userById) {
      getUserById(id);
    } else {
      setName(userById.name);
      setEmail(userById.email);
    }
  }, [getUserById, id, userById, newInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmed) {
      alert("passwords don't match");
    } else {
      updateUserInfo({
        _id: userById._id,
        isAdmin: userById.isAdmin,
        name,
        email,
        password,
      });

      //getUserById(id);
    }
  };
  return (
    <ProfilePage>
      <ProfileCard>
        {loading ? (
          "loading"
        ) : error ? (
          { error }
        ) : userById ? (
          <ProfileForm className="profile-form form" onSubmit={submitHandler}>
            <h3>update your profile</h3>
            <div>
              <ProfileInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email@email.coom"
                type="text"
              />
            </div>
            <div>
              <ProfileInput
                value={name}
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
            <div>
              <ProfileInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                type="password"
              />
            </div>
            <div>
              <ProfileInput
                value={confirmed}
                type="password"
                onChange={(e) => setConfirmed(e.target.value)}
                placeholder="confirmation"
              />
            </div>
            <div>
              <ProfileInput
                className="button submit-Button"
                type="submit"
                value="Reset"
              />
            </div>
          </ProfileForm>
        ) : (
          "loading..."
        )}
      </ProfileCard>
    </ProfilePage>
  );
}

export default connect(
  (state) => ({
    user: state.userById,
    userInfo: state.user.userInfo,
    newInfo: state.userNewDetails.userNewInfo,
  }),
  { getUserById, updateUserInfo }
)(UserProfileScreen);
