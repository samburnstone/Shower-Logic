import React from 'react';
import styled from 'styled-components';
import { Shower, Status } from 'types';

type Props = Shower;

type StatusStyleProps = {
  status: Status;
}

const StyledListItem = styled.li`
  list-style-type: none;
  padding: 20px;
  margin: 20px 0;
  background: ${props => props.theme.white};
  display: flex;
  align-items: center;
`

const colorForStatus = (status: Status): string => {
  switch (status) {
    case Status.available:
      return 'green';
    case Status.inUse:
      return 'orange';
    case Status.outOfUse:
      return 'red';
  }
}

const StatusIndicator = styled.div`
  height: 10px;
  width: 10px;
  background: ${(props: StatusStyleProps) => colorForStatus(props.status)};
  border-radius: 50%;
  margin-right: 10px;
`

export default ({ name, status }: Props) => (
  <StyledListItem>
  <StatusIndicator status={status} />
  <span>{name}</span>
  </StyledListItem>
);
