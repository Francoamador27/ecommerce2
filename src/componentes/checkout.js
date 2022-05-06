import * as React from 'react';
import { useState, useContext } from 'react'
import { Divider, MenuItem } from "@mui/material";
import CartContext from "../context/Cardcontext";
import './checkout.css';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import db from '../firebase/firebase';
import {addDoc, collection} from 'firebase/firestore'
import Container from '@mui/material/Container';
import validator from 'validator'
import { Link } from 'react-router-dom';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function CheckOut() {

  var fecha = new Date();

  var options = { year: 'numeric', month: 'long', day: 'numeric', hours:'numeric' };
  const datafecha= fecha.toLocaleDateString("es-ES", options)
  var horaOrder = fecha.getHours() 
  var minuto = fecha.getMinutes() 


  // la hora en tu zona horaria actual
  const { cartProducts, deletProduct, totalPrice,removeAll} = useContext(CartContext)
  const [open, setOpen] = React.useState(false);
  const [qProdu, setQProduct] = useState(false)

  const handleOpen = (e) => {
  if(cartProducts.length > 0){
    e.preventDefault()
    setOpen(true);
  }else{
    e.preventDefault()
    setQProduct(true)

    setOpen(true);
  }
}
  const handleClose = () => setOpen(false);
  const  [error, setError] = useState(false);
  const [errorMail, setErrorMail] = useState(false);

  const[formData, setFormData] = useState({
    name: '',
    apellido: '',
    dni:'',
  phone: '',
  repeatemail: '',
  email: ''
  })
  const [orderId, setOrderId] =useState()
  const [successOrder, setSuccesOrder] = useState()
  
  
  const [order, setOrder] = useState (
    {
buyer :formData,
items: cartProducts.map((cartProduct) =>{
  return{
    id:cartProduct.id,
    title: cartProduct.title,
    price: cartProduct.price
  }
}) ,
total: totalPrice ,
fecha: datafecha,
hora: horaOrder
  }
  )
  const handleChange =(e)=>{
setFormData({
  ...formData,
  [e.target.name] : e.target.value
})
  }


const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;


  const handleSubmit =(e) =>{
 

    if(!emailRegex.test(formData.email)){
      e.preventDefault()
      setErrorMail(true)
    
    }else {
      e.preventDefault()
      if(formData.email == formData.repeatemail){
        let prevOrder = {...order, 
          buyer: formData
        }
        e.preventDefault()
        setOrder({...order,
          buyer: formData})
          pushOrder(prevOrder)
    
      }else{
        e.preventDefault()
        setError(true)
      }
    }

    
  }

  const pushOrder =async(prevOrder)=>{
    const oderFrirebase = collection(db,'Ordenes' )
    const orderDoc = await addDoc(oderFrirebase, prevOrder)
    setOrderId(orderDoc.id)
  }
  const newOrder = ()=>{
    setOrderId()
removeAll()    
  }
  return (
   
<div>
<Container className='container-general'>
   <h1>Estos son los productos seleccionados</h1>

            <div className='cart-section'>
                <div className='col-cart-table__head'>
                    <h2>Producto</h2>
                    <h2>Descripcion</h2>
                    <h2>Precio Unitario</h2>
                    <h2>Cantidad</h2>
                    <h2>Quitar</h2>
                </div>
                </div>
                </Container>
{cartProducts.map( (cartProduct) => {
                  return(
                      <section className="sectioncheck" >
     <div className='cart-table__content-img'>
                                 <img className='imgcheckout' src={`./${cartProduct.image}`} /> 
                          </div>
                          <div className='cart-table__content-title'>
                              <h3>{cartProduct.title}</h3>

  
                                 </div>
                                 <div className='cart-table__content-quantity'>
                                   {cartProduct.price}
                                   </div>

                          <div className='cart-table__content-price'>
                          <p> $ {cartProduct.cantidad}</p>
                          <p>Total: $ {cartProduct.total} </p>

                          </div>
                          <button className="deleticon" onClick={()=>deletProduct(cartProduct)}> <DeleteIcon/> </button>

                          <Divider />

                      </section>
                      
                  )
              })}
              <div className='deletAlli'>
                <p>Vaciar Carrito</p>
               <button className="deletAll" onClick={removeAll}> <DeleteIcon/> </button>
               </div>
              <div>
              <div className="grid" >
                  <h3>Total: ${totalPrice}</h3>
                  <div>
      <Button onClick={handleOpen}>Finalizar Compra</Button>
     
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
Finalizar Compra          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
{ qProdu ? (
   <div>
   <h2>No hay productos en el carrito 
     </h2>
   <Link to="/">Ir a comprar</Link>
     </div>
): ( 



orderId ? (
  <div>
<h2>Su compra realizada el dia {datafecha} {horaOrder} hs fue correcta: 
  </h2>
  <p>su numero de orden es {orderId}</p>
  <button onClick={newOrder}>Hacer una nueva compra</button>
  </div>
): (
<form onSubmit={handleSubmit}>
 
 <div  className='inputs'>
 <label>Apellido</label>
 <input name='apellido' type="text" placeholder="Apellido" onChange={handleChange}  value={formData.apellido} required/></div>
<div className='inputs'>
 <label>Nombre</label>
 <input name='name' type="text" placeholder="Nombre" onChange={handleChange} value={formData.name} required/></div>
 <div className='inputs' >
 <label>Dni</label>
 <input name='dni' type="number" placeholder="Dni" onChange={handleChange} value={formData.dni} required/>
 </div>
 <div className='inputs'>
 <label>Telefono</label>
 <input name='phone' type="number" placeholder="telefono" onChange={handleChange} value={formData.phone} required />
 </div>
 <div className='inputs'>
 <label>Email</label>
 <input name='email' type="mail" placeholder='mail' onChange={handleChange}  value={formData.email} required/>
 <label>Repetir Email</label>
 <input name='repeatemail' type="mail" placeholder='mail' onChange={handleChange}  value={formData.repeatemail}  required/>
 </div>
 <Button type="submit" >
     Enviar
   </Button>
   { error ? (
 <p className='errormail'>Los mail no son iguales </p>  
   ): (
     <p></p>
   )}
    { errorMail ? (
 <p className='errormail'>El mail no esta escrito correctamente </p>  
   ): (
     <p></p>
   )}
</form>
)
)}



              </Typography>
             
        </Box>
      </Modal>
    </div>

</div>
     
</div>
</div>
  );
}
export default CheckOut;