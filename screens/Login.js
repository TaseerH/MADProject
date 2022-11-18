  import { StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView } from 'react-native'
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
  import React from 'react'
  import LinearGradient from 'react-native-linear-gradient'

  const Login = () => {
    return (
      <KeyboardAwareScrollView
      style={{ backgroundColor: '#4c69a5' }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={true}>
      <View style={{ height: 1000, width: 'auto'}}>
      <LinearGradient start = {{x:0, y:0}} end={{x:1, y:1}} colors={['#1d0ccb', '#3f3dcb', '#af322c']} locations = {[0.03, 0.1, 0.88]}style = {{height: 1000, width: 'auto'}}>
        <Image source={{uri: 'https://o.remove.bg/downloads/d4788af6-f573-4583-899c-6c51b8e0486a/construction-costs-abstract-concept_335657-3116-removebg-preview.png'}} style={{marginTop: 30, marginLeft: 30, width: 400, height: 400, resizeMode: 'cover',}}/>
        <Text style={{color: "white",
            fontSize: 32,
            lineHeight: 84,
            fontWeight: "Italics",
            textAlign: "center",
            marginBottom: 30,
            }}>Personal Expense Tracker</Text>

        <View style={{width: 'auto', height: 700, marginTop: 20, borderRadius: 30, backgroundColor: 'white' }}>
        <Image source={{uri: 'https://o.remove.bg/downloads/62fd7d49-1cc2-45d5-961d-0b6d2aa5415d/image-removebg-preview.png'}} style={{height: 30, width: 150, marginLeft: 150, resizeMode: 'cover',}}></Image>   
        <TextInput
          placeholder="Enter name" placeholderTextColor='black'
          style={{ backgroundColor: '#f1f1f1', 
          color: 'black' ,
          fontSize: 20, 
          fontStyle: 'bold', 
          marginTop: 100, 
          marginLeft: 30, 
          padding: 8, 
          width: 400,
          textAlign: 'center', 
          paddingTop: 10, 
          borderColor: '#28558a', 
          borderWidth: 2, 
          borderRadius: 10, }}
        />
        <TextInput
          placeholder="Enter email" placeholderTextColor='black'
          style={{ backgroundColor: '#f1f1f1', 
          fontSize: 20, 
          fontStyle: 'bold', 
          marginTop: 20, 
          marginLeft: 30, 
          padding: 8, 
          width: 400,
          textAlign: 'center', 
          paddingTop: 10, 
          borderColor: '#28558a', 
          borderWidth: 2, 
          borderRadius: 10, }}
        />
        <TextInput
          placeholder="Enter Debit Card Number" placeholderTextColor='black'
          style={{ backgroundColor: '#f1f1f1', 
          fontSize: 20, 
          fontStyle: 'bold', 
          marginTop: 20, 
          marginLeft: 30, 
          padding: 8, 
          width: 400,
          textAlign: 'center', 
          paddingTop: 10, 
          borderColor: '#28558a', 
          borderWidth: 2, 
          borderRadius: 10, }}
        />
        <TextInput
          placeholder="Enter Card Expiry Date" placeholderTextColor='black'
          style={{ backgroundColor: '#f1f1f1', 
          fontSize: 20, 
          fontStyle: 'bold', 
          marginTop: 20, 
          marginLeft: 30, 
          padding: 8, 
          width: 400,
          textAlign: 'center', 
          paddingTop: 10, 
          borderColor: '#28558a', 
          borderWidth: 2, 
          borderRadius: 10, }}
        />
        <TextInput
          placeholder="Enter Card 3 Digit Code" placeholderTextColor='black'
          style={{ backgroundColor: '#f1f1f1', 
          fontSize: 20, 
          fontStyle: 'bold', 
          marginTop: 20, 
          marginLeft: 30, 
          padding: 8, 
          width: 400,
          textAlign: 'center', 
          paddingTop: 10, 
          borderColor: '#28558a', 
          borderWidth: 2, 
          borderRadius: 10, }}
        />
        </View>
          
        </LinearGradient>  
      </View>
      </KeyboardAwareScrollView>
    )
  }

  export default Login

  const styles = StyleSheet.create({})