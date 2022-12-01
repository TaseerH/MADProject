  import { StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView } from 'react-native'
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
  import React from 'react'
  import LinearGradient from 'react-native-linear-gradient'

  const Login = () => {
    return (
      <KeyboardAwareScrollView
      style={{ backgroundColor: 'black' }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}>
      <View style={{ height: 1000, width: 'auto'}}>
      <Image source={{uri: 'https://o.remove.bg/downloads/d4788af6-f573-4583-899c-6c51b8e0486a/construction-costs-abstract-concept_335657-3116-removebg-preview.png'}} style={{marginTop: 20, width: 300, height: 300, alignSelf: 'center',resizeMode: 'cover',}}/>
        <Text style={{color: "white",
            fontSize: 32,
            lineHeight: 84,
            fontWeight: "Bold",
            textAlign: "center",
            marginBottom: 30,
            alignSelf: 'center',
            }}>Personal Expense Tracker</Text>

        <View style={{width: 'auto', height: 700, marginTop: 20, borderRadius: 30, backgroundColor: 'black' }}>
        <Image source={{uri: 'https://o.remove.bg/downloads/62fd7d49-1cc2-45d5-961d-0b6d2aa5415d/image-removebg-preview.png'}} style={{height: 30, width: 150, alignSelf: 'center', resizeMode: 'cover',}}></Image>   
        <TextInput
          placeholder="Enter name" placeholderTextColor='white'
          style={{ backgroundColor: '#292D3E', 
          color: 'black' ,
          fontSize: 20, 
          fontStyle: 'bold', 
          marginTop: 70,alignSelf: 'center', 
          padding: 8, 
          width: 400,
          textAlign: 'center', 
          paddingTop: 10,  
          borderWidth: 2, 
          borderRadius: 10, }}
        />
        <TextInput
          placeholder="Enter email" placeholderTextColor='white'
          style={{ backgroundColor: '#292D3E', 
          fontSize: 20, 
          fontStyle: 'bold', 
          marginTop: 20, alignSelf: 'center', 
          padding: 8, 
          width: 400,
          textAlign: 'center', 
          paddingTop: 10,  
          borderWidth: 2, 
          borderRadius: 10, }}
        />
        <TextInput
          placeholder="Enter Debit Card Number" placeholderTextColor='white'
          style={{ backgroundColor: '#292D3E', 
          fontSize: 20, 
          fontStyle: 'bold', 
          marginTop: 20, alignSelf: 'center',
          padding: 8, 
          width: 400,
          textAlign: 'center', 
          paddingTop: 10, 
          borderWidth: 2, 
          borderRadius: 10, }}
        />
        <TextInput
          placeholder="Enter Card Expiry Date" placeholderTextColor='white'
          style={{ backgroundColor: '#292D3E',
          fontSize: 20, 
          fontStyle: 'bold', 
          marginTop: 20, alignSelf: 'center',
          padding: 8, 
          width: 400,
          textAlign: 'center', 
          paddingTop: 10, 
          borderWidth: 2, 
          borderRadius: 10, }}
        />
        <TextInput
          placeholder="Enter CSV" placeholderTextColor='white'
          style={{ backgroundColor: '#292D3E', 
          fontSize: 20, 
          fontStyle: 'bold', 
          marginTop: 20, alignSelf: 'center',
          padding: 8, 
          width: 400,
          textAlign: 'center', 
          paddingTop: 10, 
          borderWidth: 2, 
          borderRadius: 10, }}
        />
        </View>
      </View>
      </KeyboardAwareScrollView>
    )
  }

  export default Login

  const styles = StyleSheet.create({})