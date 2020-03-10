import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import './config/ReactotronConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
  },
  welcome: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center'
  }
});

console.tron.log('hello world');

export default function App() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Agora ta funcionando</Text>
      </View>
    );
};
