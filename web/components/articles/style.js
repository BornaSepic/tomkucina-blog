import styled from 'styled-components';

export const OuterContainer = styled.div`
    font-size: 0px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    
    @media only screen and (max-width: 840px) {
        flex-flow: column;
    }
`;

export const ImageContainer = styled.div`

`;

export const ContinueReading = styled.a`
    color: white;
    background: black;
    padding: 4px;
    width: max-content;
    font-size: 17px;
    cursor: pointer;
    margin: 10px auto;
`;

export const ArticleContent = styled.article`
    padding: 10px;
    margin-top: 0;
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
`;

export const ArticleParagraph = styled.p`
    
`;