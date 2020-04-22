import styled from 'styled-components';

export const InputButton = styled.button`
    background: #fff;
    color: #333;
    font-weight: bold;
    font-size: 11px;
    cursor: pointer;
    font-size: 16px;
    border: 2px solid #fff;
    border-radius: 4px;
    padding: 10px 20px;
    margin: 0;
    max-height: 48px;
`;

export const Input = styled.input`
    border: none;
    margin: 0 30px 0 0;
    padding: 10px 5px;
    min-width: 180px;
`;
export const Label = styled.label`
    padding: 5px;
    font-size: 16px;  
`;

export const Form = styled.form`
    background-image: url(https://uc040c3a0e4f70503101a8871c90.previews.dropboxusercontent.com/p/thumb/AAzTaZwgTZG3sVbQYhQWeHbWfglpYYAfvJU8aaUyZZEPl6WgLuFTP3zBkx3e59FWTYGRW7bMz_xq52rUomBU3lXeFKa9HEZi39p5QJP0MuS3Ow6U-th2jnCzMAN2QHn4wRpfG4RcfNxJ-87UapRNrRKfw8k7Q4zQIYHF2yeUgp1v_BaPglZLcl37Uaz79KSsiBva7OyMun-XpkjPGnPZfaFip0qwlLfSbHsJs9vZ63TTC7ZJ0fvcuutG-cExTsUs_hhuTnEgZAQNz1MSZrmudD6UQETou4qxmekcG6Ao7L02m2ka6-4G9oBiFhyR2T61CGPRTdHAVUTueJED-fvVUegvob3QDu_OBP8YFVg4JwEKkQ/p.png?fv_content=true&size_mode=5);
    display: flex;
    font-size: 11px;
    justify-content: space-around;
    padding: 35px;
    color: white;
    background-size: cover;
    font-weight: bold;
    display: flex;
    align-items: center;
    
    @media only screen and (max-width: 900px) {
        flex-flow: column;
        
        label {
            margin-bottom: 10px;
        }
    }
    
    @media only screen and (max-width: 627px) {
        ${Input} + ${Input} {
            margin-top: 15px;
        }
    }
`;

export const FormContent = styled.div`
    margin: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    @media only screen and (max-width: 380px) {
        flex-flow: column;
        
        ${Input} {
            min-width: 100%;
        }
        
        ${Input} + ${Input} {
            margin-top: 15px;
            margin-bottom: 15px;
        }
        
    }
`;