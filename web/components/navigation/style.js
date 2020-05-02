import styled from 'styled-components';

export const NavbarWrapper = styled.div`
    max-width: 680px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: auto;
    ${props => props.header ? {
        "color" : "black",
        "padding-top" : "15px;",

    } : {
        "padding-top" : "20px;",
        "color" : "white;"
    }}
`;
export const NavLinks = styled.a`
    cursor: pointer;
    margin-top: 0;
    letter-spacing: 1px;
`;