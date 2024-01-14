import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props {
  text: string,
  colorButton?: string,
  customStyles?: object,
  action: ( char?: string)=>void
}
const ButtonCalculator = ({text, colorButton, customStyles, action}:Props) => {
  return (
    <TouchableOpacity
      onPress={()=> action(text)}
      activeOpacity={0.7}
    >
      <View style={{backgroundColor: colorButton || '#3b3d3b' , ...styles.button , ...customStyles}}>
            <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ButtonCalculator