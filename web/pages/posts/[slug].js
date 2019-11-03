import client from "../../client";
import BlockContent from '@sanity/block-content-to-react'
import Layout from "../../components/layout";
import {urlFor} from "../index";

const Post = (props) => {

    const {
        title = 'Missing title',
        mainImage,
        body
    } = props;

    return (
        <Layout>
            <article>
                <img
                    src={urlFor(mainImage).url()}
                    alt="Post cover image"
                />
                <h1>{title}</h1>
                <BlockContent
                    blocks={body}
                    imageOptions={{h: 640, fit: 'max'}}
                    {...client.config()}
                />
            </article>
        </Layout>
    )
};

Post.getInitialProps = async function (context) {
    const {slug = ""} = context.query;
    return await client.fetch(`
        *[_type == "post" && slug.current == $slug][0]
    `, {slug})
};

export default Post;