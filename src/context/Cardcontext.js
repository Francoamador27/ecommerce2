import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
const [cartProducts, setCartProducts] = useState([])
const [quantity, setQuantity] = useState(1)
const [totalPrice, setTotalPrice] = useState(0)
const [totalProductos, setTotalProductos] = useState(0)

const addProductTocart = (product) =>{
let exist = cartProducts.find(carProduct => carProduct.id === product.id)
if(!exist) { 
      
    // setTotalPrice(totalPrice + product.price * product.quantity) 
    setTotalPrice(product.price * product.cantidad + totalPrice)
    setCartProducts(cartProducts => [...cartProducts, product])
}

}

useEffect(() => {
    setTotalPrice(
        cartProducts.reduce(
            (acc, cartProduct) => (acc = acc + cartProduct.total),
            0
        )
    )
},[cartProducts])


const deletProduct = (product) => {
    setTotalPrice(totalPrice - product.total)

    setCartProducts(cartProducts.filter((cartProduct)=>{
return cartProduct.id !== product.id    } ))
}

    
    
    
const data = {
    cartProducts,
    addProductTocart,
    deletProduct,
    totalPrice,
    setQuantity
    
}

return (
<CartContext.Provider value={data}>
    {children}
</CartContext.Provider>

)
}
export {CartProvider}
export default CartContext