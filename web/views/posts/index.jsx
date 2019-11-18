import React from "react";
import {urlFor} from "../home";
import Layout from "../../components/layout";
import PostsList from "../../components/posts-list";

const PostsPageView = (props) => {
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
            <PostsList posts={formattedPosts}/>
        </Layout>
    )
};

export default PostsPageView;