import styled from 'styled-components';

export const HeroContainer = styled.div`
    cursor: pointer;
    background-image: ${props => `url('${props.backgroundUrl}')`};
    min-height: 600px;
    display: flex;
    justify-content: center;
    flex-flow: column;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export const HeroContent = styled.div`
    padding: 80px;
    
    * {
        color: #fff;
    }
    
    @media only screen and (max-width: 780px) {
        padding: 20px;
    }
`;

export const TextBackground = styled.span`
    background: #000;
    line-height: 65px;
`;