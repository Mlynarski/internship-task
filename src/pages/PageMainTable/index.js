import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AppContext from '../../context';
import { tableCategories, TableRow, TableItem } from '../../components/Table';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 30px);
  width: 100%;
  align-content: center;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 405px;
`;

const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  min-height: 455px;
  font-weight: bold;
`;

const PageMainTable = () => {
  const tableData = useContext(AppContext);
  const [filterValue, setFilterValue] = useState('');

  // pagination
  const tableLength = tableData.filter(item =>
    item.name.toUpperCase().includes(filterValue.toUpperCase()),
  ).length;

  const resultPerPage = 5;

  const numOfPages = Math.ceil(tableLength / resultPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    if (currentPage < numOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // when number of results change, go to first page
  useEffect(() => {
    setCurrentPage(1);
  }, [numOfPages]);

  return (
    <MainWrapper>
      <TextInput
        placeholder="Enter a company name"
        value={filterValue}
        onChange={e => setFilterValue(e.target.value)}
      />
      {tableLength ? (
        <>
          <TableWrapper>
            <TableRow header>
              {tableCategories.map(item => (
                <TableItem key={item}>{item}</TableItem>
              ))}
            </TableRow>
            {tableData
              .filter(item => item.name.toUpperCase().includes(filterValue.toUpperCase()))
              .filter(
                (item, index) =>
                  index < currentPage * resultPerPage &&
                  index >= currentPage * resultPerPage - resultPerPage,
              )
              .map(item => (
                <TableRow key={item.id} as={Link} to={`/companies/${item.id}`}>
                  <TableItem>{item.id}</TableItem>
                  <TableItem>{item.name}</TableItem>
                  <TableItem>{item.city}</TableItem>
                  <TableItem>{item.totalIncomes}</TableItem>
                </TableRow>
              ))}
          </TableWrapper>
          <PaginationWrapper>
            <Button onClick={prevPage}>←</Button>
            {currentPage} / {numOfPages}
            <Button onClick={nextPage}>→</Button>
          </PaginationWrapper>
        </>
      ) : (
        <InfoWrapper>No results</InfoWrapper>
      )}
    </MainWrapper>
  );
};

export default PageMainTable;
