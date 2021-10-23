import styled from "styled-components";
import LogOutWidget from "./LogOutWidget";

export const StyledLogOutWidget = styled(LogOutWidget)`
    width: 2rem;
    height: 2rem; 
    background-color: #170138; 
    border: none;
    color: white;
    margin-left: 1rem; 
    margin-right: 3rem;
    cursor: pointer;
    &:hover
    {
        background-color: #2D0066;
    }
`;
