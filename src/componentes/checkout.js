import { Link } from "react-router-dom";
import { useState, useContext } from 'react'
import { Divider, MenuItem } from "@mui/material";
import CartContext from "../context/Cardcontext";
import './checkout.css';
import DeleteIcon from '@mui/icons-material/Delete';




function CheckOut() {
  const { cartProducts, deletProduct, totalPrice} = useContext(CartContext)

  return (
   
<div>

<h1>Estos son los productos seleccionados</h1>
{cartProducts.map( (cartProduct) => {
                  return(
                      <section className="sectioncheck" >
                          <div className="one" >
                              <img className='imgcheckout' src={`./${cartProduct.image}`} /> 
                          </div>
                          <div className='two'>
                              <h3>{cartProduct.title}</h3>
                              <p>Cantidad seleccionada :{cartProduct.descripcion} </p><p>{cartProduct.cantidad}</p>
                          </div>
                          <div className='pricecheck'>
                          <p> $ {cartProduct.price}</p>
                          <p>Total: $ {cartProduct.total} </p>

                          </div>
                          <button className="deleticon" onClick={()=>deletProduct(cartProduct)}> <DeleteIcon/> </button>

                          <Divider />

                      </section>
                      
                  )
              })}
              <div>
              <div className="grid" >
                  <h3>Total: ${totalPrice}</h3>
                  <button>Finalizar compra</button>

</div>
     
</div>
</div>
  );
}
export default CheckOut;