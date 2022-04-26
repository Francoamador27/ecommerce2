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
  const { cartProducts, deletProduct, totalPrice} = useContext(CartContext)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
<form>
    <div  className='inputs'>
    <label>Apellido</label>
    <input ></input></div>
   <div className='inputs'>
    <label>Nombre</label>
    <input ></input></div>
    <div className='inputs'>
    <label>Dni</label>
    <input ></input>
    </div>
    <div className='inputs'>
    <label>Email</label>
    <input ></input>
    </div>
</form>

              </Typography>
              <Button variant="contained" color="success">
        Enviar
      </Button>
        </Box>
      </Modal>
    </div>

</div>
     
</div>
</div>
  );
}
export default CheckOut;