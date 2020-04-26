import React from "react";
import * as Styled from "./style";

const postSectionTitle = [
    {
        title: 'Intervjui',
        content: 'some content that should look good whene there is a bit more of it like this right?',
        src: 'https://uc25ee3564249bf00f4fe51dd6f0.previews.dropboxusercontent.com/p/thumb/AAzQICEPMXVczlRoimZcB0fy593doJXxFATA-P_GGSnZQO_liY_3uoHGW2n3clXV_qiGJm7og1pH0bNkc_HX60muxOV6D9W_dLil__zaKtGkkQwaI85J1zH57IcepAlLrKkftXJYFhKrWWAh34LqnHFgfUrA5gqr8XOnyrUbvgPQWvKEB1_BjcB4PNOzJwBITBLp4b2ZeZNgDsVKJVHwUrPK69IjOY8DJaucAbGcmg7rw-TAylhriYB-nS4mIZJGfLCyDWSffMM1nddFzB57JnWcg3p3pqUxSLqLsajr92speJBjc5D0blOaWVhenFKge37E2wDJXz3PF8YA8lJKgN-Uj6Lj4L15Iab7vlbls_WTGYnxTKkEVjQmLEVt-QyW0oGwnRfrleKda7FHcenaQOhvbP79rDn4s6MpimCTw7E1Kr8BtMMd5zjlVQadlRpHyA3mnDL5NFMZ7dtT0b1CnuTb/p.png?size=2048x1536&size_mode=3',
        direction: 'row'
    },
    {
        title: 'Putovanja i ostalo',
        content: 'some content',
        src: 'https://ucc487b4346ec9d491ef2b74e8ef.previews.dropboxusercontent.com/p/thumb/AAxCBHFg_hkhzi_axasArJVf7QmeOtjo6VOBMV_qsRs6lukXueYZUutSeM-hKbVlgLzUb7aEDcaWr_bb3ujJNlAX-fI8meKnw4jMRj0T--ePUTHIZZLALOEjx0i7b__fTj5OgBSbXe3J_MH06bYry6aNW3xsDMLCbujfYnm99LQZCyA8Qw9xPr-s3SpUyBiJzq4vOD6iU97cRoVk_9Zeb0PpxTN4uuqdWR-VQxrPPV88Eyv2XlxVfQH4WorZFxZVoBoi8OfYPXP68s8rCVZ_jI6okKLmKSjR6FCtukao_Wa4k7C6wXdqwZhK9_T25haBbaAWZ03u7KskjrCdsOyGE69_ymIvP0YwK6kRJFZ1qXM6HABCFSVdCsEVhEQj2Ksp8Soh4sWX-g-MPezFv0lsy12gqz3Gpmad6qPJXQlP6G8ys7cIdd2toKTIa30ZKLTHngLjoH_BoEUHedC6Um4EVlrn/p.png?fv_content=true&size_mode=5',
        direction: 'row-reverse'
    }
];

const PostSections = (props) => {
    return (
        <section className={"no-space"}>
            {postSectionTitle.map((item, index) => {
                const orientation = index % 2 === 0 ? "left" : "right";
                return (
                    <Styled.OuterPostContainer key={`CATEGORY_${index}`} orientation={orientation}>
                        <Styled.PostImageContainer>
                            <Styled.Image src={item.src}/>
                        </Styled.PostImageContainer>
                        <Styled.PostContainer orientation={orientation}>
                            <Styled.PostTitle>{item.title}</Styled.PostTitle>
                            <p>{item.content}</p>
                        </Styled.PostContainer>
                    </Styled.OuterPostContainer>
                );
            })}
        </section>
    )
}

export default PostSections;