import React from 'react';
import styled from 'styled-components';
import List from 'components/List';
import Queue from 'components/Queue';

const StyledSection = styled.section`
  margin: 20px;
`

export default () => (
  <StyledSection>
    <Queue />
    <List />
  </StyledSection>
)
