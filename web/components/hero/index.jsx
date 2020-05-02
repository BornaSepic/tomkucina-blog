import * as Styled from "./style";
import Link from "../link";

const Hero = (props) => (
    <Styled.HeroContainer backgroundUrl={props.image.imageUrl}>
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
            <Link href={"#"} text={"find out more"} spacingTop={true}/>
        </Styled.HeroContent>
    </Styled.HeroContainer>
);

export default Hero;