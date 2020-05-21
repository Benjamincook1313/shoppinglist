import React, {useState} from 'react';

function Items(props){

  const handleMove = props.handleMove()

  const [quantity, setQuantity] = useState('1')

  return(
    <div>
      <li 
        className='item' 
        key={i} 
        cursor='pointer' 
        onMouseDown={() => setGrabbed(i)} 
        onMouseUp={() => setGrabbed(null)}
        onMouseOver={() => handleMove(i)}
      >
        {item}
      </li>
      <button onClick={() => handleDecrease(i)}>-</button>
      <input className='quantity' type='num' />
      <button onClick={() => handleIncrease(i)}>+</button>
      <button style={{margin: '5px'}} className='deleteItem'>x</button>
    </div>
  )
};

export default Items;