import styled from 'styled-components';

export const InputButton = styled.button`
    font: inherit;
    font-weight: 400;
    cursor: pointer;
    border: none;
    padding: 10px 20px;
    margin: 0;
    max-height: 48px;
    color: white;
    background: black;
    width: max-content;
    font-size: 17px;
    cursor: pointer;
    margin: 10px auto;
    font-family: inherit;
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
    background-image: url('https://uc5bf4ad4028de41edb01d40d5a1.previews.dropboxusercontent.com/p/thumb/AAz6P8tYUlvsgwkIaJ13ymtoEfmddxfAwCgrZ9BqWSoVAXqxfEDUWunf-Iv6Ah1S8czQvQjxN6XF5OHPwgukI2eyXGqyLO9ZpSZ5Lc31r6ec59M8FQWyDCVs1mBq2k35nOugiqmHnzSlJ59vmj5D6ln2AgrMCJWkn8RSBfEFbfjujdd9pw8CSP_T3EoRJaXpotLKpOyPeuM3JVRLius7708HbCbakQs3MIUCI7miVjphiS_U_CjMZiWlduwog_MSRz6mlO6Tw1Vbhj5r5jmk9tskSUScDyBsIo5pSdtp0RNrsLPWUbhExpuaxfd-3ioqUcA6qwFOmur5H_gwOvRFGdber3nJ4w_0UrvtfRKVSBNLTA/p.png?size=2048x1536&size_mode=3');
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