import React from "react";
import * as Styled from './style';

const PostCoverImage = (props) => {
    return (
        <Styled.PostCover
            src={props.url}
            alt={props.alt}
            xPosition={props.hotspot && props.hotspot.x ? props.hotspot.x * 100 : 0}
            yPosition={props.hotspot && props.hotspot.y ? props.hotspot.y * 100 : 0}
        />
    )
};

export default PostCoverImage;
