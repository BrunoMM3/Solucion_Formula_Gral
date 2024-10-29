import { StyleSheet, Text, View, TextInput, Button} from 'react-native'
import React,{useState} from 'react'

export default function Form({setVariables}) {

    const [varA, setA] = useState('');
    const [varB, setB] = useState('');
    const [varC, setC] = useState('');

    setVariables(varA,varB,varC)


  return (
    <View style={styles.container}>
      <Text style={styles.titulo} >Solucion a una ecuacion cuadratica</Text>

      <Text style={styles.label}>Dame A:</Text>
        <TextInput 
        style={styles.input} 
        keyboardType='numeric' 
        onChangeText={(text) => setA(text)} 
        
        />
      
      <Text style={styles.label}>Dame B:</Text>
      <TextInput 
      style={styles.input} 
      keyboardType='numeric' 
      onChangeText={(text) => setB(text)}
      
      />

      <Text style={styles.label}>Dame C:</Text>
      <TextInput 
      style={styles.input} 
      keyboardType='numeric' 
      onChangeText={(text) => setC(text)} 
      
      />
      
      
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'aqua',
      borderRadius:30,
      borderWidth: 4, 
      marginTop:40,
      margin:2,
      borderColor:'blue',
      justifyContent: 'center',
      alignItems:'center'
      
    },
    titulo:{
        fontSize:20,
        margin:40,
        marginTop:0
    },
    input: {
        
      borderColor: 'red',
      borderWidth: 1,
      height: 60,
      width: 160,
      borderRadius:35,
      marginBottom: 10,
      marginTop: 10,
      justifyContent: 'center',
      paddingLeft: 10 
    },
    label: {
      marginRight: 10,
      fontSize: 16
    }
  });