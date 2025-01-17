import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Sandbox(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  boxOne: {
    backgroundColor: 'violet',
    padding: 10,
  },
  boxTwo: {
    backgroundColor: 'gold',
    padding: 10,
  },
  boxThree: {
    backgroundColor: 'coral',
    padding: 10,
  },
  boxFour: {
    backgroundColor: 'skyblue',
    padding: 10,
  },
});
