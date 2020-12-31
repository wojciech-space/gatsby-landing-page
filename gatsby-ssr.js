import React from 'react';
import Layout from './src/components/layout';

import './src/styles/reset.css';
import './src/styles/global.css';

const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export { wrapPageElement };
