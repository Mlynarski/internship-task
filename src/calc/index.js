export const calcTotalIncomes = incomes => {
  let total = 0;

  incomes.forEach(item => {
    total += Number(item.value);
  });

  return total;
};

export const calcAverageIncomes = () => {};
