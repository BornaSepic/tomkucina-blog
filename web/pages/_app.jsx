import React from 'react';
import App, {Container} from 'next/app';
import Head from 'next/head';

export default class MyApp extends App {
    componentDidMount() {
        const jssStyles = document.querySelector('#jss-server-side');

        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render() {
        const {Component, pageProps} = this.props;
        return (
            <React.StrictMode>
                <Head>
                    <title>Tomkucina</title>
                    <meta
                        key="description"
                        name="description"
                        content=""
                    />
                </Head>
                <Component {...pageProps} />
            </React.StrictMode>
        );
    }
}