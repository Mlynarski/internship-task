import axios from 'axios';
import { calcTotalIncomes } from '../calc';

const apiHost = process.env.REACT_APP_API_HOST;

const getApiData = (setData, setError) => {
  let apiData = null;
  const incomesRequests = [];

  axios
    // get companies data
    .get(`${apiHost}/companies`)
    .then(({ data }) => {
      apiData = data;

      // get incomes data for all companies
      apiData.forEach(item => {
        incomesRequests.push(axios.get(`${apiHost}/incomes/${item.id}`));
      });

      // add incomes data to companies
      axios
        .all(incomesRequests)
        .then(results => {
          results.forEach((item, index) => {
            const { data: incomesData } = item;
            apiData[index] = {
              ...apiData[index],
              ...incomesData,
              // calc total incomes
              totalIncomes: calcTotalIncomes(incomesData.incomes),
            };
          });
          // sort by total income (descending)
          apiData.sort((a, b) => b.totalIncomes - a.totalIncomes);
          setData(apiData);
        })
        .catch(error => {
          if (error) {
            setError(true);
          }
        });
    })
    .catch(error => {
      if (error) {
        setError(true);
      }
    });
};

export default getApiData;
