import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Store from './reduxStore';
import HomePage from './screens/home';


const Stack = createStackNavigator();

export default function (){
  return (
    <View style={styles.flex}>
      <Provider store={Store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={HomePage} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1
  }
});
