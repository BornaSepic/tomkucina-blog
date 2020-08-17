import React from "react";
import client from "../client";
import AboutPageView from "../views/about";

const AboutPage = (props) => <AboutPageView {...props} />;

AboutPage.getInitialProps = async () => {
    const slug = "about";
    return ({
        slug: "about",
        postContent: await client.fetch(`
            *[_type == "post" && slug.current == $slug][0]
        `, {slug}),
        homepageContent: await client.fetch(`
            *[_type == "homepage"]    
        `),
        instagramImages: await client.fetch(`
       *[_type == "instagram"]    
    `)
    });
};


export default AboutPage;