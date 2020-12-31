import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO() {
  const {
    site: { siteMetadata: seo },
    imageSharp: { fixed: { src: image } }
  } = useStaticQuery(
    graphql`
      query {
        imageSharp(fixed: {originalName: {eq: "social-media-cover.png"}}) {
          fixed(height: 1200, width: 630, quality: 90) {
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
      <meta name="description" content={seo.seoDescription} />
      <meta property="og:url" content={seo.siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.seoTitle} />
      <meta property="og:description" content={seo.seoDescription} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo.twitterHandle} />
      <meta name="twitter:title" content={seo.seoTitle} />
      <meta name="twitter:description" content={seo.seoDescription} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

export default SEO;
