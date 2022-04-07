import { useState, useContext,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './Cards.css';
import CartContext from '../../context/Cardcontext';


function Cards({data}) {
  

const navigate = useNavigate();
  const{id, title, descripcion, talle, price, stock, image} = data
const {cartProducts, addProductTocart} = useContext(CartContext)
  const onAdd = (count) => {
    const total = count * price;
  };
  const changePage = () => {
navigate(`/Productos/${id}`)
  }

  useEffect(() => {
    console.log("cartProducts:", cartProducts)
  }, []);

const addToCart = (e) => {
  e.stopPropagation()
  addProductTocart(data)
}
  return (
    <div className='cards' onClick={changePage} >
  <img className='imgcard' src={`./${image}`} alt={image} />
  <h3>{title} </h3>
  <p className='pricecard'>${price} </p>
  <button className='cart' onClick={addToCart} ><ItemCount   stock={stock} initial={1} onAdd={onAdd} />
</button>

  
    </div>
  );
}

export default Cards;