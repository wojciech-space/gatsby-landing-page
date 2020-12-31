import React from 'react';

function Layout({ children, data }) {
  return <main style={{ [`--bg-color`]: data.site.siteMetadata.backgroundColor }}>{children}</main>;
}

export default Layout;
