import React from "react";
import {urlFor} from "../../home";
import Layout from "../../../components/layout";
import BlockContent from "@sanity/block-content-to-react";
import client from "../../../client";
import * as Styled from "./style";
import Hero from "../../../components/hero";
import BlogPostShare from "../../../components/post-share/BlogPostShare";

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
            <div id="fb-root"></div>
            <script async defer crossOrigin="anonymous"
                    src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v7.0&appId=540563953169088&autoLogAppEvents=1"
                    nonce="YGpmrPko"></script>
            <Hero image={heroImageObject}/>
            <Styled.BlogPostContainer>
                <Styled.BlogPostTitle>{title}</Styled.BlogPostTitle>
                <BlogPostShare postSlug={props.slug} blogTitle={title} blogHero={heroImageObject.imageUrl}/>
                <BlockContent
                    blocks={body}
                    imageOptions={{h: 640, fit: 'max'}}
                    {...client.config()}
                />
                <BlogPostShare blogTitle={title} blogHero={heroImageObject.imageUrl}/>
                <div className="fb-comments" data-href={`https://tomkucina.com` + props.slug} data-numposts="55"
                     data-width=""></div>
            </Styled.BlogPostContainer>
        </Layout>
    )
};

export default PostPageView;