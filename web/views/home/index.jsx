import React from 'react';
import Link from "next/link";
import imageUrlBuilder from '@sanity/image-url';
import PostsList from "../../components/posts-list";
import Layout from "../../components/layout";
import client from "../../client";
import * as Styled from "./style";

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
            <PostsList posts={formattedPosts}/>
            <Styled.ImageLinksWrapper>
                {
                    props.linkBlocks.map(({_id, url = "", mainImage = {}, title = ""}) => (
                        <Link key={_id} href={url}>
                            <Styled.ImageLinkWrapper>
                                <Styled.ImageLinkImage
                                    src={urlFor(mainImage)}
                                />
                                <Styled.ImageLinkTitle>{title}</Styled.ImageLinkTitle>
                            </Styled.ImageLinkWrapper>
                        </Link>
                    ))
                }
            </Styled.ImageLinksWrapper>
            <Styled.Quote>
                “Usprkos svemu što su nas učili – nemoj, past ćeš!, nemoj, udarit ćeš se! - znanstveno je dokazano da je
                lakše uspjeti nego propasti.”
            </Styled.Quote>
        </Layout>
    )
};

export default IndexPageView;