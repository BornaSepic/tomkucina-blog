import React from "react";
import client from "../client";
import ContactPageView from "../views/contact";

const ContactPage = (props) => <ContactPageView {...props} />;

ContactPage.getInitialProps = async () => {
    const slug = "contact";
    return ({
        slug: "contact",
        postContent: await client.fetch(`
            *[_type == "post" && slug.current == $slug][0]
        `, {slug}),
        homepageContent: await client.fetch(`
            *[_type == "homepage"]    
        `),
    });
};


export default ContactPage;