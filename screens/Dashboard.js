import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Dashboard = ({navigation}) => {
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
      'https://mad-project-b14db-default-rtdb.asia-southeast1.firebasedatabase.app/expense.json',
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
      <View style={{height: 'auto', width: 'auto'}}>
        <View
          style={{
            width: 'auto',
            height: 250,
            marginTop: 20,
            borderRadius: 35,
            backgroundColor: 'black',
          }}>
          <View
            style={{
              flexDirection: 'column',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 34,
                fontStyle: 'bold',
                marginLeft: 30,
              }}>
              Hi,
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 34,
                fontStyle: 'bold',
                marginLeft: 30,
              }}>
              Taseer Haider
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 30,
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <View
              style={{
                width: 170,
                height: 100,
                marginTop: 35,
                backgroundColor: '#01DBB7',
                borderRadius: 15,
              }}>
              <Pressable
                onPress={() => navigation.navigate('Login')}
                style={{
                  height: 90,
                  width: 180,
                  alignSelf: 'center',
                  marginTop: 20,
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 20,
                    fontStyle: 'bold',
                    alignSelf: 'center',
                  }}>
                  Income
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 20,
                    marginTop: 5,
                    fontStyle: 'italic',
                    alignSelf: 'center',
                  }}>
                  Rs. 2500
                </Text>
              </Pressable>
            </View>
            <View
              style={{
                width: 170,
                height: 100,
                marginTop: 35,
                backgroundColor: '#E1E1E1',
                borderRadius: 15,
              }}>
              <Pressable
                onPress={() => navigation.navigate('Login')}
                style={{
                  height: 90,
                  width: 180,
                  alignSelf: 'center',
                  marginTop: 20,
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 20,
                    fontStyle: 'bold',
                    alignSelf: 'center',
                  }}>
                  Expenses
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 20,
                    marginTop: 5,
                    fontStyle: 'italic',
                    alignSelf: 'center',
                  }}>
                  Rs. 12
                </Text>
              </Pressable>
            </View>
          </View>
        </View>

        <View
          style={{
            width: 'auto',
            height: 'auto',
            marginTop: 20,
            marginBottom: 90,
            borderRadius: 35,
            backgroundColor: 'black',
          }}>
          {data ? (
            Object.keys(data).map(key => (
              <View
                key={key}
                style={{
                  width: '90%',
                  height: 90,
                  marginTop: 35,
                  alignSelf: 'center',
                  backgroundColor: '#5D5D5D',
                  borderRadius: 15,
                }}>
                <Pressable
                  style={{
                    height: 90,
                    width: 320,
                    alignSelf: 'center',
                    marginTop: 20,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        color: '#01DBB7',
                        fontSize: 20,
                        fontStyle: 'bold',
                        textAlign: 'left',
                      }}>
                      {data[key].expense}
                    </Text>
                    <Text
                      style={{
                        color: '#01DBB7',
                        fontSize: 20,
                        marginTop: 5,
                        fontStyle: 'italic',
                        marginLeft: 80,
                      }}>
                      {data[key].real_date}
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: '#01DBB7',
                      fontSize: 20,
                      marginTop: 5,
                      fontStyle: 'italic',
                      textAlign: 'left',
                    }}>
                    {data[key].value}
                  </Text>
                </Pressable>
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

export default Dashboard;

const styles = StyleSheet.create({});
