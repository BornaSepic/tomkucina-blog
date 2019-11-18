import React from "react";
import PostPageView from "../../views/posts/post";
import client from "../../client";

const PostPage = (props) => <PostPageView {...props} />;

PostPage.getInitialProps = async function (context) {
    const {slug = ""} = context.query;
    return await client.fetch(`
        *[_type == "post" && slug.current == $slug][0]
    `, {slug})
};

export default PostPage;