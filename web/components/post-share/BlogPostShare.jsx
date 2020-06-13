import * as Styled from "./style";

import TwitterShareButton from "react-share/lib/TwitterShareButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faFacebookF} from "@fortawesome/free-brands-svg-icons/faFacebookF";

import FacebookShareButton from "react-share/lib/FacebookShareButton";


const BlogPostShare = (props) => {
  return (
    <Styled.SocialShareWrapper>
        <FacebookShareButton
            url={"https://tomkucina.com" + props.postSlug}
            quote ={props.blogTitle}
        >
            <FontAwesomeIcon style={{width: "22px", height: "22px"}} icon={faFacebookF}/>
        </FacebookShareButton>
        <TwitterShareButton
            url={"https://tomkucina.com" + props.postSlug}
            title={props.blogTitle}
        >
            <FontAwesomeIcon style={{width: "22px", height: "22px"}} icon={faTwitter}/>
        </TwitterShareButton>
    </Styled.SocialShareWrapper>
  );
};

export default BlogPostShare;