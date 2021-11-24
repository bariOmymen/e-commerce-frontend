import styled from "styled-components";



export const Badge = styled.span`
position: absolute;
top:15px;
right: ${props => props.active ? "115px" : "125px"};
border-radius: 50%;
width: 19px;
height: 19px;
background-color: red;
color: white;
display: ${props => props.show ? "block" : "none" }
`;