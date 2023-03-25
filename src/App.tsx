import { useState } from "react"
import Button from "./components/Button"
import Input from "./components/Input"
import { Container, Content, Row } from "./styles"

function App() {
  const [currentNumber, setCurrentNumber] = useState(' ')
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('')

  const handleOnClear = () => {
    setCurrentNumber(' ')
    setFirstNumber(' ')
    setOperation('')
  }

  const handleAddNumber = (value: string) => {
    setCurrentNumber(prev => `${prev}${value}`)
  }

  const handleSumNumbers = () => {
      setFirstNumber(String(currentNumber))
      setCurrentNumber(' ')
      setOperation('+')
  }

  const handleSubNumbers = () => {
      setFirstNumber(String(currentNumber))
      setCurrentNumber(' ')
      setOperation('-')
  }

  const handleDivNumbers = () => {
      setFirstNumber(String(currentNumber))
      setCurrentNumber(' ')
      setOperation('/')
  }

  const handleMultNumbers = () => {
      setFirstNumber(String(currentNumber))
      setCurrentNumber(' ')
      setOperation('*')
  }

  const handleEquals = () => {

    console.log('firstNumber: ' + firstNumber
     + ' currentNumber: ' + currentNumber 
     + ' operation: ' + operation)

     console.log(firstNumber !== ' ' && currentNumber !== '0' && operation !== '')

    if(firstNumber !== '0' && currentNumber !== '0' && operation !== '') {
      switch(operation) {
        case '+':
          const sum = Number(firstNumber) + Number(currentNumber)
          setCurrentNumber(String(sum))
          break
          case '-':
            const sub = Number(firstNumber) - Number(currentNumber)
            setCurrentNumber(String(sub))
            break
          case '/':
            const div = Number(firstNumber) / Number(currentNumber)
            setCurrentNumber(String(div))
            break
          case '*':
            const mult = Number(firstNumber) * Number(currentNumber)
            setCurrentNumber(String(mult))
            break
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />

        <Row>
          <Button label="*" onClick={handleMultNumbers} />
          <Button label="/" onClick={handleDivNumbers} />
          <Button label="c" onClick={() => handleOnClear()} />
          <Button label="." onClick={() => handleAddNumber('.')} />
        </Row>

        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="-" onClick={handleSubNumbers} />
        </Row>

        <Row>
          <Button  label="4" onClick={() => handleAddNumber('4')} />
          <Button  label="5" onClick={() => handleAddNumber('5')} />
          <Button  label="6" onClick={() => handleAddNumber('6')} />
          <Button  label="+" onClick={handleSumNumbers} />
        </Row>

        <Row>
          <Button  label="1" onClick={() => handleAddNumber('1')} />
          <Button  label="2" onClick={() => handleAddNumber('2')} />
          <Button  label="3" onClick={() => handleAddNumber('3')} />
          <Button  label="=" onClick={handleEquals} />
        </Row>

        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')} />
        </Row>

      </Content>
    </Container>
  )
}

export default App