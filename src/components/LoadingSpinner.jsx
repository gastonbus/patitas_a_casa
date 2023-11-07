/* eslint-disable react/prop-types */
import { ActivityIndicator } from 'react-native';

const LoadingSpinner = ({ color }) => {
  return <ActivityIndicator size="large" color={color} />;
};

export default LoadingSpinner;

// const styles = StyleSheet.create({});
