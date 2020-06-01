import React, {useState} from 'react';
import './App.css'

function Items(props){
  // const handleMove = props.handleMove()

  const [quantity, setQuantity] = useState(1)

  const handleIncrease = () => {
    setQuantity(quantity+1)
  };

  const handleDecrease = () => {
    setQuantity(quantity-1)
  };

  return(
    <div className='item'>
      <li 
        className='item' 
        cursor='pointer' 
        // onMouseDown={() => props.setGrabbed(props.Key)} 
        // onMouseUp={() => props.setGrabbed(null)}
        // onMouseOver={() => handleMove(props.Key)}
      >
        {props.Items[props.Key]}
      </li>
      <button onClick={() => handleDecrease()}>-</button>
      <input className='quantity' value={quantity} readOnly/>
      <button onClick={() => handleIncrease(props.Key)}>+</button>
      <button style={{margin: '5px'}} onClick={() => props.deleteItem(props.Key)}>remove</button>
    </div>
  )
};

export default Items;