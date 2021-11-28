import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../../actions/userActions";
import { useAuth } from "../../router-helper";
import ErrorBox from "../../components/ErrorBox";
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
} from "../../components/form";

const SigninCard = styled(Card)`
  margin: 0px auto;
`;

const SigninContainer = styled(Container)``;

const SigninPage = styled(Page)``;

const SigninHeader = styled(Header)`
  margin: 15px 25px;
`;

const SigninInput = styled(Input)`
margin: 0px auto;
}
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

const SinginScreen = ({ user, location, history, state }) => {
  const auth = useAuth();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const { userInfo, error } = user;
  console.log(error?.message);

  useEffect(() => {
    if (userInfo && !userInfo?.message) {
      history.push(redirect);
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    }
  }, [userInfo, redirect, history]);

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

          {error?.message && (
            <ErrorBox className="error">
              <ErrorBox.Text>{error?.message}</ErrorBox.Text>
            </ErrorBox>
          )}

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

            <SigninInput
              className="button submit-Button"
              type="submit"
              value="continue"
            />
          </SigninForm>
        </SigninContainer>
      </SigninCard>
    </SigninPage>
  );
};

export default connect((state) => ({ user: state.user, state: state }), {
  signIn,
})(SinginScreen);
