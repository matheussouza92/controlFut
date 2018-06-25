import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import {Header} from 'react-native-elements';
import CustomSubHeader from "./CustomSubHeader";




export default class CustomHeader extends Component {

    renderCenterComponent() {
        return (
            <View style={styles.container}>
                <Text style={styles.jogo}>Futebol de Domingo</Text>
                <Text style={styles.dataJogo}>24/06 às 08:30h</Text>
            </View>
        );
    }

    render() {
        return (
            <View>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={this.renderCenterComponent()}
                />
                <CustomSubHeader />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 26
    },
    jogo: {
        color: '#fff'
    },
    dataJogo: {
        color: '#fff',
        textAlign: 'center',
        alignItems: 'flex-end'
    }
});