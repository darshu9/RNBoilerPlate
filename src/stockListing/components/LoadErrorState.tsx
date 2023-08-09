import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

interface LoadErrorStateProps {
  loading: boolean;
  error: boolean | null;
  retry: () => void;
  children: React.ReactNode;
}

const LoadErrorState: React.FC<LoadErrorStateProps> = ({
  loading,
  error,
  retry,
  children,
}) => {
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="purple" />
        <Text style={styles.loadingText}>{'Loading...'}</Text>
      </View>
    );
  }
  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>
          {'Service Issue. Please Try Again'}
        </Text>
        <TouchableOpacity style={styles.retryButton} onPress={retry}>
          <Text style={styles.errorText}>{'Tap to retry'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return <>{children}</>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  errorText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
  },
  loadingText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'purple',
    marginTop: 10,
  },
  retryButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'purple',
    borderRadius: 5,
  },
});

export default LoadErrorState;
