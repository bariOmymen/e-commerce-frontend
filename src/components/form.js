import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.size === "medium" ? `450px` : `520px`)};
  height: ${(props) => (props.size === "medium" ? `350px` : `420px`)};
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 0px 0px 4px gray;
  margin-buttom: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Page = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const Header = styled.h1``;

export const Input = styled.input`
  width: ${(props) => (props.type === "submit" ? "50%" : "75%")};
  height: 25px;
  ${(props) => (props.type === "submit" ? "" : "border-style: none")};
  border-bottom: 1px solid gray;
  border-radius: ${(props) => (props.type === "submit" ? "20px" : "5px")};
  padding: ${(props) => (props.type === "submit" ? "" : "0px 5px")};
  background-color: ${(props) =>
    props.type === "submit" ? "var(--primary)" : ""};

  &:focus {
    &:focus {
      outline: none;
      box-shadow: 0px 0px 2px gray;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  justify-content: space-around;
`;
export const Button = styled.button`
  justify-self: center;
  align-self: center;
  padding: 7px 25px;
  border-radius: 10px;
  border: 1px solid black;
  background-color: var(--primary);
  cursor: pointer;
  font-size: 1rem;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
