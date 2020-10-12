import styled from 'styled-components';

export const Container = styled.div`
    background: #f4dfcc;
    padding: 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media only screen and (max-width: 640px) {
      display: block;
      text-align: center;
    }
`;
export const Paragraph = styled.p`
    color: white;
    background: black;
    padding: 4px;
    width: max-content;
    font-size: 20px;
    user-select: none;
    
    @media only screen and (max-width: 640px) {
      width: 100%;
    }
`;
export const InstaLink = styled.a`
    text-decoration: none;
    color: black;
    margin-top: 10px;
    display: flex;
    align-items: center;
    font-weight: bold;
    
    @media only screen and (max-width: 640px) {
      justify-content: center;
    }
`

export const InstagramImageContainer = styled.div`
    display: grid;
    grid-template-columns: ${(props) => props.count > 6 ? 'repeat(6, 180px)' : 'repeat(' + props.count + ',180px)'};
                grid-gap: 15px;

    a {
        width: 100%;
        height: 100%;
        margin: 0;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }  
    }
    
    @media only screen and (max-width: 1190px)  {
        grid-template-columns: repeat(3,180px);
    }
    
    @media only screen and (max-width: 640px)  {
        grid-template-columns: repeat(2, 1fr);
        width: 100%;
    }
`;