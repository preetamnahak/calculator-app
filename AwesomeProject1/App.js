import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
const math = require('mathjs')

export default class App extends React.Component {
   constructor(){
   	super()
   	this.state = {
   		resultText: "",
   		finalAns: ""
   	}
   }

   calculateResult(){
   	const text = this.state.resultText
   	console.log( )
   	let temp = math.eval(text)
   	this.setState({
   		finalAns: temp
   	})
   }

   buttonPressed(text){
   		console.log(text);
   		if( text == "="){
   			let lastChar = this.state.resultText.slice(-1)
   			if(operations.indexOf(lastChar) != -1) return
   			return this.calculateResult()
   		}
   		else 
   		if(text == "0" || text == "."){
   			if(this.state.resultText == "")
   				return
   		}
   		let lastChar = this.state.resultText.slice(-1)
   		if(lastChar == "." && text == ".") return
   		this.setState({
   			resultText:this.state.resultText + text
   		})
   }

   operate(operator){

   		// switch(operator){
   		// 	case 'DEL':
   		// 		let temp = this.state.resultText;
	   	// 		temp = temp.slice(0,-1);
	   	// 		this.setState({
	   	// 			resultText: temp
	   	// 		})

	   	// 	case '+':
	   	// 	case '-':
	   	// 	case '*':
	   	// 	case '/':
	   			// if(this.state.resultText == "") return
	   			// this.setState({
		   		// 	resultText:this.state.resultText + operator
		   		// })
	   			
   		// }
   		if(operator == 'DEL'){
   			let temp = this.state.resultText;
	   		temp = temp.slice(0,-1);
	   		this.setState({
	   			resultText: temp,
	   			finalAns: ""
	 		})
   		}
   		else{

   			let lastChar = this.state.resultText.slice(-1)
   			if(operations.indexOf(lastChar) != -1) return
   			if(this.state.resultText == "") return
	   			this.setState({
		   			resultText:this.state.resultText + operator
		   	})
   		}
   }

   render() {

   	let rows = []
   	let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [".", 0, "="]]
   	for(let i = 0; i < 4; i++){
   		let row = []
   		for(let j = 0; j < 3; j++){

   			row.push(<TouchableOpacity onPress = {() => this.buttonPressed(nums[i][j])} style = {style.btn}>
  							<Text style = {[style.btnText, style.white]}>{nums[i][j]}</Text>
  						</TouchableOpacity>)
   		}
   		rows.push(<View style = {style.row}>{row}</View>)
   	}

   	operations = ["DEL", "+", "-", "*", "/"]
   	let ops = []
   	for(let i = 0; i < 5; i++){

   		ops.push(<TouchableOpacity onPress = {() => this.operate(operations[i])} style = {style.btn}>
  							<Text style = {style.btnText, style.white}>{operations[i]}</Text>
  						</TouchableOpacity>)

   	}

      return (
         <View style = {style.container}>
  			<View style = {style.result}>
  				<Text style = {style.resultText}>{this.state.resultText}</Text>
  			</View>
  			<View style = {style.calculation}>
  				<Text style = {style.calculationText}>{this.state.finalAns}</Text>
  			</View>
  			<View style = {style.buttons}>
  				<View style = {style.numbers}>
  					{rows}
  				</View>
  				<View style = {style.operations}>
  						{ops}
  				</View>
  			</View>
     	</View>
      );
   }
}

const style = StyleSheet.create({
	container : {
		flex: 1,
	},
	btnText : {
		fontSize: 30
	},
	white: {
		color: 'white',
		fontSize: 30
	},
	btn: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'stretch'
	},
	row:{
		flexDirection: 'row',
		flex:1,
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	result: {
		flex : 2,
		backgroundColor: 'white',
    color: 'black',
		alignItems: 'flex-end',
		justifyContent: 'center'
	},
	calculation : {
		flex : 1,
		backgroundColor: 'white',
    color: 'black',
		alignItems: 'flex-end',
		justifyContent: 'center'
	},

	buttons : {
		flex: 7,
		flexDirection:'row',

	},
	numbers:{
		flex: 3,
		backgroundColor: '#454246',
    color: 'white'
	},
	operations: {
		flex : 1,
		backgroundColor: '#656265',
    color: 'white',
		justifyContent: 'space-around'
	},
	resultText : {
		fontSize: 50,
		padding: 10
	},
	calculationText : {
		fontSize: 40,
		padding: 10
	}

})