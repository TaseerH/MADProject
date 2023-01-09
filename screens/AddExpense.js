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
import {useTheme} from '@react-navigation/native';

const AddExpense = () => {
  const {colors} = useTheme();
  const [expense, setExpense] = useState([]);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([
    {label: 'Food & Drinks', value: 'Food & Drinks'},
    {label: 'Shopping', value: 'Shopping'},
    {label: 'Fuel', value: 'Fuel'},

    {label: 'Public Transport', value: 'Public Transport', parent: 'Fuel'},
    {label: 'Bike', value: 'Bike', parent: 'Fuel'},
    {label: 'Car', value: 'Car', parent: 'Fuel'},
    {label: 'Restaurant', value: 'Restaurant', parent: 'Food & Drinks'},
    {label: 'Hotel', value: 'Hotel', parent: 'Food & Drinks'},
    {label: 'Fast Food', value: 'Fast Food', parent: 'Food & Drinks'},
    {label: 'Groceries', value: 'Groceries'},

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
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          width: '100%',
          height: '100%',
          color: colors.background,
        }}>
        <Text
          style={{
            color: colors.text,
            paddingVertical: 8,
            paddingHorizontal: 16,
            marginBottom: 20,
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          Add a new Expense
        </Text>
        <TextInput
          placeholder="Enter value"
          placeholderTextColor={colors.text}
          value={expense}
          style={{
            width: '90%',
            borderRadius: 10,
            paddingVertical: 8,
            paddingHorizontal: 16,
            borderColor: colors.text,
            borderWidth: 2,
            marginBottom: 8,
            backgroundColor: colors.background,
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
          maxHeight={300}
          theme={colors.theme}
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
          dropDownDirection="AUTO"
          listMode="MODAL"
          closeAfterSelecting={true}
          listParentLabelStyle={{
            fontWeight: 'bold',
          }}
          listChildContainerStyle={{
            paddingLeft: 40,
          }}
          modalProps={{
            animationType: 'fade',
          }}
          modalContentContainerStyle={{
            backgroundColor: colors.background,
          }}
          dropDownContainerStyle={{
            backgroundColor: colors.background,
          }}
          modalTitleStyle={{
            fontWeight: 'bold',
          }}
          style={{
            width: '90%',
            paddingVertical: 8,
            paddingHorizontal: 16,
            borderWidth: 2,
            textColor: colors.text,
            borderRadius: 10,
            marginBottom: 8,
            alignSelf: 'center',
            borderColor: colors.text,
            backgroundColor: colors.background,
          }}
        />

        <DatePicker
          textColor={colors.text}
          mode={'date'}
          androidVariant={'nativeAndroid'}
          date={date}
          onDateChange={setDate}
          style={{backgroundColor: colors.background}}
        />
        <View
          style={{
            width: 200,
            height: 40,
            backgroundColor: '#01DBB7',
            borderRadius: 15,
            top: 45,
          }}>
          <Pressable
            onPress={handleSubmit}
            style={{
              height: 40,
              width: 'auto',
              alignSelf: 'center',
              alignContent: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontStyle: 'bold',
              }}>
              Add Expense
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default AddExpense;

const styles = StyleSheet.create({});
