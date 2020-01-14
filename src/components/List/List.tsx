import React from 'react';
import styled from 'styled-components';
import { Shower } from 'types';
import ListItem from './ListItem';

type Props = {
  items: Shower[]
}

const StyledList = styled.ul`
  padding: 0;
`

export default ({ items }: Props) => (
  <StyledList>
    {items.map((item) => <ListItem {...item} />)}
  </StyledList>
)
