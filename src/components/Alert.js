import styled from "styled-components";

const Container = styled.div`
  justify-content: flex-start;
  width: 100%;
  ${(props) =>
    props.type === "danger"
      ? `color: rgb(248, 68, 68);
  background-color: rgba(255, 0, 0, 0.349);
  margin: 10px auto;
  padding: 10px;
  border-radius: 3px;`
      : `
      color: rgb(11, 192, 57); 
  background-color: rgba(72, 228, 85, 0.349);
  margin: 10px auto;
  padding: 10px;
  border-radius: 3px;
      `}
`;
export const Alert = ({ title, description, type }) => {
  return (
    <Container type={type}>
      <h3>{title}</h3>
      <p>{description}</p>
    </Container>
  );
};
