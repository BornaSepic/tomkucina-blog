import React from "react";
import {urlFor} from "../../home";
import Layout from "../../../components/layout";
import PostCoverImage from "../../../components/post-cover-image";
import BlockContent from "@sanity/block-content-to-react";
import client from "../../../client";
import * as Styled from "./style";

const PostPageView = (props) => {
    const {
        title = 'Missing title',
        mainImage,
        body
    } = props;

    return (
        <Layout>
            <PostCoverImage
                url={urlFor(mainImage).url()}
                alt="Post cover image"
                hotspot={mainImage.hotspot}
                disableHover={true}
            />
            <Styled.BlogPostContainer>
                <Styled.BlogPostTitle>{title}</Styled.BlogPostTitle>
                <BlockContent
                    blocks={body}
                    imageOptions={{h: 640, fit: 'max'}}
                    {...client.config()}
                />
            </Styled.BlogPostContainer>
        </Layout>
    )
};

export default PostPageView;