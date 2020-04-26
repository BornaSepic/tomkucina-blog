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
            imageUrl: urlFor(categoryImage).url(),
            imageHotspot: categoryImage.hotspot
        });

    console.log(formattedPosts);

    return (
        <Layout>
            <Hero/>
            <Subscription/>
            <Categories categories={formattedCategories}/>
            <AllPostsLink/>
            <Articles articles={formattedPosts}/>
        </Layout>
    )
};

export default IndexPageView;