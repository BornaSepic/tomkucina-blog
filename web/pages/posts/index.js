import client from "../../client";
import Layout from "../../components/layout";
import {urlFor} from "../index";
import PostsList from "../../components/posts-list";

const Posts = (props) => {

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

Posts.getInitialProps = async () => ({
    posts: await client.fetch(`
        *[_type == "post"]
    `)
});

export default Posts;