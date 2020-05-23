import React from "react";
import {urlFor} from "../../home";
import Layout from "../../../components/layout";
import PostCoverImage from "../../../components/post-cover-image";
import BlockContent from "@sanity/block-content-to-react";
import client from "../../../client";
import * as Styled from "./style";
import Hero from "../../../components/hero";

const PostPageView = (props) => {
    const {
        title = 'Missing title',
        body
    } = props.postContent;

    const {homepageContent = []} = props;
    const heroImageObject = {
        imageUrl: urlFor(homepageContent[0].mainImage).width(1920).url(),
        imageHotspot: homepageContent[0].mainImage.hotspot
    };

    return (
        <Layout>
            <Hero image={heroImageObject}/>
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