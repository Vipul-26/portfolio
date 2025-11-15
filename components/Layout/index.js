import React from "react";
import Head from "next/head";
import classnames from "classnames";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <div id="layout">
      <Head>
        <title>Vipul Singh Portfolio</title>
        <meta
          name="description"
          content="Portfolio website of Vipul Singh, Front-End Developer skilled in React, Next.js, TailwindCSS, and modern web technologies."
        />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="author" content="Vipul Singh" />
        <meta
          name="keywords"
          content="vipul singh portfolio, vipul resume, frontend developer, next.js, tailwindcss"
        />
        <meta name="theme-color" content="#0a192f" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vipulsingh.in.net/" />

        {/* Favicons */}
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />

        {/* OG & Twitter */}
        <meta property="og:title" content="Vipul Singh Portfolio" />
        <meta
          property="og:description"
          content="Explore Vipul Singh's professional portfolio — projects, skills, and experience in modern web development."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vipulsingh.in.net/" />
        <meta
          property="og:image"
          content="https://www.vipulsingh.in.net/_next/image?url=%2FVipul.jpg&w=384&q=75"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vipul Singh Portfolio" />
        <meta
          name="twitter:description"
          content="Vipul Singh's professional portfolio showcasing web development work using Next.js and TailwindCSS."
        />
        <meta
          name="twitter:image"
          content="https://www.vipulsingh.in.net/_next/image?url=%2FVipul.jpg&w=384&q=75"
        />
        <meta name="twitter:site" content="@VipulSi78066437" />

        {/* Google verification */}
        <meta
          name="google-site-verification"
          content="I2pXOuorfYJ07tKwD4rpvkSEx5UKuBWDmR9Jt3za1XM"
        />

        {/* build info */}
        <meta name="build-info" content={process.env.BUILD_DATA} />
      </Head>

      <Header />
      <main className={classnames("overflow-x-hidden")}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
