import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import {Header} from 'react-native-elements';




export default class CustomHeader extends Component {

    renderCenterComponent = () => {

        return (
            <View style = {{marginTop: 26}}>
                <Text style = {{ color: '#fff' }}>Futebol de Domingo</Text>
                <Text style = {{ color: '#fff', textAlign: 'center' }}>24/06 às 08:30h</Text>
            </View>
        );
    }

    render() {
        return (
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={this.renderCenterComponent()}
            />
            
        );
    }
}


//<View style = {}></View>

//{ text: 'Futebol de Domingo', style: { color: '#fff' }}