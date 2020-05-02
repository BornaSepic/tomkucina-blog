import React from 'react';
import imageUrlBuilder from '@sanity/image-url';
import Layout from "../../components/layout";
import Subscription from '../../components/newsletter';
import client from "../../client";
import * as Styled from "./style";
import Hero from "../../components/hero";
import Categories from "../../components/categories";
import AllPostsLink from "../../components/all-posts-link";
import Articles from "../../components/articles";

export function urlFor(source) {
    return imageUrlBuilder(client).image(source)
}

const IndexPageView = (props) => {
    const {posts = []} = props;
    const {categories = []} = props;
    const {homepageContent = []} = props;
    const formattedPosts = posts.map(
        ({_id, title = '', slug = '', excerpt = '', mainImage = {}}) => slug && {
            id: _id,
            title: title,
            excerpt: excerpt,
            slug: slug,
            imageUrl: urlFor(mainImage).url(),
            imageHotspot: mainImage.hotspot
        });

    const formattedCategories = categories.map(
        ({_id, title = '', description = '', categoryImage = {}}) => _id && {
            id: _id,
            title: title,
            description: description,
            imageUrl: urlFor(categoryImage).width(980).url(),
            imageHotspot: categoryImage.hotspot
        });

    const heroImageObject = {
        imageUrl: urlFor(homepageContent[0].mainImage).width(1920).url(),
        imageHotspot: homepageContent[0].mainImage.hotspot
    };

    const newsletterImageObject = {
        imageUrl: urlFor(homepageContent[0].newsletterImage)
    };

    return (
        <Layout>
            <Hero image={heroImageObject}/>
            <Subscription image={newsletterImageObject}/>
            <Categories categories={formattedCategories}/>
            <AllPostsLink/>
            <Articles articles={formattedPosts}/>
        </Layout>
    )
};

export default IndexPageView;