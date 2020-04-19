import React from "react";
import Link from "next/link";
import SocialIcons from "../social-icons";
import SiteNavigation from "../site-navigation";
import * as Styled from "./style";

const Header = (props) => {
    return (
        <header>
            <Link href="/">
                <Styled.PageTitle className="title">tomkucina</Styled.PageTitle>
            </Link>
            <SocialIcons header/>
            <SiteNavigation header/>
        </header>
    );
};

export default Header;