import { useState, useContext,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './Cards.css';
import CartContext from '../../context/Cardcontext';


function Cards({data}) {
  

const navigate = useNavigate();
  const{id, title, descripcion, talle, price, stock, image} = data
const {cartProducts, addProductTocart,setQuantity} = useContext(CartContext)
  const [cantidad, setCantidad] = useState(1)
data.cantidad= cantidad;
const [total, setTotal] = useState(data.price)
data.total = total
const onAdd = (count) => {
  if (count > 0 ){
    addProductTocart(data)
setCantidad(count)
setTotal(count * data.price)
  }
    
};
  const changePage = () => {
navigate(`/Productos/${id}`)
  }

  useEffect(() => {
    console.log("cartProducts:", cartProducts)
  }, []);

const addToCart = (e) => {
  e.stopPropagation()
}
  return (
    <div className='cards' onClick={changePage} >
  <img className='imgcard' src={`./${image}`} alt={image} />
  <h3>{title} </h3>
  <p className='pricecard'>${price} </p>
  <div className='cart' onClick={addToCart} ><ItemCount   stock={stock} initial={1} onAdd={onAdd}  />
</div>

  
    </div>
  );
}

export default Cards;