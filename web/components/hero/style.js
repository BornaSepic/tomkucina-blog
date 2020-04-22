import styled from 'styled-components';

export const HeroContainer = styled.div`
    cursor: pointer;
    background-image: url('https://ucedf9041e89c45c58d92c91e28e.previews.dropboxusercontent.com/p/thumb/AAyelvo5PuTBTUzSd4AfwTjMhV2-6Tz52LumpTQOKXHtruOPFAtAlh6WvCWL9TA_s3Ppc7M53bMJFOpwYAv7ixaSBwxgN-LV3Be8UYSINVeExukmWoIYvbMDaX9oKx043jd9RuX99y_ISFBIgMVRdCTJW6BxTn_pA-JO1c3rSNYAkcT4mD5JrCHLZr0Vmj4LWfCkOQ-YVuqG_zktbbVU9bH4R4W2tdaYT6d_yI5a2pstUoZGVD4RYvpdoqnHzP9wZWiNSjMvZHwt4uOma3gsxbmmgKrKfzlVXq2AH-vEYRcpbcZOkEGG6beuL-QxnBmifZ6Itx5ieSnp1Zjuql0Ow4blV0QUZ3Kq3OFSDGW6e7NH53iL5Y1ZE92SHhU8iAI-HuBM40eTC9fHVVgvC12bjxXAltWrxhNl8owl2Ii5kc26RQ/p.png?size=2048x1536&size_mode=3');
    min-height: 600px;
    display: flex;
    justify-content: center;
    flex-flow: column;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export const HeroContent = styled.div`
    padding: 80px;
    
    * {
        color: #fff;
    }
    
    @media only screen and (max-width: 780px) {
        padding: 20px;
    }
`;

export const TextBackground = styled.span`
    background: #000;
    line-height: 65px;
`;