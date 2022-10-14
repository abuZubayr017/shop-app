import React from 'react'

function BasketItem(props) {
  
  const {id , name, price, quantity, removeFromBasket, incrementQuantity, decrementQuantity} = props;
  return (
    <li className='collection-item'>
        {name} x {quantity} = {price * quantity} <b>$</b>
        <span className='secondary-content'>
            <button className='btn-floating btn-add waves-effect blue' onClick={() => incrementQuantity(id)}>
                <i className='material-icons'>add</i>
            </button>
            <button className='btn-floating btn-remove waves-effect red' onClick={() => decrementQuantity(id)}>
                <i className='material-icons'>remove</i>
            </button>
            <i className='material-icons basket-delete' onClick={() => removeFromBasket(id)}>delete_forever</i>
        </span>
    </li>
  )
}

export default BasketItem;