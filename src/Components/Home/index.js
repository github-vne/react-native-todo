import React, {Component} from 'react';
import {Text, ScrollView, StyleSheet, Button, View} from "react-native";

/* Redux */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeCouponsList} from "../../Store/Actions";

/* Module */
import axios from 'axios';

/* Components */
import Coupon from './Coupon';

/* Const */
const url = "https://picsum.photos/v2/list?page=2&limit=10";
// const url = "http://192.168.4.175:3000/get_all_coupons";

class Home extends Component {

    static navigationOptions = {
        headerStyle: {backgroundColor: '#FECC00'},
        headerTintColor: '#000',
        headerTitle: "Купоны",
    };

    componentDidMount() {
        const {data, changeCouponsList} = this.props;
        if (data.length === 0) {
            axios.get(url)
                .then(res => {
                    changeCouponsList(res.data);
                })
                .catch(err => {
                    console.error(err);
                })
        }
    };

    render() {
        const {data} = this.props;
        const {container, button, buttonText} = styles;
        return (
            <ScrollView style={container}>
                {data.map((el, i) => {
                    return (
                        <Coupon
                            active={false}
                            key={i}
                            el={el}
                        />
                    )
                })}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },
});

const mapStateToProps = (state) => {
    return {
        data: state.data,
        myCoupons: state.myCoupons,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeCouponsList: bindActionCreators(changeCouponsList, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);