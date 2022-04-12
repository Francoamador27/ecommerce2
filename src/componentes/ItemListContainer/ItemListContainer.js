import { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import './ItemListContainer.css';
import { mockProductos } from "../mockProductos";
import Spinner from "../spinner/spinner";

function ItemListContainer() {
 
const [products, setProducts] = useState([])
const [loading, setLoading] = useState(true)

const getProductos= ()  =>  new Promise ((resolve, reject) =>{
return setTimeout ( () => { 
  resolve(mockProductos);
  setLoading(false)
},2000 );
});


useEffect( () =>{
  getProductos().then( (data) => {
    setProducts(data)
  } )
}, [] )







  return (
    
        <div className="list">
{loading ? (
  <Spinner/>
):(
  products.map( (product) => {
    const{id, title, descripcion, talle, price, stock,} = product
    
      return(
    
    
    <Cards data={product} key={id} />
      ) 
    } )
)}
          

     </div>
    
  );
}

export default ItemListContainer;
