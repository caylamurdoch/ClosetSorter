import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native';

class FlowChart extends Component {
    state = {
        'question1': 'Have you worn it in the last six months?',
		'solution1': 'Hang it up!',
        'question2': 'Put it on. Does it fit?',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.question1}</Text>
				<View style={{flexDirection: 'row'}}>
				<Button
					//onPress={onPressLearnMore}
					title="Yes"
					color="#333333"
				/>
				<Button
					//onPress={onPressLearnMore}
					title="No"
					color="#333333"
				/>
				</View>
				<Text>(The end)</Text>
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

export default FlowChart;
