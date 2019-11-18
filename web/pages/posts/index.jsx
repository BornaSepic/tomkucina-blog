import React from "react";
import client from "../../client";
import PostsPageView from "../../views/posts";

const PostsPage = (props) => <PostsPageView {...props} />;

PostsPage.getInitialProps = async () => ({
    posts: await client.fetch(`
        *[_type == "post"]
    `)
});

export default PostsPage;