import React from 'react';
import styled from 'styled-components';
import { CustomLink } from '../styles/global';

interface INode {
  frontmatter: {
    slug: string;
    title: string;
    date: Date;
  };
  id: React.Key;
  excerpt: string;
}

const Sidebar = ({ data }: { data: INode[] }) => {
  console.log();

  return (
    <Nav>
      <ul>
        {data.map((node: INode) => (
          <li>
            <MenuLink
              to={`/blog/${node.frontmatter.slug}`}
              key={node.id}
              className={
                window.location.pathname.split('/').at(-2) ===
                node.frontmatter.slug
                  ? 'current'
                  : ''
              }
            >
              {node.frontmatter.title}
            </MenuLink>
          </li>
        ))}
      </ul>
    </Nav>
  );
};

export default Sidebar;

const Nav = styled.nav`
  width: 20%;
  height: calc(100vh - 3.125rem);
  padding: 0.7rem;
  border-right: 1px solid #f0f0f2;
  font-size: 1rem;
  ul {
    margin: 0;
    list-style: none;
    li {
      display: inline-block;
      width: 100%;
      font-weight: 400;
    }
  }
`;

const MenuLink = styled(CustomLink)`
  text-decoration: none;
  padding: 1rem;
  transition-property: background-color, color;
  transition-timimg-function: ease;
  transition-duration: 0.5s;
  &.current,
  &:hover {
    color: #fff;
    background-color: #afcbbf;
  }
`;
