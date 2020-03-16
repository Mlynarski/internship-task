import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import AppContext from '../../context';
import { tableCategories, TableRow, TableItem } from '../../components/Table';
import TextInput from '../../components/TextInput';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PageMainTable = () => {
  const tableData = useContext(AppContext);
  const [filterValue, setFilterValue] = useState('');

  return (
    <MainWrapper>
      <TextInput
        placeholder="Enter a company name"
        value={filterValue}
        onChange={e => setFilterValue(e.target.value)}
      />
      <TableWrapper>
        <TableRow>
          {tableCategories.map(item => (
            <TableItem key={item}>{item}</TableItem>
          ))}
        </TableRow>
        {tableData
          .filter(item => item.name.toUpperCase().includes(filterValue.toUpperCase()))
          .map(item => (
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
