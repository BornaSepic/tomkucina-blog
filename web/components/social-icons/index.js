import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";

const socialIcons = [
    {
       url: 'https://www.facebook.com/Tom.Westmaccot',
       icon: <FontAwesomeIcon style={{ width: "22px", height: "22px"}} icon={faFacebook} />
    },
    {
        url: 'https://twitter.com/tomislavkucina',
        icon: <FontAwesomeIcon style={{ width: "22px", height: "22px"}} icon={faTwitter} />
    },
    {
        url: 'https://www.instagram.com/tomkucina/',
        icon: <FontAwesomeIcon style={{ width: "22px", height: "22px"}} icon={faInstagram} />
    },
    {
        url: 'https://www.linkedin.com/in/tomkucina/',
        icon: <FontAwesomeIcon style={{ width: "22px", height: "22px"}} icon={faLinkedin} />
    },
    {
        url: 'https://www.youtube.com/user/LoveMIlez',
        icon: <FontAwesomeIcon style={{ width: "22px", height: "22px"}} icon={faYoutube} />
    },
];

const SocialIcons = () => {
    return (
        <div className="social-icons--wrapper">

            <style jsx>
                {`
                    .social-icons--wrapper {
                        text-align: center;
                        margin: 0;
                    }
                    a {
                        margin: 0 8px;
                        color: #3F729B;
                    }
                `}
            </style>
            {socialIcons.map(icon => (
                <a key={icon.url} target="_blank" href={icon.url}>{icon.icon}</a>
            ))}
        </div>
    );
};

export default SocialIcons;