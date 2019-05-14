import React, {Component} from 'react';
import {Button, Text, View} from "react-native";

export default class Favorites extends Component {
    static navigationOptions = {
        headerStyle: {
            color: 'white',
            textAlign: 'center',
            backgroundColor: '#33b5e5',
        },
        headerTitle: "Сохраненные"
    };
    render() {
        return (
            <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',}}>
                <Text style={{fontSize: 30, color: 'green', marginBottom: 10}}>У вас нет купонов</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Home')}
                    title="Все купоны"
                />
            </View>
        );
    }
}