import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import * as Styled from "./style";
import {InstagramImageContainer} from "./style";
import {urlFor} from "../../views/home";

export const InstagramContainer = ({images}) => {
    return (
        <Styled.Container>
            <Styled.Paragraph>PRONAĐI ME NA INSTAGRAMU</Styled.Paragraph>
            <Styled.InstaLink href="https://www.instagram.com/tomkucina/">
            <FontAwesomeIcon style={{ width: "22px", height: "22px"}} icon={faInstagram} />
            tomkucina
            </Styled.InstaLink>

            <InstagramImageContainer count={images.length}>
                {images && images.map(image => {
                    return (
                      <a key={image["_id"]} href={image.link}>
                          <img src={urlFor(image.image).width(360).url()} />
                      </a>
                    );
                })}
            </InstagramImageContainer>
        </Styled.Container>
    )
}

export default InstagramContainer;