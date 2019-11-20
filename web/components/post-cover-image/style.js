import styled from 'styled-components';

export const PostCover = styled.img`
     width: 100vw;
     max-width: 100%;
     height: max-content;
     max-height: 100%;
     object-fit: cover;
     transition: transform .5s;
     object-position: ${props => `${props.xPosition}% ${props.yPosition}%`};
     
     &:hover {
        transform: ${props => props.disableHover ? "" : "scale(1.1)"};
     }
`;