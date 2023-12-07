import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import { todos } from './type/type';

const App:React.FC = ()=> {
  const [count, setCount] = useState<number>(0)
  const [inputValue, setInputValue] = useState<string>('')
  const [todoArr, setTodoArr] = useState<todos[]>([])
  return (
   <>

   <Counter inputValue={inputValue} setInputValue={setInputValue} todoArr={todoArr} setTodoArr={setTodoArr}/> 
   
   </>
  );
}

export default App;
