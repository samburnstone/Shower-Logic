import React from 'react';
import styled from 'styled-components';
import List from 'components/List';
import Queue from 'components/Queue';
import { Status } from 'types';

const showers = [
  {
    name: 'Floor 1',
    status: Status.available
  },
  {
    name: 'Floor 4',
    status: Status.available
  },
  {
    name: 'Floor 6',
    status: Status.inUse
  }
]

const StyledSection = styled.section`
  margin: 20px;
`

export default () => (
  <StyledSection>
    <Queue />
    <List items={showers} />
  </StyledSection>
)
