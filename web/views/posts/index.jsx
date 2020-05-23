import React from "react";
import {urlFor} from "../home";
import Layout from "../../components/layout";
import PostsList from "../../components/posts-list";
import Hero from "../../components/hero";

const PostsPageView = (props) => {
    const {posts = []} = props;
    const {homepageContent = []} = props;

    const heroImageObject = {
        imageUrl: urlFor(homepageContent[0].mainImage).width(1920).url(),
        imageHotspot: homepageContent[0].mainImage.hotspot
    };
    const formattedPosts = posts.map(
        ({_id, _createdAt, title = '', slug = '', mainImage = {}, excerpt = ""}) => slug && {
            id: _id,
            title: title,
            caption: title,
            _createdAt: _createdAt,
            slug: slug,
            excerpt: excerpt,
            imageUrl: urlFor(mainImage).url(),
            imageHotspot: mainImage.hotspot,
        });

    return (
        <Layout>
            <Hero image={heroImageObject}/>

            <PostsList posts={formattedPosts} category={props.category}/>
        </Layout>
    )
};

export default PostsPageView;