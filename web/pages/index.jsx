import React from "react";
import client from "../client";
import IndexPageView from "../views/home";

const IndexPage = (props) => <IndexPageView {...props} />;

IndexPage.getInitialProps = async () => ({
    posts: await client.fetch(`
      *[_type == "post"][0...2]
    `),
    categories: await client.fetch(`
       *[_type == "category"]
    `),
    homepageContent: await client.fetch(`
       *[_type == "homepage"]    
    `)
});

export default IndexPage;