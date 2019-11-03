import Link from "next/link";
import SocialIcons from "../social-icons";

const Header = (props) => {
    return (
        <header>
            <Link href="/">
                <a className="title">tomkucina</a>
            </Link>
            <SocialIcons />
            <style jsx>{`
                .title {
                    color: #333;
                    text-decoration: none;
                    display: block;
                    margin-top: 5px;
                    font-size: 2.5rem;
                    text-align: center;
                    font-family: 'Playfair Display', serif;
                    font-weight: 900;
                }
            `}</style>
        </header>
    );
};

export default Header;