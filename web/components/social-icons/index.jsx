import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import * as Styled from "./style";
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import {faFacebookF} from "@fortawesome/free-brands-svg-icons/faFacebookF";

const socialIcons = [
    {
        url: 'https://www.instagram.com/tomkucina/',
        icon: <FontAwesomeIcon style={{width: "22px", height: "22px"}} icon={faInstagram}/>
    },
    {
        url: 'https://www.facebook.com/Tom.Westmaccot',
        icon: <FontAwesomeIcon style={{width: "22px", height: "22px"}} icon={faFacebookF}/>
    },
    {
        url: 'https://www.linkedin.com/in/tomkucina/',
        icon: <FontAwesomeIcon style={{width: "22px", height: "22px"}} icon={faLinkedinIn}/>
    },
    {
        url: 'https://twitter.com/tomislavkucina',
        icon: <FontAwesomeIcon style={{width: "22px", height: "22px"}} icon={faTwitter}/>
    }
];

const SocialIcons = (props) => {
    return (
        <Styled.SocialWrapper header={props.header}>
            {socialIcons.map(icon => (
                <Styled.SocialIcon
                    header={props.header}
                    key={icon.url}
                    target="_blank"
                    href={icon.url}>
                    {icon.icon}
                </Styled.SocialIcon>
            ))}
        </Styled.SocialWrapper>
    );
};

export default SocialIcons;