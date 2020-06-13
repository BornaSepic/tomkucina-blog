import styled from 'styled-components';

export const SocialShareWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    button {
        margin-top: 0;
        color: black !important;
        
        & + button {
            margin-left: 10px;
        }
    }
    
    @media only screen and (max-width: 680px) {
        justify-content: center;
    }
`;