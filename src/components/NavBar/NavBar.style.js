import styled from 'styled-components';
import NavBar from "./NavBar"; 

export const StyledNavBar = styled(NavBar)`
    width:auto;
    height:100px; 
    background-color:#170138;
    display:flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width:768px){
        justify-content: flex-start;
    }
`;
