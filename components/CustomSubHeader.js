import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import { HEADER_ITEMS, ITEMS } from '../persistence/homeitems';
import { Icon } from 'react-native-elements';

//const WIDTH_SCREEN = Dimensions.get('screen').width;

export default class CustomSubHeader extends Component {

    renderTopItens() {
        return (
            ITEMS.map((item) => {
                return (
                    <View style={styles.item} key={item.ordination}>
                        <Icon
                            style={styles.icon}
                            raised
                            name={item.icon}
                            size={13}
                            type='font-awesome'
                            onPress={() => console.log('hello')}
                        />
                        <Text style={styles.itemText}>{item.desc}</Text>
                    </View>
                );
            })
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderTopItens()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: -1,
        height: 60,
        backgroundColor: '#C1E1FA',
        alignContent: 'center'
    },
    icon: {
        alignSelf: 'center',
        alignContent: 'center'
    },
    item: {
        flex: 1,
        width: 60,
        height: 60,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemText: {
        color: '#000',
        textAlign: 'center',
        fontSize: 10
    }
});