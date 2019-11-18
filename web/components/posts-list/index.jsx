import React from "react";
import PostCoverImage from "../post-cover-image/";
import Link from "next/link";
import * as Styled from "./style";
import {urlFor} from "../../views/home";

const PostsList = (props) => {
    return (
        <div className="post-list--wrapper">
            {props.posts.map((post, index) => (
                <Styled.PostContainer
                    key={"post-list__" + index}
                >
                    <Link href={`/posts/${post.slug.current}`} as={`/posts/${post.slug.current}`}>
                        <a>
                            <PostCoverImage
                                url={urlFor(post.imageUrl).url()}
                                alt="Post cover image"
                                hotspot={post.imageHotspot}
                            />
                            <Styled.PostTitle>{post.caption}</Styled.PostTitle>
                        </a>
                    </Link>
                </Styled.PostContainer>
            ))}
        </div>
    )
};

export default PostsList;