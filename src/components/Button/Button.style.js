import styled from "styled-components";
import Button from "./Button"

export const StyledButton = styled(Button)`
width: 10rem;
height: 40px; 
background-color:${(props) => props.logIn ? "#8D0054" : "#170138"};
font-family: Montserrat;
font-size: 12px;
color: ${(props) => props.textColor};
border: none;
border-radius: 5px;
margin-left: 1rem; 
margin-right: 1rem;
&:hover
{
    background-color: ${(props) => props.logIn ? "#F8A5C9" : "#2D0066"};
}
`;