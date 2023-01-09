import {View, Text, StyleSheet, Switch} from 'react-native';
import React, {useEffect, useState} from 'react';
import Login from './screens/Login';
import Cards from './screens/Cards';
import EditExpense from './screens/EditExpense';
import AddExpense from './screens/AddExpense';
import Dashboard from './screens/Dashboard';
import Charts from './screens/Charts';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StatusBar} from 'react-native';
import {colors} from 'react-native-elements';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function SplashScreen(props) {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Dashboard');
    }, 2000);
  }, []);

  return (
    <View
      style={{
        backgroundColor: '#01DBB7',
        height: 1000,
        width: 'auto',
        alignItems: 'center',
        paddingTop: '70%',
      }}>
      <Ionicons name="ios-wallet-sharp" size={150} color={colors.background} />
      <Text style={{fontSize: 30, fontWeight: 'bold', color: colors.text}}>
        Personal Expense Manager
      </Text>
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#01DBB7',
        tabBarStyle: {
          height: 50,
          borderColor: 'transparent',
          elevation: 0,
          border: 0,
          backgroundColor: colors.background,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Dahboard"
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

const MyTheme = {
  dark: true,
  colors: {
    background: 'black',
    text: 'white',
    theme: 'DARK',
  },
};

const MyTheme2 = {
  dark: false,
  colors: {
    background: 'white',
    text: 'black',
    theme: 'LIGHT',
  },
};

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const value = isEnabled ? MyTheme : MyTheme2;

  return (
    <NavigationContainer theme={value}>
      <StatusBar hidden />
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: true,
          headerLeft: null,
          title: false,
        }}>
        <Stack.Screen
          name="SplashScreen"
          options={{headerShown: false}}
          component={SplashScreen}
        />
        <Stack.Screen
          name="Dashboard"
          options={{
            headerRight: () => (
              <Switch
                trackColor={{false: 'grey', true: 'grey'}}
                thumbColor={isEnabled ? 'white' : 'black'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            ),
          }}
          component={MyTabs}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cards" component={Cards} />
        <Stack.Screen name="EditExpense" component={EditExpense} />
        <Stack.Screen name="Charts" component={Charts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
