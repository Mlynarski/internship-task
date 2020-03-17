import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import AppContext from '../../context';
import { calcAverageIncomesBetween, calcAverageIncomes, calcTotalIncomesBetween } from '../../calc';
import TextInput from '../../components/TextInput';
import ItemLabel from '../../components/ItemLabel';

const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: calc(100vh - 30px);
  width: 100%;
  align-content: center;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 350px;
  min-height: 300px;
  margin: 15px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  -webkit-box-shadow: 0px 0px 5px 5px rgba(196, 196, 196, 0.24);
  -moz-box-shadow: 0px 0px 5px 5px rgba(196, 196, 196, 0.24);
  box-shadow: 0px 0px 5px 5px rgba(196, 196, 196, 0.24);
`;

const PageItemDetails = () => {
  // get item data
  let { id } = useParams();
  id = parseInt(id, 10);
  const ItemData = useContext(AppContext).filter(item => item.id === id)[0];

  // date
  const today = new Date();
  const [toDate, setToDate] = useState(today.toISOString().slice(0, 10));

  const todayMinusOneMonth = new Date();
  todayMinusOneMonth.setMonth(todayMinusOneMonth.getMonth() - 1);
  const [fromDate, setFromDate] = useState(todayMinusOneMonth.toISOString().slice(0, 10));

  return (
    <MainWrapper>
      <DataWrapper>
        <ItemLabel label="ID:">{ItemData.id}</ItemLabel>
        <ItemLabel label="NAME:">{ItemData.name}</ItemLabel>
        <ItemLabel label="CITY:">{ItemData.city}</ItemLabel>
        <ItemLabel label="TOTAL INCOME:">{ItemData.totalIncomes}</ItemLabel>
        <ItemLabel label="AVERAGE INCOME:">{calcAverageIncomes(ItemData.incomes)}</ItemLabel>
      </DataWrapper>
      <DataWrapper>
        <ItemLabel label="INCOME">
          {calcTotalIncomesBetween(fromDate, toDate, ItemData.incomes)}
        </ItemLabel>
        <ItemLabel label="AVERAGE">
          {calcAverageIncomesBetween(fromDate, toDate, ItemData.incomes)}
        </ItemLabel>
        <ItemLabel label="FROM">
          <TextInput
            width={150}
            type="date"
            value={fromDate}
            onChange={e => setFromDate(e.target.value)}
          />
        </ItemLabel>
        <ItemLabel label="TO">
          <TextInput
            width={150}
            type="date"
            value={toDate}
            onChange={e => setToDate(e.target.value)}
          />
        </ItemLabel>
      </DataWrapper>
    </MainWrapper>
  );
};

export default PageItemDetails;
