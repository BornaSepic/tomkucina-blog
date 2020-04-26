import React from "react";
import * as Styled from "./style";
import PostCoverImage from "../post-cover-image";
import Link from "../link";

const Articles = (props) => (
    <section>
        <Styled.ArticlesContainer>
            {
                props.articles.map(article => (
                        <Styled.ArticleContent>
                            <PostCoverImage
                                url={article.imageUrl}
                                alt="Post cover image"
                                hotspot={article.imageHotspot}
                                disableHover={true}
                            />
                            <Styled.ArticleContainer>
                                <Styled.ArticleTitle>{article.title}</Styled.ArticleTitle>
                                <p>{article.excerpt}</p>
                                <Link url={"/posts/" + article.slug.current} text={"nastavi čitati"}/>
                            </Styled.ArticleContainer>
                        </Styled.ArticleContent>
                    )
                )
            }
        </Styled.ArticlesContainer>
    </section>
);

export default Articles;