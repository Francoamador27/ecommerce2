import { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import './ItemListContainer.css';
import { mockProductos } from "../mockProductos";

function ItemListContainer() {
 
const [products, setProducts] = useState([])

const getProductos= ()  =>  new Promise ((resolve, reject) =>{
return setTimeout ( () => { 
  resolve(mockProductos);
},3000 );
});


useEffect( () =>{
  getProductos().then( (data) => {
    setProducts(data)
  } )
}, [] )







  return (
    
        <div className="list">
{products.map( (product) => {
const{id, title, descripcion, talle, price, stock,} = product

  return(
  
<Cards data={product} key={id} />
  ) 
} )}
     </div>
    
  );
}

export default ItemListContainer;
