import React, {Component} from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

/* Redux */
import {saveCoupons} from "../../Store/Actions";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Coupon extends Component {
    render() {
        const {container, logo, description, title, star} = styles;
        const {el} = this.props;
        return (
            <View style={container}>
                <Icon
                    style={star}
                    name={el.active ? "md-star" : "md-star-outline"}
                    size={30}
                    onPress={() => this.props.saveCoupons(el)}
                />
                <Image style={logo} source={{uri: el.download_url}}/>
                <Text style={description}>
                    Описание купона, который можно будет использовать.
                    Автор ({el.author})
                </Text>
                <Text style={title}>{`${el.id}XsX${el.width}`}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF9E0',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        position: 'relative',

        elevation: 3,
        // borderWidth: 1,
        // borderRadius: 2,
        // borderColor: '#ddd',
    },
    logo: {
        width: 50,
        height: 50,
        backgroundColor: '#33b5e5',
        borderRadius: 50,
    },
    description: {
        textAlign: 'center',
        color: "#8A8A8A",
        marginBottom: 10,
        fontSize: 18,
        marginTop: 10,
    },
    title: {
        textAlign: 'center',
        fontSize: 22,
        color: "#212121",
        fontWeight: 'bold',
    },
    star: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
});

const mapStateToProps = (state) => {
    return {
        myCoupons: state.myCoupons,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveCoupons: bindActionCreators(saveCoupons, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Coupon);
