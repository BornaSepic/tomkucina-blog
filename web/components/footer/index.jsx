import React from "react";
import Link from "next/link";
import InstagramContainer from '../instagram-container'
import SiteNavigation from "../navigation";
import SocialIcons from "../social-icons";
import * as Styled from "./style";

const Footer = (props) => {
    return (
        <Styled.Footer>
            <InstagramContainer />
            <SiteNavigation />
            <SocialIcons />
        </Styled.Footer>
    );
};

export default Footer;