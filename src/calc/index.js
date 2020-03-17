export const calcTotalIncomes = incomes => {
  let total = 0;

  incomes.forEach(item => {
    total += Number(item.value);
  });

  return total.toFixed(2);
};

export const calcTotalIncomesBetween = (from, to, incomes) => {
  let totalIncomes = 0;
  const fromDate = new Date(from);
  const toDate = new Date(to);

  incomes.forEach(item => {
    const itemDate = new Date(item.date.slice(0, 10));
    if (itemDate >= fromDate && itemDate <= toDate) {
      totalIncomes += Number(item.value);
    }
  });

  return totalIncomes.toFixed(2);
};

export const calcAverageIncomes = incomes => {
  let totalIncomes = 0;
  let numOfIncomes = 0;

  incomes.forEach(item => {
    totalIncomes += Number(item.value);
    numOfIncomes += 1;
  });

  if (totalIncomes > 0) {
    return (totalIncomes / numOfIncomes).toFixed(2);
  }
  return 0;
};

export const calcAverageIncomesBetween = (from, to, incomes) => {
  let totalIncomes = 0;
  let numOfIncomes = 0;

  const fromDate = new Date(from);
  const toDate = new Date(to);

  incomes.forEach(item => {
    const itemDate = new Date(item.date.slice(0, 10));

    if (itemDate >= fromDate && itemDate <= toDate) {
      totalIncomes += Number(item.value);
      numOfIncomes += 1;
    }
  });

  if (totalIncomes > 0) {
    return (totalIncomes / numOfIncomes).toFixed(2);
  }
  return 0;
};

export const calcMonthlyIncomes = incomes => {
  const monthlyIncomes = [];

  incomes.forEach(income => {
    const getYear = Number(income.date.slice(0, 4));
    const getMonth = Number(income.date.slice(5, 7));

    if (monthlyIncomes.some(item => item.year === getYear)) {
      monthlyIncomes[monthlyIncomes.findIndex(obj => obj.year === getYear)].months[
        getMonth - 1
      ] += Number(income.value);
    } else {
      monthlyIncomes.push({
        year: getYear,
        months: [...Array(12).fill(0)],
      });

      monthlyIncomes[monthlyIncomes.findIndex(obj => obj.year === getYear)].months[
        getMonth - 1
      ] += Number(income.value);
    }
  });

  return monthlyIncomes;
};
