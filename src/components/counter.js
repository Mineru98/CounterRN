import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import ActionCreator from '../actions';

class Counter extends Component {
	render() {
		return (
			<View style={{flex: 1, height: '300px'}}>
				<Text style={{height: '50px'}}>{this.props.state.count}</Text>
				<Button onPress={() => this.props.increment()}>
					<Text>Increment</Text>
				</Button>
				<Button onPress={() => this.props.decrement()}>
					<Text>Decrement</Text>
				</Button>
			</View>
		);
	}
}

// Reducer 데이터를 props로 변환
function mapStateToProps(state) {
	return {
		state: state.countReducer
	};
}

// Actions을 props로 변환
function matchDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			increment: ActionCreator.increment,
			decrement: ActionCreator.decrement
		},
		dispatch
	);
}

export default connect(mapStateToProps, matchDispatchToProps)(Counter);