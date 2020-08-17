import React from "react";
import {urlFor} from "../home";
import Layout from "../../components/layout";
import Hero from "../../components/hero";
import * as Styled from "../posts/post/style";
import BlogPostShare from "../../components/post-share/BlogPostShare";
import BlockContent from "@sanity/block-content-to-react";
import client from "../../client";

const ContactPageView = (props) => {
    const {
        title = 'Missing title',
        body
    } = props.postContent || {};
    const {homepageContent = []} = props;
    const {instagramImages = []} = props;

    const heroImageObject = {
        imageUrl: urlFor(homepageContent[0].mainImage).width(1920).url(),
        imageHotspot: homepageContent[0].mainImage.hotspot
    };

    return (
        <Layout instagramImages={instagramImages}>
            <Hero image={heroImageObject}/>
            <div id="fb-root"></div>
            <script async defer crossOrigin="anonymous"
                    src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v7.0&appId=540563953169088&autoLogAppEvents=1"
                    nonce="YGpmrPko"></script>
            <Styled.BlogPostContainer>
                <Styled.BlogPostTitle>{title}</Styled.BlogPostTitle>
                <BlockContent
                    blocks={body}
                    imageOptions={{h: 640, fit: 'max'}}
                    {...client.config()}
                />
                <div className="fb-comments" data-href={`https://tomkucina.com` + props.slug} data-numposts="55"
                     data-width=""></div>
            </Styled.BlogPostContainer>
        </Layout>
    )
};

export default ContactPageView;