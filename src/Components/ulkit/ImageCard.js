import React from 'react';
import {Image, View, Text, StyleSheet, Modal, TouchableHighlight, ScrollView} from 'react-native';
import {w} from '../../Static/const';

class ImageCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            image: "",
            info: "",
            name: "",
            year: "",
        }
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
        const {data} = this.props;
        this.setState({
            image: data.image,
            info: data.info,
            name: data.name,
            year: data.year
        })
    }

    render() {
        const {container, sub, h1, cover, modal, closeModal, modalText} = styles;
        const {image, info, name, year} = this.state;
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => this.setState({modalVisible: false})}
                >
                    <ScrollView>
                    <View style={modal}>
                        {/*<TouchableHighlight*/}
                            {/*// onPress={() => {*/}
                            {/*//     this.setModalVisible(!this.state.modalVisible);*/}
                            {/*// }}>*/}
                            {/*<Text style={closeModal}>X</Text>*/}
                        {/*// </TouchableHighlight>*/}
                        <View style={sub}>
                            <Image style={cover} source={{uri: image}}/>
                        </View>
                        <Text style={modalText}>{name}</Text>
                        <Text style={modalText}>Year: {year}</Text>
                        <Text style={modalText}>{info}</Text>
                    </View>
                    </ScrollView>
                </Modal>
                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <View style={container}>
                        <View style={sub}>
                            <Image style={cover} source={{uri: this.props.data.image}}/>
                        </View>
                        <Text style={h1}>
                            {this.props.data.name.toUpperCase()}
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: w / 2,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 10,
    },
    sub: {
        shadowColor: '#000',
        borderRadius: 10,
        shadowRadius: 8,
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.4,
    },
    h1: {
        paddingTop: 10,
        fontSize: 14,
        alignSelf: 'center',
        textAlign: 'center'
    },
    cover: {
        width: w / 2.4,
        height: w * 0.63,
        borderRadius: 10
    },
    modal: {
        padding: 20,
    },
    modalText: {
        marginTop: 10,
        fontSize: 15,
    },
    closeModal: {
        // position: 'absolute',
        // zIndex: 20,
        // top: 10,
        // right: 10,
        // fontSize: 20,
    }
});

export {ImageCard};