import Layout from "../components/layout";
import client from "../client";
import imageUrlBuilder from '@sanity/image-url';
import PostsList from "../components/posts-list";
import Link from "next/link";

export function urlFor(source) {
    return imageUrlBuilder(client).image(source)
}

const Index = (props) => {

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
            <div className="links--wrapper">
                {
                    props.linkBlocks.map(({_id, url = "", mainImage = {}, title = ""}) => (
                        <Link key={_id} href={url}>
                            <a className="link--wrapper">
                                <img
                                    src={urlFor(mainImage)}
                                />
                                <span>{title}</span>
                            </a>
                        </Link>
                    ))
                }
            </div>
            <h2 className="quote">
                “Usprkos svemu što su nas učili – nemoj, past ćeš!, nemoj, udarit ćeš se! - znanstveno je dokazano da je
                lakše uspjeti nego propasti.”
            </h2>
            <style jsx>{`
              article {
                max-height: 400px;
                height: 350px;
                position: relative;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: 50% 50%;
              }
              
              article h3 {
                position: absolute;
                bottom: 0;
                padding: 6px 10px;
                background-color: #f5f5f5de;
              }
              
              .links--wrapper {
                display: flex;
                justify-content: space-around;
                margin-top: 30px;
              }
              
              .links--wrapper a {
                    width: 100%;
                    margin: 0 10px;
                    text-decoration: none;
              }
              
              .link--wrapper {
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0;
                height: 180px;
                background-repeat: no-repeat;
                background-size: cover;
              }
              
              .link--wrapper span {
                text-decoration: none;
                font-weight: 500;
                font-size: 1.75rem;
                color: white;
                font-family: 'Playfair Display', serif;
                width: 90px;
                text-align: center;
              }
              
              .link--wrapper img {
                 position: absolute;
                 z-index: -1;
               }
              
              .quote {
                text-align: center;
                margin: 10% 0;
                font-style: italic;
                font-weight: 500;
               }
          `}</style>
        </Layout>
    )
};

Index.getInitialProps = async () => ({
    posts: await client.fetch(`
      *[_type == "post"][0...2]
    `),
    linkBlocks: await client.fetch(`
       *[_type == "homepageLinks"]
    `)
});

export default Index;