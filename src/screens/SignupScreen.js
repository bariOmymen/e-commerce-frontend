import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { signUp } from "../actions/userActions";
import { useAuth } from "../hooks/useAuth";
import styled from "styled-components";
import { Card, Container, Form, Header, Input, Page } from "../components/form";
import { useLocation, useNavigate } from "react-router-dom";
import { useToast } from "../hooks/useToast";
const SignupCard = styled(Card)``;

const SignupContainer = styled(Container)`
  justify-content: center;
  align-items: center;
`;
const SignupForm = styled(Form)`
  justify-self: center;
  align-self: center;
  margin-top: 5px;
`;
const SignupInput = styled(Input)`
  margin: 0px auto;
  font-weight: bold;
`;
const SignupPage = styled(Page)``;
const SignupHeader = styled(Header)`
  align-self: flex-start;
  justify-content: flex-start;
  margin: 10px 25px;
`;

const SignupScreen = ({ userInfo }) => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [confirmed, setConfirmed] = useState();
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.userSignup);
  const { toastError } = useToast();
  const redirect = location.search ? location.search.split("=")[1] : "/";
  useEffect(() => {
    if (userInfo) {
      navigate(redirect, { replace: true });
    }
    if (error?.message) {
      toastError({ title: error.name, description: error.message });
    }
  }, [error, navigate, redirect, userInfo]);
  const submitHandler = (e) => {
    e.preventDefault();
    if (password === confirmed) {
      auth.signup(name, email, password);
    } else {
      alert("passwords don't match");
    }
  };
  return (
    <SignupPage>
      <SignupCard>
        <SignupContainer>
          <SignupHeader>Signup</SignupHeader>
          <SignupForm onSubmit={submitHandler}>
            <SignupInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email@email.com"
              type="email"
            ></SignupInput>

            <SignupInput
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            ></SignupInput>

            <SignupInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              type="password"
            ></SignupInput>

            <SignupInput
              value={confirmed}
              type="password"
              onChange={(e) => setConfirmed(e.target.value)}
              placeholder="confirmation"
            ></SignupInput>

            <SignupInput type="submit" value="Signup" />
          </SignupForm>
        </SignupContainer>
      </SignupCard>
    </SignupPage>
  );
};

export default connect(
  (state) => ({
    userInfo: state.user.userInfo,
  }),
  {
    signUp,
  }
)(SignupScreen);
