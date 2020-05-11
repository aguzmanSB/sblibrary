import React from 'react';
import Layout from '../components/layout';
import ModuleItems from '../components/ModuleItems';


export default ({pageContext}) => (
  <Layout>
  <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
  <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
  <ModuleItems />
  </Layout>
);
