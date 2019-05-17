import React, {Component} from 'react';
import {Button, Text, View, ScrollView, StyleSheet} from "react-native";

/* Redux */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeCouponsList} from "../../Store/Actions";

/* Components */
import Coupon from '../Home/Coupon';

class Favorites extends Component {

    static navigationOptions = {
        headerStyle: {backgroundColor: '#33b5e5'},
        headerTintColor: '#fff',
        headerTitle: "Сохраненные",
    };

    render() {
        const {myCoupons} = this.props;
        const {container} = styles;
        return (
            <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',}}>
                {myCoupons.length === 0 ?
                    <View>
                        <Text style={{fontSize: 30, color: 'green', marginBottom: 10}}>У вас нет купонов</Text>
                        <Button
                            onPress={() => this.props.navigation.navigate('Home')}
                            title="Все купоны"
                        />
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
        padding: 20,
        paddingBottom: 40,
        marginBottom: 40,
    },
});

const mapStateToProps = (state) => {
    return {
        myCoupons: state.myCoupons,
    };
};

export default connect(mapStateToProps)(Favorites);