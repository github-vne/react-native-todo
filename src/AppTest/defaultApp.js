import React from 'react';
import {View, Text, ScrollView, StyleSheet } from 'react-native';
import {Header, ImageCard} from '../Components/ulkit/index';

const url = "https://raw.githubusercontent.com/react-native-village/react-native-init/master/stargate/stargate.json";

export default class App extends React.Component {

    state = {
        title: "Test_App",
        data: [],
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
        const {title, data} = this.state;
        const {container} = styles;
        return (
            <View>
                <Header title={title}/>
                <ScrollView>
                    <View style={container}>
                        {data.map(el => (
                            <ImageCard data={el} key={el.id}/>
                        ))}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    test: {
        marginTop: 50,
    },
    container: {
        marginTop: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexShrink: 2,
        justifyContent: 'space-around',
        marginBottom: 100
    }
});

