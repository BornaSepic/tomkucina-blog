import styled from 'styled-components';

let props = props => props.flexdirection;

export const OuterPostContainer = styled.div`
    font-size: 0px;
    display: flex;
    flex-direction: ${props => props.flexdirection}
    
`

export const PostContainer = styled.div`
    width: 50%;
    margin: 0px;
    padding: 15px;
`

export const PostImageContainer = styled.div`
    width: 50%;
`

export const Image = styled.img`
    width: 98%;
`
export const PostTitle = styled.h1`
    font-family: 'Elephant',serif;
`