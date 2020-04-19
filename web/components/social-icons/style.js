import styled from 'styled-components';

export const SocialIcon = styled.a`
    margin : 0 8px;
    color : ${props => props.header ? "black" : "white"}
`;

export const SocialWrapper = styled.div`
${props => props.header ? {
    "text-align" : "right;",
    "margin": "0px;",
    "border-bottom" : "solid 1px #9c9a9a",

} : {
    "text-align" : "center;",
    "border-bottom": "none;",
    "padding-bottom" : "30px;"
}}
`;