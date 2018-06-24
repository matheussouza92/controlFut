import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import { HEADER_ITEMS, ITEMS } from '../persistence/homeitems';

export default class CustomSubHeader extends Component {

    render() {
        console.log('ITEMS', ITEMS)
        return (
            <View style={styles.container}>
                {ITEMS.map((item) => {
                    return (
                        < View style={styles.item} key={item.ordination} >
                            <Text style={styles.itemText}>{item.desc}</Text>
                        </View >)
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: -1,
        height: 500,
        backgroundColor: 'blue',
        alignContent: 'center'
    },
    item: {
        width: 40,
        height: 40,
        backgroundColor: '#666'
    },
    itemText: {
        color: '#aaaaaa',
        textAlign: 'center'
    }
});