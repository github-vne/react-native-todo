import React from 'react'
import { View, Text} from 'react-native'

import HomeScreen from './src/Navigation/HomeScreen';
import SettingsScreen from './src/Navigation/SettingsScreen';

export default class App extends React.Component {
    render() {
        return (
            <HomeScreen/>
        );
    }
}


