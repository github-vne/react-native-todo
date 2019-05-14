import React, {Component} from 'react';
import {Button, Text, View, ScrollView, StyleSheet} from "react-native";

/* Components */
import Coupon from './Coupon';

const url = "https://picsum.photos/v2/list?page=2&limit=10";

export default class Home extends Component {

    state = {
        data: [],
    };

    static navigationOptions = {
        headerStyle: {
            color: 'white',
            textAlign: 'center',
            backgroundColor: '#33b5e5',
        },
        headerTitle: "Купоны"
    };

    componentDidMount = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            this.setState({data});
        } catch (e) {
            throw e;
        }
    };

    render() {
        const {data} = this.state;
        const {container} = styles;
        return (
            <ScrollView style={container}>
                {data.map((el, i) => <Coupon key={i} el={el}/>)}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 40,
        marginBottom: 40,
    },

});