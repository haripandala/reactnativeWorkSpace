//import libraries for making a component
import React, { Component } from 'react';
import { Text, View } from 'react-native';

// Make a component
export default class Header extends Component {
    render() {
        return (<View style={styles.Header}>
                    <Text style={{ fontSize: 20 }}>{ this.props.headerText }</Text>
                </View>);
    }
}
const styles = {
    Header: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
        backgroundColor: '#F8F8F8'
    },
};
