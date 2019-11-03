const PostsList = (props) => {
  return (
      <div className="post-list--wrapper">
          {props.posts.map((post, index) => (
              <article
                  key={"post-list__" + index}
                  style={{
                      backgroundImage: `url(${post.imageUrl})`
                  }}
              >
                  <h3>{post.caption}</h3>
              </article>
          ))}

          <style jsx>{`
              article {
                width: calc(100% + 2rem);
                margin-left: -1rem;
                max-height: 400px;
                height: 350px;
                position: relative;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: 50% 50%;
              }
              
              article h3 {
                position: absolute;
                bottom: 0;
                padding: 6px 10px;
                background-color: #f5f5f5de;
            }
          `}</style>
      </div>
  )
};

export default PostsList;