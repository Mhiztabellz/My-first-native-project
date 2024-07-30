import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
// import Sandbox from './components/Sandbox';

function App(): React.JSX.Element {
  type ITodos = {
    text: string;
    key: string;
  };

  const [todos, setTodos] = useState<ITodos[]>([
    {text: 'Buy coffee', key: '1'},
    {text: 'Create an app', key: '2'},
    {text: 'Play on the switch', key: '3'},
    {text: 'Play football', key: '4'},
  ]);

  function pressHandler(key: string): void {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key !== key);
    });
  }

  const submitHandler = (text: string) => {
    if (text.length > 3) {
      setTodos(prevTodos => {
        return [{text: text, key: Math.random().toString()}, ...prevTodos];
      });
    } else {
      Alert.alert('OOPS!', 'Todos must be 3 characters long');
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.cointainer}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  cointainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    margin: 20,
    flex: 1,
  },
});

export default App;
