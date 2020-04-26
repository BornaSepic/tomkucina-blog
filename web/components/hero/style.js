import styled from 'styled-components';

export const HeroContainer = styled.div`
    cursor: pointer;
    background-image: url('https://uc2b0afe141f339a6df73eb5aca8.previews.dropboxusercontent.com/p/thumb/AAy142gPM7nq0HJwAIXXXX88zdc0wBv8SgSEBeFqqdi-vZ6Ih_QRAcvDYkQmmS_HUpD4zUqDq0_7uiwSxTazDgyKes8X5Cmb2Bfx5OIX_MUHlyAzOAZsBE6EhAu6GiPM6k2cC8aoqAp2SUb0zAB3dk9fXxztFHchgyUj69XNpntrkRlezXyJ4hYUNjSrFV3oAH7njkAbryit3hiBAQowDwAG3YkpvKyhHEB8iUWbIHK3tV7Kh3rHJHvE6d8Uo0vPcjs5TIWcoyoSI232QqGr7Uc4st42aNeS14rUoieKyZED5nF5IB5AzMOAxuLnrt6RkkpcoOPHIH4Mug93lqmE3YzckeemKqPV3yJt6ySjJeRpO07kUohkI1qw2du5AiDhk9rCZ0P4BT7yPNKh6Cftw8WmN-KNCfjmD1SuVyFTPW1Adw/p.png?size=2048x1536&size_mode=3');
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