import styled from 'styled-components';

export const NavbarWrapper = styled.div`
${props => props.header ? {
    "margin" : "5px;",
    "text-align": "center;",
    "color" : "black"

} : {
    "text-align" : "center;",
    "padding-top" : "20px;",
    "color" : "white;"

}}
`;
export const NavLinks = styled.a`
    margin: 0 30px;
    cursor: pointer;
`;