import styled from 'styled-components';
import Burger from './Burger'; 

export const StyledBurger = styled(Burger)`
    width: 2rem;
    height: 2rem; 
    justify-content: space-be; 
    flex-flow: column nowrap; 
    background-color: #170138; 
    border: none;
    color: white;
    margin-left: 1rem; 
    margin-right: 1rem;
    display:none;

    @media(max-width: 768px){
        display: flex;
    }
`;