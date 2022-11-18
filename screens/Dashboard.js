import { StyleSheet, Text, View, Image, Button, Modal,TextInput, Pressable, Dimensions  } from 'react-native'
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
  import React from 'react'
  import LinearGradient from 'react-native-linear-gradient'
  import { FloatingAction } from "react-native-floating-action";
  import { useState } from "react";
  import DropDownPicker from 'react-native-dropdown-picker';

const Dashboard = () => {
  const { width } = Dimensions.get("window");
  const actions = [
    {
      text: "Add New",
      name: "add_new",
      icon: require('../assets/3994420_draw_edit_new_pen_write_icon.png'),
      position: 1
    },
  ];
  // This is to manage Modal State
  const [isModalVisible, setModalVisible] = useState(false);
  
  // This is to manage TextInput State
  const [inputValue, setInputValue] = useState("");

  // Create toggleModalVisibility function that will
  // Open and close modal upon button clicks.
  const toggleModalVisibility = () => {
      setModalVisible(!isModalVisible);
  };
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([
    {label: 'Spain', value: 'spain'},
    {label: 'Madrid', value: 'madrid', parent: 'spain'},
    {label: 'Barcelona', value: 'barcelona', parent: 'spain'},

    {label: 'Italy', value: 'italy'},
    {label: 'Rome', value: 'rome', parent: 'italy'},

    {label: 'Finland', value: 'finland'},
    {label: 'Pakistan', value: 'pakistan'},
    {label: 'Islamabad', value: 'islamabad', parent: 'pakistan'}
  ]);
  return (
    <KeyboardAwareScrollView
      style={{ backgroundColor: '#4c69a5' }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={true}>
      <View style={{ height: 950, width: 'auto'}}>
      <LinearGradient start = {{x:0, y:0}} end={{x:1, y:1}} colors={['#1d0ccb', '#3f3dcb', '#af322c']} locations = {[0.03, 0.1, 0.88]}style = {{height: 1000, width: 'auto'}}>
      <View style={{width: 'auto', height: 550, marginTop: 20, borderRadius: 35, backgroundColor: 'white' }}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <Image source={{uri: 'https://o.remove.bg/downloads/13912b89-df34-4d65-830d-cce2b3b8b646/black-man-with-beard-avatar-character-free-vector-removebg-preview.png'}} style={{height: 100, width: 100, resizeMode: 'cover'}}></Image>
            <Text style={{color: 'black' ,
                fontSize: 20, 
                fontStyle: 'bold', }}>Taseer Haider</Text>
            </View>
            
            <View elevation={10} style={{width: 250, height: 350, alignSelf:'center', marginTop: 20,  backgroundColor: '#01DBB7', borderRadius: 15, shadowColor: '#000000',
                    shadowOffset: {
                    width: 10,
                    height: 10
                    },
                    shadowRadius: 5,
                    shadowOpacity: 1.0}}>
                
                    <Text style={{color: 'white' ,
                        fontSize: 20, 
                        marginTop: 20,
                        fontStyle: 'italic', alignSelf:'center'}}>Taseer Haider</Text>
                    <View style={{flexDirection:'row', alignItems:'baseline', marginTop: 20}}>
                        <Image source={{uri: 'https://o.remove.bg/downloads/f7f18079-9efb-42c8-858e-0bd35cbd6658/png-transparent-mastercard-credit-card-visa-payment-service-mastercard-company-orange-logo-removebg-preview.png'}} style={{height: 100, width: 100, resizeMode:'cover'}}></Image>
                        <Text style={{color: 'white' ,
                        fontSize: 20, 
                        marginTop: 20,
                        fontStyle: 'italic', alignSelf:'center'}}>545454545454</Text>
                    </View>
                    <Text style={{color: 'white' ,
                        fontSize: 20, 
                        marginTop: 5,
                        fontStyle: 'italic', alignSelf:'center'}}>Exp Date: 10/2026</Text>
                    <Text style={{color: 'white' ,
                        fontSize: 20, 
                        marginTop: 5,
                        fontStyle: 'italic', alignSelf:'center'}}>CVC: 156</Text>
                    <Pressable style={{height: 35, width: 60, backgroundColor: '#195249', alignSelf: 'center', marginTop: 80, borderRadius: 10 }}>
                        <Text style={{color: 'white' ,
                        fontSize: 20, 
                        marginTop: 5,
                        fontStyle: 'bold', alignSelf:'center'}}>Copy</Text>
                    </Pressable>
                
            </View>
            
      </View>  
        
        <View style={{width: 'auto', height: 700, marginTop: 20, borderRadius: 35, backgroundColor: 'white' }}>
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
        </View>
          
        </LinearGradient>  
      </View>
      <View>
      <FloatingAction actions={actions}
        onPressItem={toggleModalVisibility}
      />
      <Modal animationType="slide" 
                   transparent visible={isModalVisible} 
                   presentationStyle="overFullScreen" 
                   onDismiss={toggleModalVisibility}>
                <View style={{flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.2)",}}>
                    <View style={{alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        elevation: 5,
        transform: [{ translateX: -(width * 0.4) }, 
                    { translateY: -90 }],
        height: 280,
        width: width * 0.8,
        backgroundColor: "#fff",
        borderRadius: 10,}}>
                        <TextInput placeholder="Enter value" placeholderTextColor='black'
                                   value={inputValue} style={{width: "80%",
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderWidth: 1,
        marginBottom: 8,
        color: 'black'}} 
                                   onChangeText={(value) => setInputValue(value)} />
                                   
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        maxHeight={200}
        theme="LIGHT"
        multiple={false}
        searchable={true}
        ListMode={"SCROLLVIEW"}
        mode="BADGE"
        badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
        style={{width: '80%', paddingVertical: 8,
        paddingHorizontal: 16,
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderWidth: 1, borderRadius: 5,
        marginBottom: 8, alignSelf:'center'}}
      />
    <View style={{flexDirection:'row', alignItems:'baseline'}}>
    <Pressable title="Add" style={{height: 35, width: 60, backgroundColor: '#3178C6', alignSelf: 'center', marginTop: 80, marginRight: 80, borderRadius: 6 , }}>
                        <Text style={{color: 'white' ,
                        fontSize: 20, 
                        marginTop: 5,
                        fontStyle: 'bold', alignSelf:'center'}}>Add</Text>
                        </Pressable>
                        {/** This button is responsible to close the modal */}
                        <Pressable title="Close" onPress={toggleModalVisibility} style={{height: 35, width: 60, backgroundColor: '#3178C6', alignSelf: 'center', marginTop: 80, borderRadius: 6 , }}>
                        <Text style={{color: 'white' ,
                        fontSize: 20, 
                        marginTop: 5,
                        fontStyle: 'bold', alignSelf:'center'}}>Close</Text>
                        </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
    </View>
      </KeyboardAwareScrollView>
      
  )
}

export default Dashboard

const styles = StyleSheet.create({})