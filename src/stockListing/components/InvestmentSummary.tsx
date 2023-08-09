import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {calculateInvestmentSummary} from '../utils';
import {RUPEE_SYMBOL} from '../constants';
interface InvestmentSummaryProps {
  data: any;
}
interface InvestmentSummaryRow {
  item: InvestmentRow;

  index: number;
}

type InvestmentRow = {
  title: string;
  value: string;
};
const InvestmentSummary: React.FC<InvestmentSummaryProps> = ({data}) => {
  const investmentSummaryRow = calculateInvestmentSummary(data);

  const renderInvestmentSummaryRow: React.FC<InvestmentSummaryRow> = ({
    item,
    index,
  }) => {
    const isLast = index === investmentSummaryRow.length - 1;
    return (
      <View
        key={`${index}`}
        style={[styles.rowStyle, isLast ? {marginTop: 20} : {}]}>
        <Text style={styles.keyStyle}>{item.title}:</Text>
        <Text style={styles.valueStyle}>
          {RUPEE_SYMBOL}
          {item.value}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {investmentSummaryRow.map((item, index) => {
        return renderInvestmentSummaryRow({item, index});
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
  },
  keyStyle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  valueStyle: {
    color: '#000',
    fontSize: 16,
  },
});
export default InvestmentSummary;
