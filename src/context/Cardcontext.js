import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
const [cartProducts, setCartProducts] = useState([])
const [quantity, setQuantity] = useState(1)
console.log('console de quantity desde context',quantity)

const addProductTocart = (product) =>{
let exist = cartProducts.find(carProduct => carProduct.id === product.id)
    
 !exist && setCartProducts(cartProducts => [...cartProducts, product])

}
const deletProduct = (product) => {
   
    setCartProducts(cartProducts.filter((cartProduct)=>{
return cartProduct.id !== product.id    } ))
}

const calculeTotalPrice = ()=>{
    let total = 0
    cartProducts.map((cartProduct) =>{
 total = cartProduct.price + total 
    })

    return total
}
const data = {
    cartProducts,
    addProductTocart,
    deletProduct,
    calculeTotalPrice,
    setQuantity,
    quantity
}

return (
<CartContext.Provider value={data}>
    {children}
</CartContext.Provider>

)
}
export {CartProvider}
export default CartContext