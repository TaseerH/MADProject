import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
} from 'react-native';
import React from 'react';
import DatePicker from 'react-native-date-picker';
import {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

const AddExpense = () => {
  const [expense, setExpense] = useState([]);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([
    {label: 'Food & Drinks', value: 'Food & Drinks'},
    {label: 'Shopping', value: 'Shopping'},
    {label: 'Fuel', value: 'Fuel', parent: 'Transport'},

    {label: 'Transport', value: 'Transport'},
    {label: 'Restaurant', value: 'Restaurant', parent: 'Food & Drinks'},
    {label: 'Groceries', value: 'Groceries', parent: 'Food & Drinks'},

    {label: 'Clothes', value: 'Clothes', parent: 'Shopping'},
    {label: 'Bills & Fees', value: 'Bills & Fees'},
  ]);
  const real_date = date.toDateString();

  const handleSubmit = () => {
    const newExpense = {
      expense,
      value,
      real_date,
    };

    fetch(
      'https://mad-project-b14db-default-rtdb.asia-southeast1.firebasedatabase.app/expense.json',
      {
        method: 'POST',
        body: JSON.stringify(newExpense),
      },
    );
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          width: '100%',
          elevation: 5,
          height: '100%',
          backgroundColor: 'black',
        }}>
        <Text
          style={{
            paddingVertical: 8,
            paddingHorizontal: 16,
            marginBottom: 20,
            fontSize: 20,
            textColor: 'white',
            fontWeight: 'bold',
          }}>
          Add a new Expense
        </Text>
        <TextInput
          placeholder="Enter value"
          placeholderTextColor="white"
          value={expense}
          style={{
            width: '80%',
            borderRadius: 5,
            paddingVertical: 8,
            paddingHorizontal: 16,
            borderColor: 'rgba(0, 0, 0, 0.2)',
            borderWidth: 1,
            marginBottom: 8,
            backgroundColor: '#292D3E',
          }}
          onChangeText={value => setExpense(value)}
        />

        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          maxHeight={200}
          theme="DARK"
          multiple={false}
          searchable={true}
          ListMode={'SCROLLVIEW'}
          mode="BADGE"
          badgeDotColors={[
            '#e76f51',
            '#00b4d8',
            '#e9c46a',
            '#e76f51',
            '#8ac926',
            '#00b4d8',
            '#e9c46a',
          ]}
          style={{
            width: '80%',
            paddingVertical: 8,
            paddingHorizontal: 16,
            borderColor: 'rgba(0, 0, 0, 0.2)',
            borderWidth: 1,
            borderRadius: 5,
            marginBottom: 8,
            alignSelf: 'center',
          }}
        />

        <DatePicker
          textColor={'white'}
          mode={'date'}
          androidVariant={'nativeAndroid'}
          date={date}
          onDateChange={setDate}
          style={{backgroundColor: 'transparent'}}
        />
        <Button onPress={handleSubmit} title="Submit" />
      </View>
    </View>
  );
};

export default AddExpense;

const styles = StyleSheet.create({});
