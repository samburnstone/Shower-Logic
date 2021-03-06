import React, { useEffect } from "react";
import styled from "styled-components";
import { ShowersByStatus, Status, Shower } from "types";
import ListItem from "./ListItem";

export type Props = {
  fetchShowers: () => void;
  showersByStatus: ShowersByStatus;
  bookShower: (showerId: number) => void;
};

type SubListProps = {
  showers: Shower[];
  status: Status;
  bookShower: (showerId: number) => void;
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

const SubList = ({ showers, status, bookShower }: SubListProps) =>
  showers.length === 0 ? null : (
    <>
      <h3>{titleForStatus(status)}</h3>
      <StyledList>
        {showers.map(item => (
          <ListItem key={item.name} {...item} bookShower={bookShower} />
        ))}
      </StyledList>
    </>
  );

export default ({ fetchShowers, showersByStatus, bookShower }: Props) => {
  useEffect(() => {
    fetchShowers();
  }, [fetchShowers]);
  return (
    <>
      {[Status.available, Status.inUse, Status.outOfUse].map(status => (
        <SubList
          key={status}
          showers={showersByStatus[status]}
          status={status}
          bookShower={bookShower}
        />
      ))}
    </>
  );
};
