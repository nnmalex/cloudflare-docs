const productIconKey = "ssl";

module.exports = {
  product: "SSL",
  pathPrefix: "/ssl",
  productIconKey,
  contentRepo: "cloudflare/cloudflare-docs",
  contentRepoFolder: "products/ssl",
  logoSVGContent: '<svg width="48" height="48" viewBox="0 0 48 48"  xmlns="http://www.w3.org/2000/svg"><path d="M23.4371 11.88H12.0296V14.88H23.4371V11.88Z" /><path d="M43.4996 24.3825C43.4964 22.2477 42.7438 20.1819 41.3731 18.5453C40.0024 16.9087 38.1007 15.8053 35.9996 15.4275V7.32001L34.4996 5.82001H7.34961L5.84961 7.32001V40.275L7.34961 41.775H26.8496V43.5L29.4521 44.52L34.3496 39.225L39.2471 44.52L41.8721 43.5V29.5425C42.928 28.0286 43.4958 26.2282 43.4996 24.3825ZM40.4996 24.3825C40.4996 25.5914 40.1411 26.7732 39.4695 27.7784C38.7978 28.7836 37.8432 29.5671 36.7263 30.0297C35.6093 30.4924 34.3803 30.6134 33.1946 30.3776C32.0089 30.1417 30.9198 29.5595 30.0649 28.7047C29.2101 27.8498 28.6279 26.7607 28.3921 25.575C28.1562 24.3893 28.2773 23.1603 28.7399 22.0434C29.2025 20.9264 29.986 19.9718 30.9912 19.3001C31.9964 18.6285 33.1782 18.27 34.3871 18.27C36.0076 18.272 37.5612 18.9166 38.7071 20.0625C39.853 21.2084 40.4976 22.762 40.4996 24.3825ZM8.84961 38.775V8.82001H32.9996V15.39C31.0577 15.6855 29.2634 16.601 27.8846 18H12.0746V21H25.9196C25.5384 21.9566 25.3229 22.9711 25.2821 24H12.0746V27H25.6496C25.9217 27.9109 26.3341 28.7737 26.8721 29.5575V38.775H8.84961ZM35.4671 36L34.3721 34.815L33.2771 36L29.8721 39.675V32.295C31.2415 33.0813 32.793 33.495 34.3721 33.495C35.9512 33.495 37.5027 33.0813 38.8721 32.295V39.6675L35.4671 36Z" /></svg>',
  externalLinks: [
    {
      title: "Cloudflare homepage",
      url: "https://cloudflare.com",
    },
  ],
  search: {
    indexName: "developers-cloudflare",
    apiKey: "b23088ab4d346409f9d3ece6606344c3",
    algoliaOptions: { facetFilters: '["project:ssl"]' },
  },
  siteMetadata: {
    title: "Cloudflare SSL docs",
    description:
      "Encrypting as much web traffic as possible to prevent data theft and other tampering is a critical step toward building a safer, better Internet. We’re proud to be the first Internet performance and security company to offer SSL protection free of charge.",
    author: "@cloudflare",
    url: "https://developers.cloudflare.com/ssl",
    image: "https://www.cloudflare.com/img/cf-twitter-card.png",
  },
};
