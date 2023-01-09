import React, {useState, useEffect, useRef, Component} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Text,
  Image,
  Pressable,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useTheme} from '@react-navigation/native';
import {colors} from 'react-native-elements';

function Cards({navigation}) {
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
      'https://mad-project-b14db-default-rtdb.asia-southeast1.firebasedatabase.app/users.json',
    )
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  };

  return (
    <View
      style={{
        width: '100%',
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
            <View style={styles.container}>
              <View style={styles.group}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Login')}
                  style={styles.button}>
                  <View style={styles.rect}>
                    <Text style={styles.money}>100 .PKR</Text>
                  </View>
                  <View style={styles.rect2}>
                    <View style={styles.rect3}></View>
                    <View style={styles.incomeStack}>
                      <Text style={styles.income}>Income</Text>
                      <View style={styles.money1Stack}>
                        <Text style={styles.money1}>
                          {data[key].income} .PKR
                        </Text>
                        <View style={styles.group2}>
                          <Text style={styles.income1}>Expenses</Text>
                          <View style={styles.money2Stack}>
                            <Text style={styles.money2}>100 .PKR</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <Text style={styles.cash}>$ Cash</Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  width: 370,
                  top: 40,
                  borderWidth: 2,
                  borderRadius: 30,
                  borderColor: colors.text,
                }}>
                <Pressable onPress={() => navigation.navigate('Login')}>
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 0.5, y: 0.8}}
                    locations={[-1, 0.1, 0.95]}
                    colors={[
                      'rgba(83, 83, 83, 1)',
                      'rgba(71, 71, 71, 1)',
                      'rgba(0, 0, 0, 1)',
                    ]}
                    style={{borderRadius: 25}}>
                    <Text
                      style={{
                        color: 'white',
                        marginTop: 30,
                        alignSelf: 'center',
                        fontSize: 30,
                        fontStyle: 'bold',
                        width: 'auto',
                      }}>
                      {data[key].debit}
                    </Text>
                    <View style={{flexDirection: 'row', paddingTop: 15}}>
                      <View style={{flexDirection: 'column'}}>
                        <Text
                          style={{
                            padding: 8,
                            color: 'white',
                            fontSize: 20,
                            width: 'auto',
                          }}>
                          Valid Till: {data[key].expiry} CVV: {data[key].cvv}
                        </Text>
                        <Text
                          style={{
                            paddingTop: 8,
                            paddingLeft: 8,
                            paddingBottom: 25,
                            color: 'white',
                            fontSize: 25,
                            width: 'auto',
                          }}>
                          {data[key].name}
                        </Text>
                      </View>
                      <View style={{top: 5, padding: 8}}>
                        <FontAwesome
                          name="cc-mastercard"
                          size={75}
                          color={'#F5A01A'}></FontAwesome>
                      </View>
                    </View>
                  </LinearGradient>
                </Pressable>
              </View>
            </View>
          </View>
        ))
      ) : (
        <Text>Loading data...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    alignItems: 'center',
  },
  group: {
    width: '90%',
    height: 196,
    justifyContent: 'center',
    marginTop: 60,
  },
  button: {
    width: '100%',
    height: 196,
    borderWidth: 2,
    borderColor: colors.text,
    opacity: 1,
    borderRadius: 23,
    overflow: 'visible',
    borderStyle: 'solid',
    alignSelf: 'center',
  },

  rect: {
    flex: 0.66,
    backgroundColor: 'rgba(80,227,194,1)',
    margin: 0,
    justifyContent: 'center',
    alignContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  rect2: {
    flex: 0.34,
    backgroundColor: 'rgba(0,0,0,1)',
    margin: 0,
    borderBottomRightRadius: 19,
    borderBottomLeftRadius: 19,
    flexDirection: 'row',
  },
  rect3: {
    flex: 0.5,
    borderBottomLeftRadius: 20,
    borderWidth: 0,
    borderColor: 'grey',
    borderRightWidth: 2,
  },
  income: {
    top: 11,
    position: 'absolute',
    fontFamily: 'roboto-500',
    color: 'rgba(255,255,255,1)',
    fontSize: 18,
    left: 8,
  },
  money1: {
    top: 33,
    left: -10,
    position: 'absolute',
    fontFamily: 'roboto-300',
    color: 'rgba(255,255,255,1)',
    fontSize: 20,
  },
  pkr1: {
    top: 33,
    left: 37,
    position: 'absolute',
    fontFamily: 'roboto-300',
    color: 'rgba(255,255,255,1)',
    fontSize: 20,
    right: 198,
  },
  group2: {
    left: 185,
    width: 448,
    height: 67,
    top: 10,
  },
  rect4: {
    flex: 0.5,
    borderBottomRightRadius: 20,
    borderWidth: 0,
    borderColor: 'rgba(255,255,255,1)',
    borderRightWidth: 0,
  },
  group3: {
    top: 10,
    left: 43,
    alignContent: 'center',
    justifyContent: 'center',
  },
  income1: {
    fontFamily: 'roboto-500',
    color: 'rgba(255,255,255,1)',
    fontSize: 18,
  },
  money2: {
    fontFamily: 'roboto-300',
    color: 'rgba(255,255,255,1)',
    fontSize: 20,
  },
  pkr2: {
    top: 0,
    left: 37,
    position: 'absolute',
    fontFamily: 'roboto-300',
    color: 'rgba(255,255,255,1)',
    fontSize: 20,
    right: 0,
  },
  incomeStack: {
    top: 0,
    left: 46,
    height: 67,
    position: 'absolute',
    right: -281,
  },
  cash: {
    top: 10,
    left: 20,
    position: 'absolute',
    fontFamily: 'roboto-900',
    color: 'rgba(255,255,255,1)',
    fontSize: 20,
  },
  money: {
    top: 20,
    left: 85,
    fontFamily: 'roboto-700',
    color: 'rgba(255,255,255,1)',
    fontSize: 46,
  },
});

export default Cards;
