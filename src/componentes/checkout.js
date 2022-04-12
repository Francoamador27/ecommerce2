import { Link } from "react-router-dom";
import { useState, useContext } from 'react'
import { Divider, MenuItem } from "@mui/material";
import CartContext from "../context/Cardcontext";
import './checkout.css';



function CheckOut() {
  const { cartProducts, deletProduct, calculeTotalPrice } = useContext(CartContext)

  return (
   
<div>

<h1>Estos son los productos seleccionados</h1>
{cartProducts.map( (cartProduct) => {
                  return(
                      <section className="sectioncheck" >
                          <div >
                              <img className='imgcheckout' src={`./${cartProduct.image}`} /> 
                          </div>
                          <div className=''>
                              <h3>{cartProduct.title}</h3>
                              <p>{cartProduct.descripcion} </p>
                          </div>
                          <div className='pricecheck'>
                          <p>$ {cartProduct.price}</p>

                          </div>
                          <button onClick={()=>deletProduct(cartProduct)}>Delete</button>
                          <Divider />

                      </section>
                      
                  )
              })}
              <p>total</p>
<p>{calculeTotalPrice} </p>
<Link to={'/'}>Volver al inicio </Link>
</div>
  );
}
export default CheckOut;