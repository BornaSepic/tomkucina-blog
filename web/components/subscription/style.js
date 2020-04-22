import styled from 'styled-components';

export const InputButton = styled.input`
    width : max-content;
    padding : 0px;
    margin : 10px 0px;
    background : none;
    border : none;
    color: white;
    font-weight: bold;
    font-size: 11px;
    cursor: pointer;
`
export const Form = styled.form`
    background-image: url(https://uc040c3a0e4f70503101a8871c90.previews.dropboxusercontent.com/p/thumb/AAzTaZwgTZG3sVbQYhQWeHbWfglpYYAfvJU8aaUyZZEPl6WgLuFTP3zBkx3e59FWTYGRW7bMz_xq52rUomBU3lXeFKa9HEZi39p5QJP0MuS3Ow6U-th2jnCzMAN2QHn4wRpfG4RcfNxJ-87UapRNrRKfw8k7Q4zQIYHF2yeUgp1v_BaPglZLcl37Uaz79KSsiBva7OyMun-XpkjPGnPZfaFip0qwlLfSbHsJs9vZ63TTC7ZJ0fvcuutG-cExTsUs_hhuTnEgZAQNz1MSZrmudD6UQETou4qxmekcG6Ao7L02m2ka6-4G9oBiFhyR2T61CGPRTdHAVUTueJED-fvVUegvob3QDu_OBP8YFVg4JwEKkQ/p.png?fv_content=true&size_mode=5);
    display: flex;
    font-size: 11px;
    justify-content: space-around;
    padding: 6px;
    color: white;
    background-size: contain;
    font-weight: bold;
`

export const Input = styled.input`
    margin: 10px 10px;
    width: ${props => props.width};
    height: 20px;
    border: none;
`
export const Label = styled.label`
    padding: 5px;
`