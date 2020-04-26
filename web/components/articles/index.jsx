import React from "react";
import * as Styled from "./style";

let articleContent = [
    {
        title: "Some title",
        content: "some content",
        src: "https://uce5c187fbc68b7450e17319c44c.previews.dropboxusercontent.com/p/thumb/AAzjpX8z0oSB04C6IDu6KOKKE1kZFrxazkG9u50XI8f9ihxr8nrQlLNZNdMN3Qs0iW_TBOgwHifTzlJg7bUD3S-O_ffUmxuGxEX7-Xd9vPuUqt9kSbG1hFCuaGysNYE2cgjwE-HtA65JVr2AkP8xb4DIeTwK8Ftq1gjXSI1JPfZWF7EyFnnkiUUEhQQf9u4ZaM3zX8Cnu1odSDmiVypXqwDbSpYWI7y9tq1u_funH3kKjbXEYFC4_4yemCFiDDgS7JWPc-Pqktn_Nd5IB3BVUlZ6xeilxQAmkSpmhKhi2zrA6HQezEuktGLUG8PUrGKvtU_vTUsSnX_FjMuQdKvQTQZZFKnyhMDn3YfiVzt_H4VvaRl8Fj2mQYEfyVraMpy-661dxUkmRis7WoC94aaOGQfqxHtQ0ra4NHxkag_LZDPpRg/p.png?size=2048x1536&size_mode=3"
    },
    {
        title: "Some title",
        content: "some content",
        src: "https://uce5c187fbc68b7450e17319c44c.previews.dropboxusercontent.com/p/thumb/AAzjpX8z0oSB04C6IDu6KOKKE1kZFrxazkG9u50XI8f9ihxr8nrQlLNZNdMN3Qs0iW_TBOgwHifTzlJg7bUD3S-O_ffUmxuGxEX7-Xd9vPuUqt9kSbG1hFCuaGysNYE2cgjwE-HtA65JVr2AkP8xb4DIeTwK8Ftq1gjXSI1JPfZWF7EyFnnkiUUEhQQf9u4ZaM3zX8Cnu1odSDmiVypXqwDbSpYWI7y9tq1u_funH3kKjbXEYFC4_4yemCFiDDgS7JWPc-Pqktn_Nd5IB3BVUlZ6xeilxQAmkSpmhKhi2zrA6HQezEuktGLUG8PUrGKvtU_vTUsSnX_FjMuQdKvQTQZZFKnyhMDn3YfiVzt_H4VvaRl8Fj2mQYEfyVraMpy-661dxUkmRis7WoC94aaOGQfqxHtQ0ra4NHxkag_LZDPpRg/p.png?size=2048x1536&size_mode=3"
    }
]

const Articles = () => {
    return (
        <section>
            <Styled.OuterContainer>
            {
                articleContent.map(item => (
                    <Styled.ArticleContent>
                        <Styled.ImageContainer>
                            <Styled.Image src={item.src} />
                        </Styled.ImageContainer>
                        <Styled.ArticleContainer>
                            <Styled.ArticleTitle>{item.title}</Styled.ArticleTitle>
                            <p>{item.content}</p>
                            <Styled.ContinueReading href={item.link}>
                                nastavi čitati
                            </Styled.ContinueReading>
                        </Styled.ArticleContainer>    
                    </Styled.ArticleContent>
                    )
                )
            }
            </Styled.OuterContainer>
        </section>
    )
}

export default Articles;