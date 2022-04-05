import React from 'react';
import Head from 'next/head';
import classnames from 'classnames';
import Header from '../Header/header';
import Footer from '../Footer/footer';

const Layout = ({ children }) => {
    return (
        <div id="layout" >
            <Head>
                <title>
                    Vipul Singh
                </title>
                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
                    type="text/css"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                />
                <link rel="shortcut icon" href="/favicon.png" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1.0"
                />
                <>
                    <meta property="og:title" content="Vipul's Resume" />
                    <meta property="og:description" content="This is a portfolio" />
                    <meta name="keywords" content="portfolio" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://vipulsingh.com" />
                    <meta name="robots" content="noindex, nofollow" />
                </>
            </Head>
            <Header />
            <main className={classnames('overflow-x-hidden')}>
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
