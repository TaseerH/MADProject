import { StyleSheet, Text, View, Image, Modal,TextInput, Pressable, Dimensions, } from 'react-native'
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
  import React from 'react'
  import DatePicker from 'react-native-date-picker'
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

  const [expense, setExpense] = useState([]);
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([
    {label: 'Food & Drinks', value: 'Food & Drinks'},
    {label: 'Shopping', value: 'Shopping',},
    {label: 'Fuel', value: 'Fuel', parent: 'Transport'},

    {label: 'Transport', value: 'Transport', },
    {label: 'Restaurant', value: 'Restaurant', parent: 'Food & Drinks'},
    {label: 'Groceries', value: 'Groceries', parent: 'Food & Drinks'},

    {label: 'Clothes', value: 'Clothes', parent: 'Shopping'},
    {label: 'Bills & Fees', value: 'Bills & Fees'},
  ]);
  const real_date = date.toDateString()
  return (
    <KeyboardAwareScrollView
      style={{ backgroundColor: 'black' }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}>
      <View style={{ height: 950, width: 'auto'}}>
      
      <View style={{width: 'auto', height: 250, marginTop: 20, borderRadius: 35, backgroundColor: 'black' }}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <Image source={{uri: 'https://o.remove.bg/downloads/13912b89-df34-4d65-830d-cce2b3b8b646/black-man-with-beard-avatar-character-free-vector-removebg-preview.png'}} style={{height: 100, width: 100, resizeMode: 'cover'}}></Image>
            <Text style={{color: 'white' ,
                fontSize: 20, 
                fontStyle: 'bold', }}>Taseer Haider</Text>
            </View>
            <View style={{flexDirection:'row',}}>
            <View style={{width: 180, height: 90, marginTop: 35, marginLeft: 30, backgroundColor: '#01DBB7', borderRadius: 15,}}>
                   
                    <Pressable style={{height: 90, width: 180, alignSelf: 'center', marginTop: 20 , borderRadius: 10 }}>
                        <Text style={{color: 'white' ,
                        fontSize: 20,
                        fontStyle: 'bold', alignSelf:'center'}}>Income</Text>
                          <Text style={{color: 'white' ,
                        fontSize: 20, 
                        marginTop: 5,
                        fontStyle: 'italic', alignSelf:'center'}}>Rs. 2500</Text>
                    </Pressable>
                
            </View>
            <View style={{width: 180, height: 90, marginTop: 35, marginLeft: 30, backgroundColor: '#E1E1E1', borderRadius: 15,}}>
                   
                    <Pressable style={{height: 90, width: 180, alignSelf: 'center', marginTop: 20 , borderRadius: 10 }}>
                        <Text style={{color: 'black' ,
                        fontSize: 20,
                        fontStyle: 'bold', alignSelf:'center'}}>Expenses</Text>
                          <Text style={{color: 'black' ,
                        fontSize: 20, 
                        marginTop: 5,
                        fontStyle: 'italic', alignSelf:'center'}}>Rs. 12</Text>
                    </Pressable>
                
            </View>
            </View> 
      </View>  
        
        <View style={{width: 'auto', height: 700, marginTop: 20, borderRadius: 35, backgroundColor: 'black' }}>
        <Image source={{uri: 'https://o.remove.bg/downloads/3c80613c-2fc3-4fd5-858f-515d28eed0c2/Screenshot_2022-11-21_233640-removebg-preview.png'}} style={{height: 30, width: 350, alignSelf: 'center', resizeMode: 'cover',}}></Image>   
        <Text style={{ textAlign: 'center', fontSize: 18, margin: 15}}>Expenses List</Text>
        <View style={{width: 380, height: 90, marginTop: 35, alignSelf: 'center', backgroundColor: '#5D5D5D', borderRadius: 15,}}>
                   
                    <Pressable style={{height: 90, width: 320, alignSelf: 'center',  marginTop: 20 , }}>
                        <View style={{flexDirection: 'row',}}>
                        <Text style={{color: '#01DBB7' ,
                        fontSize: 20,
                        fontStyle: 'bold', textAlign: 'left', }}>{value}</Text>
                        <Text style={{color: '#01DBB7' ,
                        fontSize: 20, 
                        marginTop: 5,
                        fontStyle: 'italic', marginLeft: 80,}}>{real_date}</Text>
                        </View>
                        <Text style={{color: '#01DBB7' ,
                        fontSize: 20, 
                        marginTop: 5,
                        fontStyle: 'italic', textAlign: 'left',}}>{expense} PKR</Text>
                    </Pressable>
                
            </View>
        </View>

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
        left: "40%",
        elevation: 5,
        transform: [{ translateX: -(width * 0.4) }, 
                    { translateY: -90 }],
        height: 480,
        width: width * 1,
        backgroundColor: "black",
        borderRadius: 10,}}>
                        <TextInput placeholder="Enter value" placeholderTextColor='white'
                                   value={expense} style={{width: "80%",
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderWidth: 1,
        marginBottom: 8,
        backgroundColor: '#292D3E'}} 
                                   onChangeText={(value) => setExpense(value)} />
                                   
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        maxHeight={200}
        theme="DARK"
        multiple={false}
        searchable={true}
        ListMode={"SCROLLVIEW"}
        mode="BADGE"
        badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
        style={{width: '80%', paddingVertical: 8,
        paddingHorizontal: 16,
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderWidth: 1, borderRadius: 5,
        marginBottom: 8, alignSelf:'center',}}
      />

    <DatePicker textColor= {'white'} mode= {'date'} androidVariant={"nativeAndroid"} date={date} onDateChange={setDate} style={{ backgroundColor: 'transparent'}} />
    <View style={{flexDirection:'row', alignItems:'baseline'}}>
                            {/** This button is responsible to close the modal */}
                        <Pressable title="Close" onPress={toggleModalVisibility} style={{height: 35, width: 60, backgroundColor: '#01DBB7', alignSelf: 'center', marginTop: 80, borderRadius: 6 , }}>
                        <Text style={{color: 'white' ,
                        fontSize: 20, 
                        marginTop: 5,
                        fontStyle: 'bold', alignSelf:'center'}}>Add</Text>
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