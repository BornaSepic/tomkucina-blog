import React from "react";
import * as Styled from "./style";

let articleContent = [
    {
        title: "Some title",
        content: "some content",
        src: "https://ucac660ad378555d8d6b5742b916.previews.dropboxusercontent.com/p/thumb/AAzR9YWq6qc7uVREHex7wevLQws1kdVxCtQeziTkXBMhmtoJxkElyNQ_ncV7PSZZOn1ol5hkTQQixVGovoc45MAKqYruUgIb1gLwQ0pWjVTTGnVkChcz5b5Uj_YQdH7jo0D3pcVrhnENctE3FB4spFnOR3ym3jOchgVPCs3ZYa2MOzqEIBZxYwxs8Twa9Q3RT5sF9YgQjdlX70dtfNsks1sVAKn-R3U2mvDUifWioTNxUMCSBNkv3wOJWWzCOjyiz67ZoHrryZlPoYxrJNaXVMy-Lj5jaW-TsNfQo5lw-t8ZFuSYPxfFeYIiEd_2QxsfoZVqGHDP6_xtlSISQq7xXZ08-f7nGJB4IY5_0p_ZUD9kD0QhoXDTf-BTwnF9H-zUrYWLv2X30JEqgM2LqgwibS0NSxZL4mrBxhczdaJ4v9q8qA/p.png?fv_content=true&size_mode=5"
    },
    {
        title: "Some title",
        content: "some content",
        src: "https://ucac660ad378555d8d6b5742b916.previews.dropboxusercontent.com/p/thumb/AAzR9YWq6qc7uVREHex7wevLQws1kdVxCtQeziTkXBMhmtoJxkElyNQ_ncV7PSZZOn1ol5hkTQQixVGovoc45MAKqYruUgIb1gLwQ0pWjVTTGnVkChcz5b5Uj_YQdH7jo0D3pcVrhnENctE3FB4spFnOR3ym3jOchgVPCs3ZYa2MOzqEIBZxYwxs8Twa9Q3RT5sF9YgQjdlX70dtfNsks1sVAKn-R3U2mvDUifWioTNxUMCSBNkv3wOJWWzCOjyiz67ZoHrryZlPoYxrJNaXVMy-Lj5jaW-TsNfQo5lw-t8ZFuSYPxfFeYIiEd_2QxsfoZVqGHDP6_xtlSISQq7xXZ08-f7nGJB4IY5_0p_ZUD9kD0QhoXDTf-BTwnF9H-zUrYWLv2X30JEqgM2LqgwibS0NSxZL4mrBxhczdaJ4v9q8qA/p.png?fv_content=true&size_mode=5"
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