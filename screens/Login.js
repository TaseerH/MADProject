import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Login = () => {
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
      style={{backgroundColor: 'black'}}
      resetScrollToCoords={{x: 0, y: 0}}
      scrollEnabled={true}>
      <View
        style={{
          height: 700,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 32,
            lineHeight: 84,
            fontWeight: 'Bold',
          }}>
          Update Information
        </Text>

        <View
          style={{
            width: '90%',
            borderRadius: 35,
            alignSelf: 'center',
            backgroundColor: 'black',
          }}>
          {data ? (
            Object.keys(data).map(key => (
              <View
                key={key}
                style={{
                  width: '100%',
                  height: 400,
                  alignSelf: 'center',
                }}>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'center',
                    alignSelf: 'center',
                    height: 'auto',
                    borderRadius: 30,
                    backgroundColor: 'black',
                  }}>
                  <TextInput
                    placeholder="Enter Name"
                    value={data[key].name}
                    placeholderTextColor="white"
                    style={{
                      color: 'white',
                      fontSize: 20,
                      fontStyle: 'bold',
                      marginTop: 30,
                      padding: 8,
                      width: '100%',
                      textAlign: 'center',
                      borderWidth: 2,
                      borderColor: 'white',
                      borderRadius: 10,
                    }}></TextInput>
                  <TextInput
                    placeholder="Enter email"
                    placeholderTextColor="white"
                    value={data[key].email}
                    style={{
                      color: 'white',
                      fontSize: 20,
                      fontStyle: 'bold',
                      marginTop: 20,
                      padding: 8,
                      width: '100%',
                      textAlign: 'center',
                      borderWidth: 2,
                      borderColor: 'white',
                      borderRadius: 10,
                    }}
                  />
                  <TextInput
                    placeholder="Enter Debit Card Number"
                    placeholderTextColor="white"
                    value={data[key].debit}
                    style={{
                      color: 'white',
                      fontSize: 20,
                      fontStyle: 'bold',
                      marginTop: 20,
                      padding: 8,
                      width: '100%',
                      textAlign: 'center',
                      borderWidth: 2,
                      borderColor: 'white',
                      borderRadius: 10,
                    }}
                  />
                  <TextInput
                    placeholder="Enter Card Expiry Date"
                    placeholderTextColor="white"
                    value={data[key].expiry}
                    style={{
                      color: 'white',
                      fontSize: 20,
                      fontStyle: 'bold',
                      marginTop: 20,
                      padding: 8,
                      width: '100%',
                      textAlign: 'center',
                      borderWidth: 2,
                      borderColor: 'white',
                      borderRadius: 10,
                    }}
                  />
                  <TextInput
                    placeholder="Enter CVV"
                    placeholderTextColor="white"
                    value={data[key].cvv}
                    style={{
                      color: 'white',
                      fontSize: 20,
                      fontStyle: 'bold',
                      marginTop: 20,
                      padding: 8,
                      width: '100%',
                      textAlign: 'center',
                      borderWidth: 2,
                      borderColor: 'white',
                      borderRadius: 10,
                    }}
                  />

                  <TextInput
                    placeholder="Enter Income"
                    placeholderTextColor="white"
                    value={data[key].income}
                    style={{
                      color: 'white',
                      fontSize: 20,
                      fontStyle: 'bold',
                      marginTop: 20,
                      padding: 8,
                      width: '100%',
                      textAlign: 'center',
                      borderWidth: 2,
                      borderColor: 'white',
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
