import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

interface INode {
  frontmatter: {
    title: string
    date: Date
  }
  id: React.Key
  excerpt: string
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
          }
          id
          excerpt
        }
      }
    }
  `)

  return (
    <div>
      <header>{data.site.siteMetadata.title}</header>
      <div>
        <nav>
          <ul>
            {data.allMdx.nodes.map((node: INode) => (
              <li key={node.id}>{node.frontmatter.title}</li>
            ))}
          </ul>
        </nav>
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
