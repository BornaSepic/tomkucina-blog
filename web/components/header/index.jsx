import React from "react";
import Link from "next/link";
import SocialIcons from "../social-icons";
import * as Styled from "./style";

const Header = () => {
    return (
        <header>
            <Link href="/">
                <Styled.PageTitle className="title">tomkucina</Styled.PageTitle>
            </Link>
            <SocialIcons />
        </header>
    );
};

export default Header;