import styled from 'styled-components';

export const PostContainer = styled.article`
         position: relative;
         overflow: hidden;
         cursor: pointer;
         max-height: 400px;
         height: 350px;
         background-size: cover;
         background-repeat: no-repeat;
         background-position: 50% 50%;
    `;

export const PostTitle = styled.h3`
         position: absolute;
         bottom: 0;
         padding: 6px 10px;
         background-color: #f5f5f5de;
    `;