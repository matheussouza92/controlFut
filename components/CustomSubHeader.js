import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import {HEADER_ITEMS, ITEMS} from '../persistence/homeitems';

//const WIDTH_SCREEN = Dimensions.get('screen').width;

export default class CustomSubHeader extends Component {

    renderTopItens () {
        return (
            ITEMS.map((item) => {
                <View style = {styles.item} key = {item.ordination}>
                    <Text style = {styles.itemText}>{item.desc}</Text>
                </View>
            })
        );
    }

    render() {
        console.log('ITEMS', ITEMS)
        return (
            <View style = {styles.container}>
                TopItens={this.renderTopItens()}
            </View> 
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: -1,
        height: 50, 
        backgroundColor: '#CCC',
        alignContent: 'center'
    },
    item: {       
        width: 40,
        height: 40, 
        backgroundColor: '#666'
    },
    item: {   
        flex: 1,    
        width:60,
        height: 60, 
        backgroundColor: '#F0F1F1'
    },
    itemText: {
        color: '#fff', 
        textAlign: 'center'
    }
});