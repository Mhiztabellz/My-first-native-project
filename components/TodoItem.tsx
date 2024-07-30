import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';

type ITodoItemProps = {
  item: {
    text: string;
    key: string;
  };
  pressHandler: (key: string) => void;
};
export default function TodoItem({
  item,
  pressHandler,
}: ITodoItemProps): React.JSX.Element {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderRadius: 10,
    borderStyle: 'dashed',
    borderWidth: 1,
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
  },
});
