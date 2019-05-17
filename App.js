/* Module */
import React, {Component} from 'react';
import {View} from 'react-native';
import {createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

/* Redux */
import {ReactReduxContext, Provider} from 'react-redux';
import {createStore} from 'redux'
import reducers from './src/Store/Reducers/index';

/* Components */
import Home from './src/Components/Home';
import Favorites from './src/Components/Favorites';
import MenuDrawer from "./src/Components/MenuDrawer";

/* Const */
export const store = createStore(reducers);
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
    defaultStack
);

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
    Favorites: {screen: FavoritesStackNavigator},
}, DrawerConfig);

const AppContainer = createAppContainer(AppDrawerNavigator);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        );
    }
}