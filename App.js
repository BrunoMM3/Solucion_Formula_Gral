import React,{useState} from 'react';
import { StyleSheet, Text, View ,TextInput, Button, ToastAndroid,TouchableOpacity} from 'react-native';
import Form from './src/components/Form'
import Respuesta from './src/components/Respuesta';

export default function App() {
  
  const [A, setA] = useState('');
  const [B, setB] = useState('');
  const [C, setC] = useState('');
  const [X1, setX1] = useState('')
  const [X2, setX2] = useState('')

  function Solucion() {
    const variableA = parseFloat(A)
    const variableB = parseFloat(B)
    const variableC = parseFloat(C)


    const discriminante = variableB * variableB - 4 * variableA * variableC;
    
    if (discriminante >= 0) {
      const sqrtD = Math.sqrt(discriminante);
      const x1 = (-variableB + sqrtD) / (2 * variableA);
      const x2 = (-variableB - sqrtD) / (2 * variableA);
      setX1(x1.toFixed(2))
      setX2(x2.toFixed(2))
      
    } else {
      
      ToastAndroid.show('No tiene soluciones reales', ToastAndroid.SHORT);
      setX1('No real')
      setX2('No real')
    }

  }

  function setVariables(varA,varB,varC){
    setA(varA)
    setB(varB)
    setC(varC)
  }
  return (
    <>
    <View style={styles.container}>
      

      <Form setVariables={setVariables} />

      
    </View>
    <View style={styles.container2}> 
      <Respuesta  variableA={A} variableB={B} variableC={C} x1={X1} x2={X2} />
    </View>
    <View style={styles.container3}>
    <TouchableOpacity style={styles.button} onPress={Solucion}>
          <Text>Calcular</Text>
    </TouchableOpacity>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1.6,
    margin: 5,
    justifyContent: 'center',
  },
  container2: {
    flex: 0.8,
    marginTop:5,
    marginEnd:0,

    backgroundColor: 'white',
    justifyContent: 'center',
  },
  container3: {
    flex: 0.3,
    borderRadius:30,
    borderColor:'green',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
  },button: {
    alignItems: 'center',
    backgroundColor: '#395',
    justifyContent:'center',
    padding: 10,
    margin:20,
    width:200,
    height:60,
    borderRadius:30,
    marginTop:20
  }
});
