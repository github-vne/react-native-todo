/* Module */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, ScrollView} from 'react-native';
import {createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

/* Components */
import Home from './src/Components/Home';
import Favorites from './src/Components/Favorites';
import MenuDrawer from "./src/Components/MenuDrawer";

/* Const */
const defaultStack = {
    defaultNavigationOptions: ({navigation}) => {
        return {
            headerLeft: (
                <Icon
                    style={{paddingLeft: 10}}
                    name="md-menu"
                    size={30}
                    onPress={() => navigation.openDrawer()}
                />
            )
        }
    }
};

const HomeStackNavigator = createStackNavigator(
    {Home: Home},
    defaultStack);

const FavoritesStackNavigator = createStackNavigator(
    {Favorites: Favorites},
    defaultStack
);

const DrawerConfig = {
    // drawerWidth: WIDTH*0.83,
    unmountInactiveRoutes: true,
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#fff',
        }
    },
    contentComponent: ({navigation}) => {
        return <MenuDrawer navigation={navigation}/>
    }
};

const AppDrawerNavigator = createDrawerNavigator({
    Home: {screen: HomeStackNavigator},
    Favorites: {screen: FavoritesStackNavigator}
}, DrawerConfig);

const AppContainer = createAppContainer(AppDrawerNavigator);

export default class App extends Component {
    render() {
        return <AppContainer/>;
    }
}