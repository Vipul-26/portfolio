const siteUrl = "https://portfolio-vipul-26.vercel.app";

module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            { userAgent: "*", allow: "/" },
        ],
    },
};