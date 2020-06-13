import styled from 'styled-components';

export const Container = styled.div`
    background-image: ${props => `url('${props.backgroundImage}')`};
    background-size: cover;
    text-align: center;
    padding: 25px;
    
    a {
        position: relative;
        margin-top: 0;
        text-decoration: none;
        &:before {
            position: absolute;
            width: 100%;
            height: 1px;
            background: white;
            content: "";
            bottom: 10px;
            width: calc(100% - 16px);
            left: 8px;
            transition: all .3s;
            transform: scaleX(0);
        }
        
        &:hover {
             &:before {
                transform: scaleX(1);
            }
        }
    }
`;