const PostCoverImage = (props) => {
    return (
        <img
            src={props.url}
            alt={props.alt}
            style={{
                objectFit: 'cover',
                objectPosition: props.hotspot ? `${props.hotspot.x * 100}% ${props.hotspot.y * 100}%` : '',
                width: '100vw',
                maxWidth: '100%',
                height: 'max-content'
            }}
        />
    )
};

export default PostCoverImage;
