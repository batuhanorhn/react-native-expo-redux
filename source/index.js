import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Store from './reduxStore'
import HomePage from './screens/home';

const Router = createStackNavigator(
  {
    Home: { 
      screen: HomePage
    }
  },
  {
    index: 0,
    initialRouteName: 'Home',
    /** No Header METHOD 1  */
    headerMode: 'none',
    /** No Header METHOD 2  */
     defaultNavigationOptions: {
       // header: () => null,
    },
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
    flex: 1
  }
})