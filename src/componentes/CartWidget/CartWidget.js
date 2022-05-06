import { useState, useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import CartContext from '../../context/Cardcontext';
import { Badge, ButtonBase } from '@mui/material';
import './CartWidget.css';


function CartWidget() {
  const { cartProducts, deletProduct,removeAll } = useContext(CartContext)
  const [anchorEl, setAnchorEl] = useState(null);
  const [openScroll, setOpenScroll] = useState(true)
  const open = Boolean(anchorEl);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
const Open =()=>{
    if (cartProducts.length > 5){
        setOpenScroll(false)
      }else {
        setOpenScroll(true)
      }
}
  
  return (
      <div className='cart-button'>
        <Badge badgeContent={cartProducts.length} color="primary" showZero>
          <ShoppingCartIcon 
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              className="shoppingCart"
          />
          </Badge>
          <Menu
              anchorEl={anchorEl}
              id="account-menu"
              className='cart-modal'
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
              elevation: 0,
              sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                  },
                  '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                  },
                  },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
              <p className='cart'>Tu Carrito</p>
              <Divider />
              {cartProducts.map( (cartProduct) => {
                  return(
                      
                      <MenuItem className=  'item-cart-modal overflow' key={cartProduct.id}>
                          <div className='item-cart-modal__img'>
                              <img className='cartimage' src={`../${cartProduct.image}`} /> 
                          </div>
                          <div className='item-cart-modal__info'>
                              <p>{cartProduct.title}</p>
                              <span>$ {cartProduct.price}</span>
                              <p>cantidad {cartProduct.cantidad} </p>
                          </div>
                          <div className='item-cart-modal__action'>
                              <DeleteIcon className="deleti" onClick={()=>deletProduct(cartProduct)} />
                          </div>
                      </MenuItem>
                  )
              })}
              
              <Divider />
              <div className='footer-modal-cart'>
                  <Button onClick={removeAll}><DeleteIcon/> </Button>
                  <Button className="btn-custom"><Link className='btn-custom' to="/Checkout">Iniciar la compra</Link></Button>
              </div>
          </Menu>
      </div>
  )
}

export default CartWidget;