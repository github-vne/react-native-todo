import React, {Component} from 'react';
import {Button, Text, View, ScrollView, StyleSheet, TouchableHighlight} from "react-native";

/* Redux */
import {connect} from 'react-redux';

/* Components */
import Coupon from '../Home/Coupon';

class Favorites extends Component {

    static navigationOptions = {
        headerStyle: {backgroundColor: '#FECC00'},
        headerTintColor: '#000',
        headerTitle: "Сохраненные",
    };

    render() {
        const {myCoupons} = this.props;
        const {container, button, buttonText, redirectBox} = styles;
        return (
            <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',}}>
                {myCoupons.length === 0 ?
                    <View style={redirectBox}>
                        <Text style={{fontSize: 30, marginBottom: 20}}>У вас нет купонов</Text>
                        <TouchableHighlight
                            style={button}
                            onPress={() => this.props.navigation.navigate('Home')}
                        >
                            <Text style={buttonText}>ПОЛУЧИТЬ</Text>
                        </TouchableHighlight>
                    </View>
                    :
                    <ScrollView style={container}>
                    {myCoupons.map((el, i) => {
                        return (
                            <Coupon
                                active={false}
                                key={i}
                                el={el}
                            />
                        )
                    })}
                    </ScrollView>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },
    redirectBox:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#FECC00',
        width: 130,
        borderRadius: 5,
    },
    buttonText: {
        color: '#212121',
        fontSize: 20,
    }
});

const mapStateToProps = (state) => {
    return {
        myCoupons: state.myCoupons,
    };
};

export default connect(mapStateToProps)(Favorites);