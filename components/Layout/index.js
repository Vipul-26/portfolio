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
                <meta name="description" content="A portfolio website created using next-js & tailwindcss." />
                <meta name="author" content="Vipul Singh" />
                <meta name="keywords" content="portfolio" />
                <meta name="theme-color" content="#0a192f" />
                <meta property="og:title" content="Vipul's Resume" />
                <meta property="og:description" content="This is a portfolio website" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://portfolio-vipul-26.vercel.app/" />
                <meta name="twitter:image" content="https://portfolio-vipul-26.vercel.app/_next/image?url=%2FVipul.jpg&w=384&q=75" />
                <meta name="robots" content="index, follow" />
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
