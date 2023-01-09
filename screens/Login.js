import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useTheme} from '@react-navigation/native';

const Login = () => {
  const {colors} = useTheme();
  const [Email, setEmail] = useState('');
  const [Name, setName] = useState('');
  const [Debit, setDebit] = useState('');
  const [Cvv, setCvv] = useState('');
  const [Income, setIncome] = useState('');
  const [Expiry, setExpiry] = useState('');
  const [data, setData] = useState(null);
  const prevData = useRef(null);
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (prevData.current !== data) {
      // Data has changed, re-render the component
      prevData.current = data;
    }
  }, [data]);

  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, []),
  );

  const handleUpdate = () => {
    fetch(
      `https://mad-project-b14db-default-rtdb.asia-southeast1.firebasedatabase.app/users/` +
        '-NLBwNeviSBXfHjYAzPr' +
        `.json`,
      {
        method: 'PATCH',
        body: JSON.stringify({
          name: Name,
          email: Email,
          debit: Debit,
          cvv: Cvv,
          expiry: Expiry,
          income: Income,
        }),
      },
    );
    alert('Data Updated');
    console.log(
      JSON.stringify({
        name: Name,
        email: Email,
        debit: Debit,
        cvv: Cvv,
        expiry: Expiry,
        income: Income,
      }),
    );
  };

  const fetchData = () => {
    // Fetch data from API or do other work
    fetch(
      'https://mad-project-b14db-default-rtdb.asia-southeast1.firebasedatabase.app/users.json',
    )
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
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
          top: 150,
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
          Update Information Below
        </Text>

        <View
          style={{
            width: '90%',
            borderRadius: 35,
            alignSelf: 'center',
            backgroundColor: colors.background,
          }}>
          {data ? (
            Object.keys(data).map(key => (
              <View
                key={key}
                style={{
                  width: '100%',
                  height: '100%',
                  alignSelf: 'center',
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
                    placeholder={'Name :' + data[key].name}
                    onChangeText={text => {
                      setName(text);
                    }}
                    placeholderTextColor={colors.text}
                    style={{
                      color: colors.text,
                      fontSize: 20,
                      fontStyle: 'bold',
                      marginTop: 30,
                      padding: 8,
                      width: '100%',
                      textAlign: 'center',
                      borderWidth: 2,
                      borderColor: colors.text,
                      borderRadius: 10,
                    }}></TextInput>
                  <TextInput
                    placeholder={'Email: ' + data[key].email}
                    placeholderTextColor={colors.text}
                    onChangeText={setEmail}
                    style={{
                      color: colors.text,
                      fontSize: 20,
                      fontStyle: 'bold',
                      marginTop: 20,
                      padding: 8,
                      width: '100%',
                      textAlign: 'center',
                      borderWidth: 2,
                      borderColor: colors.text,
                      borderRadius: 10,
                    }}
                  />
                  <TextInput
                    placeholder={'Debit Card: ' + data[key].debit}
                    placeholderTextColor={colors.text}
                    onChangeText={setDebit}
                    style={{
                      color: colors.text,
                      fontSize: 20,
                      fontStyle: 'bold',
                      marginTop: 20,
                      padding: 8,
                      width: '100%',
                      textAlign: 'center',
                      borderWidth: 2,
                      borderColor: colors.text,
                      borderRadius: 10,
                    }}
                  />
                  <TextInput
                    placeholder={'Expiry Date: ' + data[key].expiry}
                    placeholderTextColor={colors.text}
                    onChangeText={setExpiry}
                    style={{
                      color: colors.text,
                      fontSize: 20,
                      fontStyle: 'bold',
                      marginTop: 20,
                      padding: 8,
                      width: '100%',
                      textAlign: 'center',
                      borderWidth: 2,
                      borderColor: colors.text,
                      borderRadius: 10,
                    }}
                  />
                  <TextInput
                    placeholder={'CVV: ' + data[key].cvv}
                    placeholderTextColor={colors.text}
                    onChangeText={setCvv}
                    style={{
                      color: colors.text,
                      fontSize: 20,
                      fontStyle: 'bold',
                      marginTop: 20,
                      padding: 8,
                      width: '100%',
                      textAlign: 'center',
                      borderWidth: 2,
                      borderColor: colors.text,
                      borderRadius: 10,
                    }}
                  />

                  <TextInput
                    placeholder={'Income: ' + data[key].income + ' .PKR'}
                    placeholderTextColor={colors.text}
                    onChangeText={setIncome}
                    style={{
                      color: colors.text,
                      fontSize: 20,
                      fontStyle: 'bold',
                      marginTop: 20,
                      padding: 8,
                      width: '100%',
                      textAlign: 'center',
                      borderWidth: 2,
                      borderColor: colors.text,
                      borderRadius: 10,
                    }}
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
                        Update Information
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            ))
          ) : (
            <Text>Loading data...</Text>
          )}
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({});
