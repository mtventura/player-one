import styled from "styled-components";
import CartWidget from "./CartWidget";

export const StyledCartWidget = styled(CartWidget)`
    width: 2rem;
    height: 2rem; 
    background-color: #170138; 
    border: none;
    color: white;
    margin-left: 1rem; 
    margin-right: 3rem;
    &:hover
    {
        background-color: #2D0066;
    }
`;
