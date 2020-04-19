import React from "react";
import Link from "next/link";
import SiteNavigation from "../site-navigation";
import SocialIcons from "../social-icons";
import * as Styled from "./style";

const Footer = (props) => {
    return (
        <Styled.Footer>
            <SiteNavigation />
            <SocialIcons />
        </Styled.Footer>
    );
};

export default Footer;