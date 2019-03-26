import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Intro extends Component {
    state = {
        'welcome': 'Welcome to the Closet Sorter!',
        'grab': 'Grab one item of clothing...',
        'start': 'Got one? Then start sorting!',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state['welcome']}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    	flex: 1,
    	justifyContent: 'center',
    	alignItems: 'center'
    }
});

export default Intro;
