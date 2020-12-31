import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO() {
  const {
    site: { siteMetadata: seo },
    cover: { fixed: { src: coverImage } },
    favicon: { fixed: { src: favicon } }
  } = useStaticQuery(
    graphql`
      query {
        cover: imageSharp(fixed: {originalName: {eq: "social-media-cover.png"}}) {
          fixed(width: 1200, height: 630, quality: 90) {
            src
          }
        }
        favicon: imageSharp(fixed: {originalName: {eq: "favicon.png"}}) {
          fixed(height: 64, width: 64) {
            src
          }
        }
        site {
          siteMetadata {
            pageTitle
            seoTitle
            seoDescription
            siteUrl
            twitterHandle
          }
        }
      }
    `
  );

  return (
    <Helmet>
      <title>{seo.pageTitle}</title>

      <link rel="shortcut icon" type="image/png" href={favicon} />

      <meta name="description" content={seo.seoDescription} />
      <meta property="og:url" content={seo.siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.seoTitle} />
      <meta property="og:description" content={seo.seoDescription} />
      <meta property="og:image" content={coverImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo.twitterHandle} />
      <meta name="twitter:title" content={seo.seoTitle} />
      <meta name="twitter:description" content={seo.seoDescription} />
      <meta name="twitter:image" content={coverImage} />
    </Helmet>
  );
}

export default SEO;
