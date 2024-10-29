import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';

const Respuesta = ({ variableA, variableB, variableC, x1, x2 }) => {
  return (
    <View style={styles.container} >
      <Text style={styles.textVar}> a: {variableA}</Text>
      
      <Text style={styles.textVar} >b: {variableB}</Text>
      
      <Text style={styles.textVar} >c: {variableC}</Text>
      

      <Text style={styles.textSol}>La solucion X1: {x1}</Text>
      <Text style={styles.textSol}>La solucion X2: {x2}</Text>
      

      
      </View>
  );
}

export default Respuesta;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'pink',
      justifyContent: 'center',
      borderColor:'red',
      borderRadius:30,
      borderWidth: 2,
      padding: 25,
      alignItems: 'center',
      margin: 5, 
    },
    textVar:{
        fontSize:20,
        margin : 10,
        color :'black',
        
    },
    textSol:{
        fontSize:20,
        margin : 10,
        color :'black',
        fontWeight:'bold'
        
    }
    
  });