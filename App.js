import { useState } from 'react';
import './App.css';
import Form from './components/form';
import Header from './components/header';
import Display from './components/display';

function App() {
  const [result, setResult] = useState('')

  const updateResult = r => {
    setResult(r)
  }
  return (
    <div className= "App">
     <Header title= " Calculando o IMC" />
     <div className = "Body"> 
     <Form handleResult={updateResult} />
     <Display imc = {result} />
  
    </div>
    </div>
  )
}

export default App;
