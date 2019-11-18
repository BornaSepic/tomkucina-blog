import React from "react";
import Link from "next/link";
import SocialIcons from "../social-icons";
import * as Styled from "./style";

const Footer = () => {
    return (
        <footer>
            <SocialIcons />
            <Link href="/">
                <Styled.PageTitle className="title">tomkucina</Styled.PageTitle>
            </Link>
        </footer>
    );
};

export default Footer;