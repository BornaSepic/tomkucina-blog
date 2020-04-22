import * as Styled from "./style";

const Hero = (props) => (
  <Styled.HeroContainer>
      <Styled.HeroContent>
          <h1>
              <Styled.TextBackground>tom.</Styled.TextBackground>
              <br/>
              <Styled.TextBackground>if you find Carrie Bradshaw </Styled.TextBackground>
              <br/>
              <Styled.TextBackground>annoying, you're gonna hate </Styled.TextBackground>
              <br/>
              <Styled.TextBackground>this.</Styled.TextBackground>
          </h1>
          <a><Styled.TextBackground>find out more</Styled.TextBackground></a>
      </Styled.HeroContent>
  </Styled.HeroContainer>
);

export default Hero;