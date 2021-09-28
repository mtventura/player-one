import styled from "styled-components";
import LogInWidget from "./LogInWidget";

export const StyledLogInWidget = styled(LogInWidget)`
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
