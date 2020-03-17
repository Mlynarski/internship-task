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
