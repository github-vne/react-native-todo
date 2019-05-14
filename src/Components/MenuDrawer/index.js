import React, {Component} from 'react';
import {
    Platform, StyleSheet, View, Text, TouchableOpacity, Image
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';


export default class MenuDrawer extends Component {

    navLink(nav, text) {
        return (
            <TouchableOpacity
                style={{height: 50}}
                onPress={() => this.props.navigation.navigate(nav)}
            >
                <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        const {logo, container, topLinks, bottomLinks} = styles;
        return (
            <View style={container}>
                <View style={topLinks}>
                    <Icon
                        style={{
                            marginRight: 20,
                        }}
                        name="md-close"
                        size={30}
                        onPress={() => this.props.navigation.closeDrawer()}
                    />
                    <Image style={logo} source={{uri: 'https://picsum.photos/id/1006/3000/2000'}}/>
                </View>
                <View style={bottomLinks}>
                    {this.navLink('Home','Все купоны')}
                    {this.navLink('Favorites','Сохраненные')}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
    },
    topLinks: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        paddingTop: 30,
        paddingBottom: 20,
        backgroundColor: '#33b5e5',
    },
    logo: {
        width: 100,
        height: 30,
    },
    bottomLinks: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 450,
    },
    link: {
        flex: 1,
        fontSize: 20,
        padding: 6,
        paddingLeft: 14,
        marginBottom: 5,
        textAlign: 'left'
    }
});