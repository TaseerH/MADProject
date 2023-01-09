import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useTheme} from '@react-navigation/native';

const Dashboard = ({navigation}) => {
  const {colors} = useTheme();
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
      style={{color: colors.background}}
      resetScrollToCoords={{x: 0, y: 0}}
      scrollEnabled={true}>
      <View style={{height: 'auto', width: 'auto'}}>
        <View
          style={{
            width: 'auto',
            height: 250,
            marginTop: 20,
            borderRadius: 35,
            color: colors.background,
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={{
                flexDirection: 'column',
              }}>
              <Text
                style={{
                  color: colors.text,
                  fontSize: 34,
                  fontStyle: 'bold',
                  marginLeft: 30,
                }}>
                Hi,
              </Text>
              <Text
                style={{
                  color: colors.text,
                  fontSize: 34,
                  fontStyle: 'bold',
                  marginLeft: 30,
                }}>
                Taseer Haider
              </Text>
            </View>
            <View
              style={{
                width: 50,
                height: 50,
                marginTop: 20,
                marginLeft: 70,
                borderWidth: 2,
                color: colors.background,
                backgroundColor: 'white',
                borderRadius: 50,
              }}>
              <Pressable
                onPress={() => navigation.navigate('Charts')}
                style={{
                  height: 50,
                  width: 50,
                  alignSelf: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <FontAwesome
                  name="pie-chart"
                  size={25}
                  color={'black'}></FontAwesome>
              </Pressable>
            </View>
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
                width: 200,
                height: 50,
                marginTop: 35,
                backgroundColor: '#01DBB7',
                borderRadius: 15,
              }}>
              <Pressable
                onPress={() => navigation.navigate('Login')}
                style={{
                  height: 50,
                  width: 200,
                  alignSelf: 'center',
                  marginTop: 10,
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 20,
                    fontStyle: 'bold',
                    alignSelf: 'center',
                  }}>
                  Income: 123 .PKR
                </Text>
              </Pressable>
            </View>
          </View>
        </View>

        <View
          style={{
            width: 'auto',
            height: 'auto',
            marginBottom: 90,
            borderRadius: 35,
            color: colors.background,
          }}>
          {data ? (
            Object.keys(data).map(key => (
              <View
                key={key}
                style={{
                  width: '90%',
                  height: 90,
                  marginTop: 25,
                  alignSelf: 'center',
                  backgroundColor: '#01DBB7',
                  borderRadius: 15,
                }}>
                <Pressable
                  onPress={() =>
                    navigation.navigate('EditExpense', {
                      Expense: data[key].expense,
                      date: data[key].real_date,
                      Category: data[key].value,
                      Key: key,
                    })
                  }
                  style={{
                    height: 90,
                    width: 320,
                    alignSelf: 'center',
                    marginTop: 20,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 20,
                        fontStyle: 'italic',
                        textAlign: 'left',
                      }}>
                      Ammount: {data[key].expense}
                    </Text>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 20,
                        fontStyle: 'italic',
                        marginLeft: 10,
                      }}>
                      Date: {data[key].real_date}
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 20,
                      marginTop: 5,
                      fontStyle: 'italic',
                      textAlign: 'center',
                    }}>
                    Expense Category: {data[key].value}
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
