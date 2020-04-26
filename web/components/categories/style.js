import styled from 'styled-components';

export const CategoryWrapper = styled.div`
    font-size: 0px;
    display: flex;
    flex-flow: ${props => props.orientation === "left" ? "row" : "row-reverse"};
    
    @media only screen and (max-width: 840px) {
        flex-flow: column-reverse;
    }
`;

export const CategoryContainer = styled.article`
    margin: 0px;
    padding: 0 15px;
    text-align: ${props => props.orientation === "left" ? "left" : "right"};
    flex-basis: 0;
    flex-grow: 1;
    
    @media only screen and (max-width: 840px) {
        text-align: center;
        margin: 20px 0 30px;
    }
`;

export const CategoryImageContainer = styled.div`
    flex-basis: 0;
    flex-grow: 1;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;

export const CategoryTitle = styled.h1`
    font-family: 'Elephant', serif;
    font-size: 2.5rem;
`;

export const CategoryDescription = styled.p`
    white-space: pre-wrap;
    font-size: 20px;
`;