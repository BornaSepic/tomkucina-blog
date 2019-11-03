import Layout from "../components/layout";
import client from "../client";
import imageUrlBuilder from '@sanity/image-url';
import PostsList from "../components/posts-list";

export function urlFor(source) {
    return imageUrlBuilder(client).image(source)
}

const Index = (props) => {
    console.log(props);

    const {posts = []} = props;

    const formattedPosts = posts.map(
        ({_id, title = '', slug = '', mainImage = {}}) => slug && {
            id: _id,
            caption: title,
            slug: slug,
            imageUrl: urlFor(mainImage).url()
        });

    console.log(formattedPosts);
    return (
        <Layout>
            <PostsList posts={formattedPosts} />
        </Layout>
    )
};

Index.getInitialProps = async () => ({
    posts: await client.fetch(`
    *[_type == "post"][0...2]
  `)
});

export default Index;