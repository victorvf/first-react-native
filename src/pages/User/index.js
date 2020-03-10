import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

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

export default function User() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>User</Text>
      </View>
    );
};
