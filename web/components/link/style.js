import styled from 'styled-components';

export const Link = styled.a`
    color: white;
    background: black;
    padding: 8px;
    font-size: 17px;
    cursor: pointer;
    text-align: center;
    width: max-content;
    margin: auto;
    display: inline-block;
    
    margin-top: ${props => props.spacingTop ? "20px" : "0"};
`;