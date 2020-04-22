import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import * as Styled from "./style";

export const InstagramContainer = () => {
    return (
        <Styled.Container>
            <Styled.Paragraph>PRONAĐI ME NA INSTAGRAMU</Styled.Paragraph>
            <Styled.InstaLink href="https://www.instagram.com/tomkucina/">
            <FontAwesomeIcon style={{ width: "22px", height: "22px"}} icon={faInstagram} />
            tomkucina
            </Styled.InstaLink>   
        </Styled.Container>
    )
}

export default InstagramContainer;