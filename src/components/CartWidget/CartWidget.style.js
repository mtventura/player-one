import styled from "styled-components";
import CartWidget from "./CartWidget";

export const StyledCartWidget = styled(CartWidget)`
    width: 2rem;
    height: 2rem; 
    background-color: #170138; 
    border: none;
    color: white;
    margin-left: 1rem; 
    margin-right: 1rem;
    &:hover
    {
        background-color: ${(props) => props.logIn ? "#F8A5C9" : "#2D0066"};
    }
`;
