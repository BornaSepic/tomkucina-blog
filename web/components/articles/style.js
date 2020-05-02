import styled from 'styled-components';

export const ArticlesContainer = styled.div`
    font-size: 0px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    
    @media only screen and (max-width: 840px) {
        flex-flow: column;
    }
`;

export const ArticleContent = styled.article`
    padding: 10px;
    margin-top: 0;
    flex-basis: 0;
    flex-grow: 1;
    img {
        max-height: 250px;
    }
`;

export const Image = styled.img`
    width: 100%;
`;

export const ArticleContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ArticleTitle = styled.h1`
    font-family: 'Elephant',serif;
    font-size: 25px;
    line-height: 32px;
`;
