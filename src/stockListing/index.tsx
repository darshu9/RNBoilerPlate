import React from 'react';
import {FlatList, View} from 'react-native';
import Header from './components/Header';
import InvestmentDetail from './components/InvestmentDetail';
import InvestmentSummary from './components/InvestmentSummary';
import LoadErrorState from './components/LoadErrorState';
import {useFetchData} from './hooks';

export type ResponseData = {
  avg_price: string;
  cnc_used_quantity: number;
  collateral_qty: number;
  collateral_type: string;
  collateral_update_qty: number;
  company_name: string;
  haircut: number;
  holdings_update_qty: number;
  isin: string;
  product: string;
  quantity: number;
  symbol: string;
  t1_holding_qty: number;
  token_bse: string;
  token_nse: string;
  withheld_collateral_qty: number;
  withheld_holding_qty: number;
  ltp: number;
  close: number;
};

const StockListing = () => {
  const {result, loading = false, error = false, retry} = useFetchData();
  const data = result?.data || {};

  const renderItem = ({item}: {item: ResponseData}) => {
    return <InvestmentDetail item={item} />;
  };
  const itemSeparatorComponent = () => <View style={styles.seperator} />;

  return (
    <LoadErrorState loading={loading} error={error} retry={retry}>
      <Header />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.symbol}
        ItemSeparatorComponent={itemSeparatorComponent}
        style={styles.list}
        contentContainerStyle={styles.contentContainerStyle}
        onRefresh={retry}
        refreshing={loading}
      />
      <InvestmentSummary data={data} />
    </LoadErrorState>
  );
};
const styles = {
  seperator: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: '#ccc',
  },
  list: {
    flex: 1,
  },
  contentContainerStyle: {
    backgroundColor: 'white',
  },
};

export default StockListing;
