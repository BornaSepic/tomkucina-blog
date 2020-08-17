import React from "react";
import client from "../../client";
import PostsPageView from "../../views/posts";

const PostsPage = (props) => <PostsPageView {...props} />;

PostsPage.getInitialProps = async (context) => {
    const queryWithCategory = ` && ("${context.query.category}" in categories[]->title)`;

    return ({
        posts: await client.fetch(`
          *[_type == "post" && slug.current != "about" && slug.current != "contact" ${context.query.category ? queryWithCategory : ""}] | order(_createdAt desc)
        `),
        homepageContent: await client.fetch(`
       *[_type == "homepage"]    
    `),
        instagramImages: await client.fetch(`
       *[_type == "instagram"]    
    `),
        category: context.query.category
    });
};

export default PostsPage;