import styled from 'styled-components';

export const Link = styled.a`
    color: white;
    background: black;
    padding: 4px 8px;
    font-size: 17px;
    cursor: pointer;
    text-align: center;
    width: max-content;
    margin: auto;
    display: inline-block;
    
    margin-top: 10px;
`;

export const PostContainer = styled.article`
    position: relative;
    overflow: hidden;
    margin-top: 0;
    display: flex;
    height: 100%;
    color: #222;
    text-decoration: none;
    
    > div {
        flex-basis: 0;
        flex-grow: 1;
        margin-top: 0;
        
        + div {
            margin-left: 15px;
        }
    }
 
     p {
        white-space: pre-wrap;
        font-size: 18px;
        margin-top: 10px;
     }
     
     + article {
        margin-top: 20px;
     }
     
     @media only screen and (min-width: 821px) {
        height: 100%;
        min-height: 250px;
        max-height: 280px;
     }
     
     @media only screen and (max-width: 820px) {
        flex-flow: column;
        padding: 0 10px;
        
        > div + div {
            margin-left: 0;
        }
        
        img {    
            height: 250px;
        }
        
        a {
            display: block;
        }
     }
`;

export const CategoryTitle = styled.h1 `
    font-family: 'elephant',serif;
   font-size: 2.5rem;
   margin-bottom: 30px;
`;


export const PostTitle = styled.h2`
           font-family: 'elephant',serif;
           font-size: 1.5rem;
           font-weight: 400;
           margin-bottom: 10px;
    `;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    `;