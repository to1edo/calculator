import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import ButtonCalculator from '../components/ButtonCalculator'
import useCalculator from '../hooks/useCalculator'

const CalculatorScreen = () => {

  const { result, previousResult, operation, operations, addChar, clean, deleteChar, changeSign, defineOperation, calculate } = useCalculator()

  return (
    <View style={styles.calculatorContainer}>

      <Text style={styles.smallResult}>{previousResult}</Text>
      <Text style={styles.smallResult}>{previousResult && operation}</Text>
      <Text style={styles.result}>{result}</Text>

      <View style={styles.rowsButton}>

        {/* buttons */}

        <ButtonCalculator text="C" action={clean} colorButton="#9d9d9d"/>
        <ButtonCalculator text="±" action={changeSign} colorButton="#9d9d9d"/>
        <ButtonCalculator text="⌫" action={deleteChar} colorButton="#9d9d9d"/>
        <ButtonCalculator text="/" action={() => defineOperation(operations.DIVIDE)} colorButton="#FF9427" />

        <ButtonCalculator text="7" action={() => addChar('7')}/>
        <ButtonCalculator text="8" action={() => addChar('8')}/>
        <ButtonCalculator text="9" action={() => addChar('9')}/>
        <ButtonCalculator text="x" colorButton="#FF9427" action={() => defineOperation(operations.MULTIPLY)}/>

        <ButtonCalculator text="4" action={() => addChar('4')}/>
        <ButtonCalculator text="5" action={() => addChar('5')}/>
        <ButtonCalculator text="6" action={() => addChar('6')}/>
        <ButtonCalculator text="-" action={() => defineOperation(operations.SUBTRACT)} colorButton="#FF9427"/>

        <ButtonCalculator text="1" action={() => addChar('1')} colorButton=""/>
        <ButtonCalculator text="2" action={() => addChar('2')}/>
        <ButtonCalculator text="3" action={() => addChar('3')}/>
        <ButtonCalculator text="+" action={() => defineOperation(operations.ADD)} colorButton="#FF9427"/>

        <ButtonCalculator text="0" action={() => addChar('0')} customStyles={{width: 180}}/>
        <ButtonCalculator text="." action={() => addChar('.')}/>
        <ButtonCalculator text="=" action={calculate} colorButton="#FF9427"/>

      </View>
    </View>
  )
}

export default CalculatorScreen