import styled from 'styled-components';

export const tableCategories = ['ID', 'NAME', 'CITY', 'TOTAL INCOME'];

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 100px 300px 300px 200px;
  grid-template-rows: 50px;
  margin-bottom: 15px;
  border-radius: 4px;
  text-decoration: none;
  color: #000000;
  outline: none;

  &:first-of-type {
    background-color: #9baaab;
    margin-top: 15px;
    cursor: default;
  }

  &:hover {
    &:not(:first-of-type) {
      background-color: #d5d5d5;
    }
  }

  &:not(:first-of-type) {
    -webkit-box-shadow: 0px 0px 5px 5px rgba(196, 196, 196, 0.24);
    -moz-box-shadow: 0px 0px 5px 5px rgba(196, 196, 196, 0.24);
    box-shadow: 0px 0px 5px 5px rgba(196, 196, 196, 0.24);
  }

  /*MOBILE VIEW*/
  @media (max-width: 950px) {
    margin-top: 15px;
    margin-bottom: 15px;
    width: 100%;
    min-width: 350px;
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-template-areas:
      'val1'
      'val2'
      'val3'
      'val4';

    /* HIDE TABLE HEADER IN MOBILE VIEW*/
    &:not(:only-of-type) {
      &:first-of-type {
        display: none;
      }
    }
  }
`;

export const TableItem = styled.div`
  align-self: center;

  &:first-of-type {
    margin-left: 20px;
  }

  /*MOBILE VIEW*/
  @media (max-width: 950px) {
    &:first-of-type {
      margin-left: 0px;
    }

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    font-weight: normal;
    font-size: 16px;
    padding: 10px;

    ${tableCategories.map(
      (item, index) =>
        `&:nth-of-type(${index + 1}) {
          grid-area: val${index + 1};
          &::before {
            display: flex;
            justify-content: center;
            width: 100%;
            margin-bottom: 3px;
            font-weight: bold;
            font-size: 16px;
            content: '${item}:';
          }
        }`,
    )}
  }
`;
