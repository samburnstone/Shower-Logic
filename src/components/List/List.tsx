import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectors } from "store/modules/showers";
import { Status, Shower } from "types";
import ListItem from "./ListItem";

type StatusToTitle = {
  [key in Status]: string;
};

type SubListProps = {
  showers: Shower[];
  status: Status;
};

const StyledList = styled.ul`
  padding: 0;
`;

const titleForStatus = (status: Status): string => {
  return {
    [Status.available]: "Available",
    [Status.inUse]: "In Use",
    [Status.outOfUse]: "Out Of Use"
  }[status];
};

const SubList = ({ showers, status }: SubListProps) =>
  showers.length === 0 ? null : (
    <>
      <h3>{titleForStatus(status)}</h3>
      <StyledList>
        {showers.map(item => (
          <ListItem key={item.name} {...item} />
        ))}
      </StyledList>
    </>
  );

export default () => {
  const showersByStatus = useSelector(selectors.getShowersByStatus);

  return (
    <>
      {[Status.available, Status.inUse, Status.outOfUse].map(status => (
        <SubList
          key={status}
          showers={showersByStatus[status]}
          status={status}
        />
      ))}
    </>
  );
};
