import Chart from 'chart.js';

const generateGraph = (ctx, data) => {
  let graphLabels = [];
  let graphData = [];

  data.forEach(year => {
    year.months.forEach((month, index) => {
      if (month > 0) {
        graphData = [...graphData, month];
        graphLabels = [...graphLabels, `${index + 1}/${year.year}`];
      }
    });
  });

  // eslint-disable-next-line no-unused-vars
  const graph = new Chart(ctx.current.getContext('2d'), {
    type: 'horizontalBar',
    data: {
      labels: graphLabels,
      datasets: [
        {
          label: 'income',
          backgroundColor: '#9baaab',
          data: graphData,
        },
      ],
    },
    options: {
      responsive: true,
      legend: { display: false },
      title: {
        display: true,
        text: 'MONTHLY INCOMES',
      },
      tooltips: {
        callbacks: {
          label(tooltipItem) {
            return `${tooltipItem.xLabel.toFixed(2)}`;
          },
        },
      },
    },
  });
};

export default generateGraph;
