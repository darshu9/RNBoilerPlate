export function calculateProfitLoss(item) {
  const {ltp, quantity, avg_price} = item;
  const currentValue = ltp * quantity;
  const investmentValue = avg_price * quantity;
  const profitLoss = currentValue - investmentValue;
  return profitLoss.toFixed(2);
}

export const calculateInvestmentSummary = items => {
  let currentValue = 0;
  let totalInvestment = 0;
  let totalPNL = 0;
  let todayPNL = 0;
  for (const item of items) {
    const {ltp, quantity, avg_price, close} = item;

    const individualCurrentValue = ltp * quantity;
    const individualInvestmentValue = avg_price * quantity;
    const individualPNL = individualCurrentValue - individualInvestmentValue;
    const individualTodayPNL = (close - ltp) * quantity;

    currentValue += individualCurrentValue;
    totalInvestment += individualInvestmentValue;
    totalPNL += individualPNL;
    todayPNL += individualTodayPNL;
  }

  return [
    {
      title: 'Current Value',
      value: currentValue.toFixed(2),
    },
    {
      title: 'Total Investment',
      value: totalInvestment.toFixed(2),
    },
    {
      title: "Today's Profit & Loss",
      value: todayPNL.toFixed(2),
    },
    {
      title: 'Profit & Loss',
      value: totalPNL.toFixed(2),
    },
  ];
};
