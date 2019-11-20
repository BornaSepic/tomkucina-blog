import React from "react";
import client from "../../client";
import PostsPageView from "../../views/posts";

const PostsPage = (props) => <PostsPageView {...props} />;

PostsPage.getInitialProps = async (context) => {
    const queryWithCategory = ` && ("${context.query.category}" in categories[]->title)`;

    return ({
        posts: await client.fetch(`
          *[_type == "post" ${context.query.category ? queryWithCategory : ""}]
        `)
    });
};

export default PostsPage;