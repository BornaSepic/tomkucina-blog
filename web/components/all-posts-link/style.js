import styled from 'styled-components';

export const Container = styled.div`
    background-image: ${props => `url('${props.backgroundImage}')`};
    background-size: cover;
    text-align: center;
    padding: 25px;
    
    a {
        margin-top: 0;
    }
`;