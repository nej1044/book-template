import React from 'react';
import styled from 'styled-components';

export default ({ title, children }: { title: string; children: string }) => {
  return (
    <Aside>
      💡<span id="title">{title}</span>
      {children}
    </Aside>
  );
};

const Aside = styled.aside`
  display: inline-block;
  width: 100%;
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 0.3rem;
  background-color: #ededed;
  word-break: keep-all;
  #title {
    display: inline-block;
    margin: 0 0 0.3rem 0.5rem;
    font-weight: 700;
    color: #dd5757;
    font-style: italic;
  }
  ul {
    list-style: inside;
    padding-left: 1.5rem;
    li {
      margin: 0.2rem 0;
    }
  }
`;
