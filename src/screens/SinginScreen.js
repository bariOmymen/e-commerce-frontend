import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../actions/userActions";
import { useAuth } from "../hooks/useAuth";
import styled from "styled-components";
import {
  Button,
  Card,
  Container,
  Form,
  Header,
  Input,
  Page,
  RowContainer,
} from "../components/form";
import { useToast } from "../hooks/useToast";

const SigninCard = styled(Card)`
  margin: auto auto;
`;

const SigninContainer = styled(Container)``;

const SigninPage = styled(Page)``;

const SigninHeader = styled(Header)`
  margin: 15px 25px;
`;

const SigninInput = styled(Input)`
  margin: 0px auto;
  font-weight: bold;
`;

const SigninForm = styled(Form)`
  justify-self: center;
  align-self: center;
  margin-top: 5px;
`;
const SignupButton = styled(Button)`
  margin: 15px 25px;
`;

const SigninRowContainer = styled(RowContainer)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SinginScreen = ({ user, state }) => {
  const auth = useAuth();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { toastError } = useToast();
  const location = useLocation();
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const { userInfo, error } = user;
  const history = useNavigate();

  useEffect(() => {
    if (userInfo) {
      history(redirect, { replace: true });
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    }
    error?.message &&
      toastError({ title: error.name, description: error.message });
  }, [userInfo, history, error, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    auth.signin(email, password);
  };

  return (
    <SigninPage>
      <SigninCard>
        <SigninContainer>
          <SigninRowContainer>
            <SigninHeader>SignIn</SigninHeader>
            <Link to="/signup">
              <SignupButton>Signup</SignupButton>
            </Link>
          </SigninRowContainer>

          <SigninForm onSubmit={submitHandler}>
            <SigninInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email@email.coom"
              type="text"
            ></SigninInput>

            <SigninInput
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            ></SigninInput>

            <SigninInput type="submit" value="continue" />
          </SigninForm>
        </SigninContainer>
      </SigninCard>
    </SigninPage>
  );
};

export default connect((state) => ({ user: state.user, state: state }), {
  signIn,
})(SinginScreen);
