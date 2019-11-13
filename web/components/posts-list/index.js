import {urlFor} from "../../pages";
import PostCoverImage from "../post-cover-image/";
import Link from "next/link";

const PostsList = (props) => {
            console.log(props, 'ahoy');
    return (
        <div className="post-list--wrapper">
            {props.posts.map((post, index) => (
                <article
                    key={"post-list__" + index}
                    style={{
                        backgroundImage: `url(${post.imageUrl})`
                    }}
                >
                    <Link href={`/posts/${post.slug.current}`} as={`/posts/${post.slug.current}`}>
                        <a>
                            <PostCoverImage
                                url={urlFor(post.imageUrl).url()}
                                alt="Post cover image"
                                hotspot={post.imageHotspot}
                            />
                            <h3>{post.caption}</h3>
                        </a>
                    </Link>
                </article>
            ))}

            <style jsx>{`
              article {
                cursor: pointer;
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
          `}</style>
        </div>
    )
};

export default PostsList;