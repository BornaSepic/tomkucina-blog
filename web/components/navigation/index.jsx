import React from 'react';
import Link from "next/link";
import * as Styled from "./style";

const navItems = [
    {
        ref: '/home',
        content: 'Home'
    },
    {
        ref: '/blog',
        content: 'Blog'
    },
    {
        ref: '/about',
        content: 'About'
    },
    {
        ref: '/contact',
        content: 'Contact'
    }
];

const SiteNavigation = (props) => {
    return (
        <Styled.NavbarWrapper header={props.header}>
            {
                navItems.map(item => (
                    <Link href={item.ref} key={item.content.toUpperCase() + props.header}>
                        <Styled.NavLinks>{item.content.toUpperCase()}</Styled.NavLinks>
                    </Link>
                ))
            }
        </Styled.NavbarWrapper>
    );
};

export default SiteNavigation;