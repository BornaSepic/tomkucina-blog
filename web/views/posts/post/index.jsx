import React from "react";
import {urlFor} from "../../home";
import Layout from "../../../components/layout";
import PostCoverImage from "../../../components/post-cover-image";
import BlockContent from "@sanity/block-content-to-react";
import client from "../../../client";

const PostPageView = (props) => {
    const {
        title = 'Missing title',
        mainImage,
        body
    } = props;

    return (
        <Layout>
            <article>
                <PostCoverImage
                    url={urlFor(mainImage).url()}
                    alt="Post cover image"
                    hotspot={mainImage.hotspot}
                />
                <h1>{title}</h1>
                <BlockContent
                    blocks={body}
                    imageOptions={{h: 640, fit: 'max'}}
                    {...client.config()}
                />
            </article>
        </Layout>
    )
};

export default PostPageView;