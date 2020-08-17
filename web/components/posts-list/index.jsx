import React from "react";
import PostCoverImage from "../post-cover-image/";
import Link from "next/link";
import * as Styled from "./style";

const PostsList = (props) => {
    function formatDate(date) {
        const dateObject = new Date(date);
        if (dateObject) {
            return dateObject.getDate() + "/" + dateObject.getMonth() + "/" + dateObject.getFullYear()
        }
    }
    return (
        <section className="post-list--wrapper">
            <Styled.CategoryTitle>{props.category ? props.category : "Svi postovi"}</Styled.CategoryTitle>
            {props.posts.map((post, index) => (
                <Styled.PostContainer
                    key={"post-list__" + index}
                >
                   <div>
                       <PostCoverImage
                           url={post.imageUrl}
                           alt={`${post.title} cover image`}
                           hotspot={post.imageHotspot}
                           disableHover={true}
                       />
                   </div>
                    <div>
                        <Styled.PostTitle>{post.title}</Styled.PostTitle>
                        <span>{formatDate(post._createdAt)}</span>
                        <p>{post.excerpt}</p>
                        <Link href={`/posts/${post.slug.current}`} as={`/posts/${post.slug.current}`}>
                            <Styled.Link>
                                nastavi čitati
                            </Styled.Link>
                        </Link>
                    </div>
                </Styled.PostContainer>
            ))}
        </section>
    )
};

export default PostsList;