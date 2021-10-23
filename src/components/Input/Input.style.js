import styled from "styled-components"
import Input from "./Input"

export const StyledInput = styled(Input)`
    border-radius: 3px; 
    width: 100%;
    height: 32px;
    border: 2px solid rgb(172, 172, 172);
    &:focus{
        outline: none; 
        border: 2px solid;    
        border-color: #170138;
    }
`