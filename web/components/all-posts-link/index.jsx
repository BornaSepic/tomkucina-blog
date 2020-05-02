import React from "react";
import * as Styled from "./style";
import Link from "../link";

const AllPostsLink = (props) => {
    return (
        <section className={"no-space"}>
            <Styled.Container backgroundImage={props.image.imageUrl}>
                <Link href="/" text={"SVE OBJAVE PRONAĐI OVDJE"} />
            </Styled.Container>
        </section>
    )
}

export default AllPostsLink;