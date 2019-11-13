import Header from "../header";
import Footer from "../footer";

const Layout = ({children}) => {
    return (
        <>
            <Header />
            <main>
                {children}
                <style jsx global>{`
                * {
                    box-sizing: border-box;
                    margin: 0;
                }
                * + * {
                    margin-top: 1rem;
                }
                html,
                body {
                    margin: 0;
                    color: #555;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
                    Helvetica, Arial, sans-serif, 'Apple Color Emoji',
                    'Segoe UI Emoji', 'Segoe UI Symbol';
                    font-size: 18px;
                    line-height: 1.4;
                }
                body > div {
                    margin-top: 0;
                }
                h1,
                h2,
                h3,
                h4,
                h5,
                h6 {
                    color: #222;
                    line-height: 1.1;
                }
                p {
                    font-size: 0.9rem;
                }
                strong {
                    color: #222;
                }
                li {
                    margin-top: 0.25rem;
                }
                main {
                    margin: 2rem auto;
                    max-width: 1080px;
                    padding: 0 10px;
                }
                figure {
                    display: inline-block;
                }
                figure + figure {
                    float: right;
                }
            `}</style>
            </main>
            <Footer />
        </>
    )
};

export default Layout;