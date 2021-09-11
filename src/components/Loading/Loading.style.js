import styled, {keyframes} from 'styled-components'
import Loading from './Loading'

const animateOpacity = keyframes`
0%, 100%{
    opacity: 1; 
}
50%{
    opacity: 0.5;
}
`;

export const StyledLoading = styled(Loading)`
    animation:${animateOpacity} 1.5s infinite;
`;