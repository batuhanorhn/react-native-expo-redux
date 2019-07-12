import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Store from './reduxStore'
import HomePage from './pages/home';

const Router = createStackNavigator(
  {
    Home: { 
      screen: HomePage
    }
  },
  {
    index: 0,
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      header: null,
    }
  }
);

const AppContainer = createAppContainer(Router);

export default (props) => {
  return (
    <View style={styles.flex}>
      <Provider store={Store}>
        <AppContainer screenProps={props} />
      </Provider>
    </View>
  )
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor:'red'
  }
})