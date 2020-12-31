import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import SocialLink from '../components/socialLink';
import ProjectLink from '../components/projectLink';

function Home({ data }) {
  return (
    <>
      <SEO />
      <div className="about-me">
        <div className="wrapper-center">
            <img className="profile-pic" src={data.avatar.fixed.src} alt={`${data.site.siteMetadata.name} avatar`} />
            <h1>{data.site.siteMetadata.name}</h1>
            <div className="subheader">{data.site.siteMetadata.pageSubtitle}</div>

            <div className="divider"></div>

            {data.site.siteMetadata.personDescription.map(({ text }, index) => (
              <div className="description-line" key={index}>
                {text}
              </div>
            ))}
        </div>
      </div>
      <div className="social-links">
        <div className="links">
            <h2>around the web:</h2>
            {data.site.siteMetadata.socialMedia.map(socialMedia => (
              <SocialLink key={socialMedia.url} data={socialMedia} />
            ))}
        </div>

        <div className="projects">
            <h2>projects</h2>
            {data.site.siteMetadata.projects.map((project, index) => (
              <ProjectLink key={index} project={project} />
            ))}
        </div>
      </div>
      <footer>&copy; {data.site.siteMetadata.name} {new Date().getFullYear()}.</footer>
    </>
  );
}

export const query = graphql`
  query {
    avatar: imageSharp(fixed: {originalName: {eq: "placeholder.png"}}) {
      fixed(height: 240, width: 240, quality: 90) {
        src
      }
    }
    site {
      siteMetadata {
        backgroundColor
        name
        pageSubtitle
        personDescription {
          text
        }
        projects {
          displayName
          languageIconName
          sourceIconName
          url
        }
        socialMedia {
          displayName
          iconName
          url
        }
      }
    }
  }
`;

export default Home;
