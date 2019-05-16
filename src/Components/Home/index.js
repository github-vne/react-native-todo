import React, {Component} from 'react';
import {Button, Text, View, ScrollView, StyleSheet} from "react-native";

/* Redux */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {saveCoupons} from "../../Store/Actions";

/* Module */
import axios from 'axios';

/* Components */
import Coupon from './Coupon';

/* Const */
const url = "https://picsum.photos/v2/list?page=2&limit=10";

// const url = "/get_all_coupons";

class Home extends Component {

    static navigationOptions = {
        headerStyle: {
            color: 'white',
            textAlign: 'center',
            backgroundColor: '#33b5e5',
        },
        headerTitle: "Купоны"
    };

    componentDidMount() {
        const {data} = this.props;
        if (data.length === 0) {
            axios.get(url)
                .then(res => {
                    this.props.saveCoupons(res.data);
                })
                .catch(err => {
                    console.error(err);
                })
        }

    };

    render() {
        const {data} = this.props;
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

const mapStateToProps = (state) => {
    return {
        data: state.data,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveCoupons: bindActionCreators(saveCoupons, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);