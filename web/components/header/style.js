import styled from 'styled-components';
import {SocialWrapper} from "../social-icons/style";

export const PageTitle = styled.a`
    cursor: pointer;
    color: black;
    text-decoration: none;
    display: block;
    margin-top: 5px;
    font-size: 3rem;
    text-align: center;
    font-family: 'elephant', serif;
    letter-spacing: 2px;
    margin-bottom: 0px;
    
    @media only screen and (max-width: 840px) {
        margin-bottom: 25px;
        font-size: 2.5rem;
    }
    @media only screen and (max-width: 340px) {
        margin-bottom: 25px;
        font-size: 2rem;
    }
`;

export const Header = styled.header`
`;

export const HeaderWrapper = styled.div`
    border-bottom : solid 1px #9c9a9a;
    position: relative;
    
    
    ${SocialWrapper} {
        position: absolute;
        bottom: 0;
        right: 0;
    }
`;