/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import StockListing from './src/stockListing';

function App(): JSX.Element {
  const containerStyle = {
    flex: 1,
    backgroundColor: '#d3d3d3',
  };

  return (
    <SafeAreaView style={containerStyle}>
      <StockListing />
    </SafeAreaView>
  );
}

export default App;
