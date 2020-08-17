import React from "react";
import Header from "../header";
import Footer from "../footer";
import {GlobalStyle} from "../../styles/global";

const Layout = ({instagramImages, children}) => {
    return (
        <>
            <GlobalStyle/>
            <Header/>
            <main>
                {children}
            </main>
            <Footer images={instagramImages}/>
        </>
    )
};

export default Layout;