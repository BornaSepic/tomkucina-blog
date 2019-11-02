import client from "../../client";
import BlockContent from '@sanity/block-content-to-react'
import Layout from "../../components/layout";

const Post = (props) => {

    const {
        title = 'Missing title',
        name = 'Missing name',
        categories,
        authorImage,
        body
    } = props;
    console.log(props);

    return (
        <Layout>
            <article>
                <h1>{title}</h1>
                <BlockContent
                    blocks={body}
                    imageOptions={{h: 640, fit: 'max'}}
                    {...client.config()}
                />
            </article>

            <style jsx>
                {`
                    figure {
                        display: inline-block;
                    }
                    figure + figure {
                        float: right;
                    }
                `}
            </style>
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