import { createContext, useState } from "react";

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
    setTotalPrice(totalPrice + product.total)
    setCartProducts(cartProducts => [...cartProducts, product])
}

}
const deletProduct = (product) => {
    setTotalPrice(totalPrice - product.total)

    setCartProducts(cartProducts.filter((cartProduct)=>{
return cartProduct.id !== product.id    } ))
}

const calculeTotalPrice = ()=>{
    let total = 0
    cartProducts.map((cartProduct) =>{
 total = cartProduct.price
    })

    return total
}
const data = {
    cartProducts,
    addProductTocart,
    deletProduct,
    totalPrice,
    setQuantity,
    quantity,
    

}

return (
<CartContext.Provider value={data}>
    {children}
</CartContext.Provider>

)
}
export {CartProvider}
export default CartContext