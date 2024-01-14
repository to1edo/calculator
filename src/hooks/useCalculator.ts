import { useState } from "react";

const useCalculator = () => {

  enum operations {
    ADD = '+',
    SUBTRACT = '-',
    MULTIPLY = 'x',
    DIVIDE = '/',
    EMPTY = ''
  }

  const [previousResult, setPreviousResult] = useState('')
  const [result, setResult] = useState('100')
  const [operation, setOperation] = useState<operations>(operations.EMPTY)

  const clean = () => {
    setResult('0')
    setPreviousResult('')
  }

  const deleteChar = () => {
    if (result.length > 1) {
      if(result.includes('-') && result.length === 2) {
        setResult('0')
      }else{
        setResult(result.substring(0, result.length - 1))
      }
    }else{
      setResult('0')
    }
  }

  const addChar = (char: string) => {
    if (result === '0') {
      if (char === '.'){
        setResult('0' + char)
      } else {
        setResult(char)
      }

    } else {
      if (char === '.' && result.includes('.')) return
      setResult(result + char)
    }
  }

  const changeSign = () => {
    if(result === '0') return
    if (result[0] === '-') {
      setResult(result.substring(1))
    } else {
      setResult('-' + result)
    }
  }

  const defineOperation = (operationString: operations) => {
    if (result === '0'){
      setOperation(operationString)
      return
    }

    setPreviousResult(result)
    setOperation(operationString)
    setResult('0')
  }

  const calculate = () => {
    switch (operation) {
      case operations.DIVIDE:
        setResult((Number(previousResult) / Number(result)).toString())
        break
      case operations.MULTIPLY:
        setResult((Number(previousResult) * Number(result)).toString())
        break
      case operations.SUBTRACT:
        setResult((Number(previousResult) - Number(result)).toString())
        break
      case operations.ADD:
        setResult((Number(previousResult) + Number(result)).toString())
        break
    }
  }

  return {
    clean,
    deleteChar,
    addChar,
    changeSign,
    defineOperation,
    calculate,
    operation,
    operations,
    result,
    previousResult
  }
}

export default useCalculator