import React from 'react';
import { View, StyleSheet } from 'react-native';
import Container from './src/Container';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Container />
    </View>
  );
}
