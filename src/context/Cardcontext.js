import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
const [cartProducts, setCartProducts] = useState([])

const addProductTocart = (product) =>{
setCartProducts(cartProducts => [...cartProducts, product])
console.log('productos agregados al carrito', cartProducts)

}

const data = {
    cartProducts,
    addProductTocart
}

return (
<CartContext.Provider value={data}>
    {children}
</CartContext.Provider>

)
}
export {CartProvider}
export default CartContext