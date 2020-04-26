import React from "react";
import * as Styled from "./style";

const Categories = (props) => (
    <section >
        {props.categories.map((category, index) => {
            const orientation = index % 2 === 0 ? "left" : "right";
            return (
                <Styled.CategoryWrapper key={category.id} orientation={orientation}>
                    <Styled.CategoryImageContainer>
                        <Styled.Image src={category.imageUrl}/>
                    </Styled.CategoryImageContainer>
                    <Styled.CategoryContainer orientation={orientation}>
                        <Styled.CategoryTitle>{category.title}</Styled.CategoryTitle>
                        <Styled.CategoryDescription>{category.description}</Styled.CategoryDescription>
                    </Styled.CategoryContainer>
                </Styled.CategoryWrapper>
            );
        })}
    </section>
);

export default Categories;