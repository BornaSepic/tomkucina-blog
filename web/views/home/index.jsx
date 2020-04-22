import React from 'react';
import imageUrlBuilder from '@sanity/image-url';
import Layout from "../../components/layout";
import Subscription from '../../components/subscription';
import client from "../../client";
import * as Styled from "./style";
import Hero from "../../components/hero";

export function urlFor(source) {
    return imageUrlBuilder(client).image(source)
}

const IndexPageView = (props) => {

    const {posts = []} = props;

    const formattedPosts = posts.map(
        ({_id, title = '', slug = '', mainImage = {}}) => slug && {
            id: _id,
            caption: title,
            slug: slug,
            imageUrl: urlFor(mainImage).url(),
            imageHotspot: mainImage.hotspot
        });

    return (
        <Layout>
            <Subscription />
            <section>
                <Hero />
            </section>
        </Layout>
    )
};

export default IndexPageView;