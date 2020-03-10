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

export default function Main() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Main</Text>
      </View>
    );
};

Main.navigationOptions = {
    title: 'Usuários',
};
