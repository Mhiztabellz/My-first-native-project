import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

function App(): React.JSX.Element {
  //* How to declear a type of an object
  // type person = {
  //   name: string;
  //   age: number;
  // };

  //? When setting up useState for multiple type object
  // const [person, setPerson] = useState<person>({
  //   name: 'pascal',
  //   age: 20,
  // });

  //! When passing a state with multiple types
  // const clickHandler = () => {
  //   setName('Wisdom');
  //   setPerson(nextPerson => ({
  //     ...nextPerson,
  //     name: 'Pascal',
  //     age: 23,
  //   }));
  // };

  //? Passing a type to a state with a having a string as it value
  // const [name, setName] = useState<string>('Abel');
  // const [age, setAge] = useState<string>('29');

  type person = {
    name: string;
    key: string;
  };

  const [people, setPeople] = useState<person[]>([
    {
      name: 'Abel',
      key: '1',
    },
    {
      name: 'Kayode',
      key: '2',
    },
    {
      name: 'Wisdom',
      key: '3',
    },
    {
      name: 'Pascal',
      key: '4',
    },
    {
      name: 'Samuel',
      key: '5',
    },
    {
      name: 'Sly',
      key: '6',
    },
    {
      name: 'Ejiro',
      key: '7',
    },
    {
      name: 'Blossom',
      key: '8',
    },
  ]);

  return (
    <View style={styles.cointainer}>
      <ScrollView>
        {people.map(item => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
    //! Using text input and field to create a form and updating it as the value changes
    // <View style={styles.cointainer}>
    //   <Text>Enter Name:</Text>
    //   <TextInput
    //     style={styles.input}
    //     placeholder="e.g John Doe"
    //     onChangeText={val => setName(val)}
    //   />

    //   <Text>Enter Age:</Text>
    //   <TextInput
    //     style={styles.input}
    //     placeholder="e.g 23"
    //     keyboardType="numeric"
    //     onChangeText={val => setAge(val)}
    //   />
    //   <Text>
    //     name: {name}, age: {age}
    //   </Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  cointainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },
  // input: {
  //   borderWidth: 1,
  //   borderColor: '#777',
  //   padding: 8,
  //   margin: 10,
  //   width: 200,
  // },
});

export default App;
