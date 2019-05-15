import React, {Component} from 'react';
import {Button, Text, View, ScrollView, StyleSheet} from "react-native";

/* Module */
import axios from 'axios';

/* Components */
import Coupon from './Coupon';

/* Const */
const url = "https://picsum.photos/v2/list?page=2&limit=10";
// const url = "/get_all_coupons";

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

    componentDidMount() {
        axios.get(url)
            .then(res => {
                console.info(res.data);
                this.setState({data: res.data});
            })
            .catch(err => {
                console.error(err);
            })
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