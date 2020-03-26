import React, { useState } from 'react';
import './App.css';

function App(){

  const [newItem, setNewItem] = useState('')
  const [items, setItems] = useState(['Apples', 'Bananas', 'Cherries', 'Tomatoes', 'Potatoes'])

  let list = items.map(item => <li>{item}</li>)

  return (
    <div className='App'>
      <hi>Shopping list</hi>
      <ol>{list}</ol>
      <div>
        <input onChange={e => setNewItem(e.target.value)}/>
        <button onClick={e => setItems([...items, newItem])/setNewItem('')}>Add</button>
      </div>
    </div>
  )
};

export default App;
