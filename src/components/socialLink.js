import React from 'react';

function SocialLink({ data }) {
  return (
    <div className="link-line">
      <a href={data.url} target={data.url.includes('mailto') ? "_parent" : "_blank"} rel="noreferrer">
          <i className={`fa ${data.iconName}`} aria-hidden="true"></i> {data.displayName}
      </a>
    </div>
  )
}

export default SocialLink;
