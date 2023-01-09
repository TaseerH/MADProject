import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {useFocusEffect} from '@react-navigation/native';

import DatePicker from 'react-native-date-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useTheme} from '@react-navigation/native';

const EditExpense = ({navigation, route}) => {
  const {colors} = useTheme();
  const {Expense, date, Category, Key} = route.params;
  const [newExpense, setNewExpense] = useState([]);
  const [newDate, setNewDate] = useState(new Date());
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
  const real_date = newDate.toDateString();
  const {data, setData} = useState(null);
  console.log(Key);
  const mUrl = `https://mad-project-b14db-default-rtdb.asia-southeast1.firebasedatabase.app/expense/${Key}.json`;
  const handleUpdate = () => {
    fetch(mUrl, {
      method: 'PATCH',
      body: JSON.stringify({
        expense: newExpense,
        value: value,
        real_date: real_date,
      }),
    }).catch(error =>
      console.error('Hello the error is while updating: ', error),
    );
    alert('Data Updated');
    console.log(newExpense);
  };

  console.log(data);
  const handleDelete = () => {
    fetch(mUrl, {
      method: 'DELETE',
    }).catch(error =>
      console.error('Hello the error is while deleting: ', error),
    );
    alert('Data Deleted');
  };
  return (
    <KeyboardAwareScrollView
      style={{backgroundColor: colors.background}}
      resetScrollToCoords={{x: 0, y: 0}}
      scrollEnabled={true}>
      <View
        style={{
          height: 850,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            color: colors.text,
            fontSize: 32,
            lineHeight: 84,
            fontWeight: 'Bold',
          }}>
          Edit/Delete Expense Below
        </Text>

        <View
          style={{
            width: '90%',
            borderRadius: 35,
            alignSelf: 'center',
            backgroundColor: colors.background,
          }}>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              alignSelf: 'center',
              height: 'auto',
              borderRadius: 30,
              backgroundColor: colors.background,
            }}>
            <TextInput
              placeholder={Expense}
              placeholderTextColor={colors.text}
              onChangeText={setNewExpense}
              style={{
                color: colors.text,
                fontSize: 20,
                fontStyle: 'bold',
                marginTop: 30,
                padding: 8,
                width: '100%',
                borderWidth: 2,
                borderColor: colors.text,
                borderRadius: 10,
              }}></TextInput>
            <DropDownPicker
              open={open}
              value={Category}
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
                width: '100%',
                borderColor: colors.text,
                borderWidth: 2,
                borderRadius: 10,
                marginTop: 10,
                marginBottom: 8,
                alignSelf: 'center',
                backgroundColor: colors.background,
              }}
            />

            <DatePicker
              textColor={colors.text}
              mode={'date'}
              androidVariant={'nativeAndroid'}
              date={newDate}
              onDateChange={setNewDate}
              style={{backgroundColor: colors.background}}
            />
            <View
              style={{
                width: 200,
                height: 40,
                backgroundColor: '#01DBB7',
                borderRadius: 15,
                top: 30,
              }}>
              <Pressable
                onPress={handleUpdate}
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
                    color: colors.text,
                    fontSize: 20,
                    fontStyle: 'bold',
                  }}>
                  Update Expense
                </Text>
              </Pressable>
            </View>
            <View
              style={{
                width: 200,
                height: 40,
                backgroundColor: '#01DBB7',
                borderRadius: 15,
                top: 45,
              }}>
              <Pressable
                onPress={handleDelete}
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
                    color: colors.text,
                    fontSize: 20,
                    fontStyle: 'bold',
                  }}>
                  Delete Expense
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default EditExpense;

const styles = StyleSheet.create({});
