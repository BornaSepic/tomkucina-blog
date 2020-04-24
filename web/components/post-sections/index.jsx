import React from "react";
import * as Styled from "./style";

const postSectionTitle = [
    {
        title: 'Intervjui',
        content: 'some content',
        src: 'https://ucbaaf74148462f4b58f723510ea.previews.dropboxusercontent.com/p/thumb/AAxV2HMmy2uzD9joJ_z9pEHaioYPiGT7ceUcWALqIo25s9tGau98FXWE6IDFgykje4kWws4sixUvSqV1cG2HEdenifjlvEUcnUPe9IUNes3W2cPjjxOyYfWUj5gfeoIg-QhHc5mNJfR4hQnPeJEm3i_EglLOY0v6xb9dHfqSfvy000haattXxoeYs8LgKAuAc_5BJtDCkSKN_u_RFuTjbFYhcniuXQyQBXizDBDy9FCHgVwvGJa1o4II3s2763Ur6rgxR0EBDkBcHS_V-8WVbDzoXJ8PxGX639SMLwJmiieNtVbulZQM1nNT9_z4XGud9IrjLFCKHh5tTPNGvlTY6msXBmgXYtbFJFYE07l3YLTx2Halyj8qvjMc-CUhCm_zRs0UJZAN1C88spGMGKoHI__aiqkISaaBfbTYwzklqZ1LVQGuM3PG4t7oxyqo3MUqc_DPvD__iccWI_Ld4vO1IpV9/p.png?size=2048x1536&size_mode=3',
        direction: 'row'
    },
    {
        title: 'Putovanja i ostalo',
        content: 'some content',
        src: 'https://ucc236c254f7b93fae603c37c1b8.previews.dropboxusercontent.com/p/thumb/AAwEJH4ySx5N_i_i-fcSGmcjF_XgidOaE3aTXTwHTSFUPgp7bqZpvBqVZ8Mk1IpiUTeC3wCYpNUjGaXurcwWYM8xuiUlhfBhnWI6TGPUhqDcB6WOoYSuHdORJTItkyKGp_-KR2PguwKYacu8rwEPD1ecksuFrUIniH5g183p6okvBvID2OVKXN8Ea7Fov4xt851ZbwpggiKhD7Hwvp6PupoAvl_OtOynPkJ2AZN0uKJbyWANcXJc8pRY3EZEABC5MVpriPf8dWOqpB8FC55Lo0BReHx-8bq5vS1S3JHhepyDMVeu1BtikktLM6o2GFlNqL5he9Qgf1wpXIIH3J2wmmm75BnMiLFsl6HQ77OAp8A5j89VcRNaKmtm0sKdXTosBtymoZbj_RRk7QOPmR7WtUyIr11ce6r7xSMxnXN4Itw9MOiBOgUDm162tKPpd4225qHej9BgzsixdjezLgRjvvWH/p.png?fv_content=true&size_mode=5',
        direction: 'row-reverse'
    }
];

const PostSections = (props) => {
    return (
        <section>
            {
                postSectionTitle.map(item => (
                    <Styled.OuterPostContainer flexdirection={item.direction}>
                        <Styled.PostImageContainer>
                            <Styled.Image src={item.src}/>
                        </Styled.PostImageContainer>
                        <Styled.PostContainer>
                            <Styled.PostTitle>{item.title}</Styled.PostTitle>
                            <p>{item.content}</p>
                        </Styled.PostContainer>
                    </Styled.OuterPostContainer>
                    )
                )
            }
        </section>
    )
}

export default PostSections;