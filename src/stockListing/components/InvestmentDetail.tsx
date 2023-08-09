import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {calculateProfitLoss} from '../utils';
import {RUPEE_SYMBOL} from '../constants';

interface InvestmentDetailProps {
  item: {
    symbol: string;
    quantity: number;
    ltp: number;
  };
}
const InvestmentDetail: React.FC<InvestmentDetailProps> = ({item}) => {
  const profitAndLoss = calculateProfitLoss(item);
  return (
    <View style={styles.container}>
      <View style={styles.rowView}>
        <Text style={[styles.boldStyle, styles.bigFont]}>{item.symbol}</Text>
        <Text style={styles.normalStyle}>
          LTP :
          <Text style={styles.boldStyle}>
            {RUPEE_SYMBOL}
            {item.ltp.toFixed(2)}
          </Text>
        </Text>
      </View>
      <View style={[styles.rowView, styles.marginTopStyle]}>
        <Text style={styles.normalStyle}>{item.quantity}</Text>
        <Text style={styles.normalStyle}>
          P/L :{' '}
          <Text style={styles.boldStyle}>
            {RUPEE_SYMBOL}
            {profitAndLoss}
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boldStyle: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000',
  },
  bigFont: {
    fontSize: 16,
  },
  marginTopStyle: {
    marginTop: 12,
  },
  normalStyle: {
    fontSize: 14,
    color: '#000',
  },
});
export default InvestmentDetail;
