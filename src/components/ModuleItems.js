import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';

const ModuleItems = () => {
  return(
    <StaticQuery query={graphql`
      {
         allWordpressWpModule{
          	edges{
              node{
                title
                content
                slug
                featured_media{
                  source_url
                }
              }
            }
        	}
        }

      `} render={props => props.allWordpressWpModule.edges.map(moduleItem => (
        <div key={moduleItem.node.id}>
          <h2>{moduleItem.node.title}</h2>
          <img src={moduleItem.node.featured_media.source_url} alt="Thumbnail"/>
          <Link to={`/module/${moduleItem.node.slug}`}>
            Read More
          </Link>
        </div>
      ))}/>
  )
}

export default ModuleItems;
