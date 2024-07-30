import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

// Define the type for the submitHandler prop
type SubmitHandler = (text: string) => void;

interface AddTodoProps {
  submitHandler: SubmitHandler;
}

export default function AddTodo({
  submitHandler,
}: AddTodoProps): React.JSX.Element {
  const [text, setText] = useState<string>('');

  const changeHandler = (val: string) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        placeholder="New todos...."
        onChangeText={changeHandler}
        style={styles.input}
      />
      <TouchableOpacity onPress={() => submitHandler(text)}>
        <Text style={styles.text}>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  text: {
    backgroundColor: 'coral',
    textAlign: 'center',
    color: '#ddd',
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
