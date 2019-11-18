import styled from "styled-components";

export const ImageLinksWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    
    @media only screen and (max-width: 980px) {
        flex-flow: column;
    }
`;

export const ImageLinkWrapper = styled.a`
    width: 100%;
    text-decoration: none;
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    height: 180px;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    
     @media only screen and (max-width: 980px) {
        margin: 10px 0;
    }
`;

export const ImageLinkTitle = styled.span`
    text-decoration: none;
    font-weight: 500;
    font-size: 1.75rem;
    color: white;
    font-family: 'Playfair Display', serif;
    text-align: center;
`;

export const ImageLinkImage = styled.img`
    position: absolute;
    z-index: -1;
`;

export const Quote = styled.h2`
    text-align: center;
    margin: 10% 0;
    font-style: italic;
    font-weight: 500;
`;