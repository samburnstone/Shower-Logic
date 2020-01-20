import React, { ReactElement } from "react";
import styled from "styled-components";
import { Shower, Status } from "types";

type Props = Shower & {
  bookShower: (showerId: number) => void;
};

type StatusStyleProps = {
  status: Status;
};

const StyledListItem = styled.li`
  list-style-type: none;
  padding: 20px;
  margin: 20px 0;
  background: ${props => props.theme.white};
  display: flex;
  align-items: center;
`;

const colorForStatus = (status: Status): string => {
  switch (status) {
    case Status.available:
      return "green";
    case Status.inUse:
      return "orange";
    case Status.outOfUse:
      return "red";
  }
};

const buttonComponent = (props: Props): ReactElement | null => {
  switch (props.status) {
    case Status.available:
      return (
        <button onClick={() => props.bookShower(props.id)}>Nab it!</button>
      );
    default:
      return null;
  }
};

const StatusIndicator = styled.div`
  height: 10px;
  width: 10px;
  background: ${(props: StatusStyleProps) => colorForStatus(props.status)};
  border-radius: 50%;
  margin-right: 10px;
`;

export default (props: Props) => (
  <StyledListItem>
    <StatusIndicator status={props.status} />
    <span>{props.name}</span>
    {buttonComponent(props)}
  </StyledListItem>
);
