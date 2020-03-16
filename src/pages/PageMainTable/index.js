import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../../context';
import { tableCategories, TableRow, TableItem } from '../../components/Table';

const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-content: center;
`;

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const PageMainTable = () => {
  const tableData = useContext(AppContext);

  return (
    <MainWrapper>
      <TableWrapper>
        <TableRow>
          {tableCategories.map(item => (
            <TableItem key={item}>{item}</TableItem>
          ))}
        </TableRow>
        {tableData.map(item => (
          <TableRow key={item.id}>
            <TableItem>{item.id}</TableItem>
            <TableItem>{item.name}</TableItem>
            <TableItem>{item.city}</TableItem>
            <TableItem>{item.totalIncomes}</TableItem>
          </TableRow>
        ))}
      </TableWrapper>
    </MainWrapper>
  );
};

export default PageMainTable;
