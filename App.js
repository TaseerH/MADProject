import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Login from './screens/Login';
import Cards from './screens/Cards';
import AddExpense from './screens/AddExpense';
import Dashboard from './screens/Dashboard';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StatusBar} from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#01DBB7',
        tabBarStyle: {position: 'absolute', backgroundColor: 'black'},
        headerShown: false,
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Expenses',
          tabBarIcon: tabInfo => {
            return (
              <Ionicons
                name="cash"
                size={24}
                color={tabInfo.focused ? '#01DBB7' : '#8e8e93'}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="AddExpense"
        component={AddExpense}
        options={{
          tabBarLabel: '',
          tabBarIcon: tabInfo => {
            return (
              <Ionicons
                name="ios-add-circle"
                size={37}
                color={tabInfo.focused ? '#01DBB7' : '#8e8e93'}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Cards"
        component={Cards}
        options={{
          tabBarLabel: 'Cards',
          tabBarIcon: tabInfo => {
            return (
              <Ionicons
                name="card"
                size={24}
                color={tabInfo.focused ? '#01DBB7' : '#8e8e93'}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Dashboard" component={MyTabs} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cards" component={Cards} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
