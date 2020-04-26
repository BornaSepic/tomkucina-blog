import React from "react";
import Link from "next/link";
import SocialIcons from "../social-icons";
import SiteNavigation from "../navigation";
import * as Styled from "./style";

const Header = (props) => {
    return (
        <Styled.Header>
            <Styled.HeaderWrapper>
                <Link href="/">
                    <Styled.PageTitle className="title">tomkucina.com</Styled.PageTitle>
                </Link>
                <SocialIcons header/>
            </Styled.HeaderWrapper>
            <SiteNavigation header/>
        </Styled.Header>
    );
};

export default Header;