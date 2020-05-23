import React from "react";
import PostPageView from "../../views/posts/post";
import client from "../../client";

const PostPage = (props) => <PostPageView {...props} />;

PostPage.getInitialProps = async function (context) {
    const {slug = ""} = context.query;
    return ({
        postContent: await client.fetch(`
            *[_type == "post" && slug.current == $slug][0]
        `, {slug}),
        homepageContent: await client.fetch(`
            *[_type == "homepage"]    
        `),
    })
};

export default PostPage;