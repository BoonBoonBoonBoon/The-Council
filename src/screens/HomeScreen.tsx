/**
 * Home Screen
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const HomeScreen = (): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>The Council</Text>
        <Text style={styles.subtitle}>Your Personal AI Council</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
  },
});

export default HomeScreen;
