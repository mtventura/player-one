import styled from "styled-components"
import TextArea from "./TextArea"

export const StyledTextArea = styled(TextArea)`
    border-radius: 3px; 
    width: 100%;
    border: 2px solid rgb(172, 172, 172);
    &:focus{
        outline: none; 
        border: 2px solid;    
        border-color: #170138;
    }
`