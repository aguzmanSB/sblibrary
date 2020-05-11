import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';
import styled from 'styled-components';

const ModuleItemsWrapper = styled.div`
  display:flex;
  justify-content:center;
`
const ModuleItem = styled.div`
  width:300px;
  border:1px solid #efefef;
  padding:16px;
  margin:16px;
`
const ModuleImage = styled.img`
  max-width:100%;
`
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

      `} render={props =>
        <ModuleItemsWrapper>
          {props.allWordpressWpModule.edges.map(moduleItem => (
            <ModuleItem key={moduleItem.node.id}>
              <h2>{moduleItem.node.title}</h2>
              <ModuleImage src={moduleItem.node.featured_media.source_url} alt="Thumbnail"/>
              <Link to={`/module/${moduleItem.node.slug}`}>
                Read More
              </Link>
            </ModuleItem>
          ))}
        </ModuleItemsWrapper>}/>
  )
}

export default ModuleItems;
