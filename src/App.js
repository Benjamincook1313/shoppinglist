import React, { useState } from 'react';
import './App.css';
import Items from './Items';

function App(){

  const [newItem, setNewItem] = useState('')
  const [items, setItems] = useState(['Apples', 'Bananas', 'Cherries', 'Tomatoes', 'Potatoes'])
  const [grabbed, setGrabbed] = useState(null)

  const handleMove = (i) => {
    let newOrder = [...items]
    let temp = newOrder[i]
    if(grabbed){
      newOrder[i] = newOrder[grabbed]
      newOrder[grabbed] = temp
      setGrabbed(i)
      setItems(newOrder)
    }
  };

  const deleteItem = (i) => {
    const newList = [...items]
    newList.splice(i, 1)
    setItems(newList)
  };

  let list = items.map((item, i) => 
    <div key={i}>
      <Items 
        deleteItem={() => deleteItem(i)}
        handleMove={() => handleMove(i)} 
        setGrabbed={() => setGrabbed(i)} 
        Items={items} 
        Key={i}/>
    </div>
  )

  // console.log(grabbed)

  return (
    <div className='App'>
      <h1>Shopping list</h1>
      <ol>{list}</ol>
      <div>
        <input value={newItem} onChange={e => setNewItem(e.target.value)}/>
        <button onClick={e => setItems([...items, newItem])/setNewItem('')}>Add</button>
      </div>
    </div>
  )
};

export default App;
