import React from "react";
import client from "../client";
import IndexPageView from "../views/home";

const IndexPage = (props) => <IndexPageView {...props} />;

IndexPage.getInitialProps = async () => ({
    posts: await client.fetch(`
      *[_type == "post" && slug.current != "about" && slug.current != "contact"][0...2] | order(_createdAt desc)
    `),
    categories: await client.fetch(`
       *[_type == "category"]
    `),
    homepageContent: await client.fetch(`
       *[_type == "homepage"]    
    `),
    instagramImages: await client.fetch(`
       *[_type == "instagram"]    
    `)
});

export default IndexPage;