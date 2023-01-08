import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Text,
  Image,
} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

function Cards({navigation}) {
  return (
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
                <Text style={styles.money1}>100 .PKR</Text>
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
          height: 1000,
          borderRadius: 30,
          backgroundColor: 'black',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 35,
            fontStyle: 'bold',
            marginTop: 70,
            padding: 8,
            width: 'auto',
            textAlign: 'center',
            paddingTop: 10,
          }}>
          Credit Card Details
        </Text>

        <Text
          style={{
            borderColor: 'white',
            borderWidth: 2,
            color: 'white',
            fontSize: 20,
            fontStyle: 'bold',
            marginTop: 20,
            padding: 8,
            width: 'auto',
            textAlign: 'center',
            paddingTop: 10,
            borderRadius: 10,
          }}>
          {' '}
          Credit Card Number
        </Text>

        <Text
          style={{
            borderColor: 'white',
            borderWidth: 2,
            color: 'white',
            fontSize: 20,
            fontStyle: 'bold',
            marginTop: 20,
            padding: 8,
            width: 'auto',
            textAlign: 'center',
            paddingTop: 10,
            borderRadius: 10,
          }}>
          {' '}
          Credit Card Name
        </Text>

        <Text
          style={{
            borderColor: 'white',
            borderWidth: 2,
            color: 'white',
            fontSize: 20,
            fontStyle: 'bold',
            marginTop: 20,
            padding: 8,
            width: 'auto',
            textAlign: 'center',
            paddingTop: 10,
            borderRadius: 10,
          }}>
          {' '}
          Credit Card CVV
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,1)',
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
    backgroundColor: 'rgba(55,252,220,1)',
    borderWidth: 2,
    borderColor: 'white',
    opacity: 1,
    borderRadius: 20,
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
    left: 0,
    position: 'absolute',
    fontFamily: 'roboto-300',
    color: 'rgba(255,255,255,1)',
    fontSize: 20,
    right: 450,
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
  money1Stack: {
    top: 0,
    left: 0,
    height: 67,
    position: 'absolute',
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
