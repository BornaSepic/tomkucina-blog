import React from "react";
import * as Styled from "./style";

export const Link = (props) => (
        <Styled.Link href={props.url} spacingTop={true}>
            {props.text}
        </Styled.Link>
);
export default Link;