import { useState, useEffect } from "react";
import Cards from "../componentes/Cards/Cards";
import '../componentes/ItemListContainer/ItemListContainer.css';
import Spinner from "../componentes/spinner/spinner";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../firebase/firebase";



function Electro() {
 
const [products, setProducts] = useState([])
const [loading, setLoading] = useState(false)


const getProductos= async ()  =>{ 
  const itemsCollection = query(collection(db, 'produtctos') , where("category", "==", "electro")) 
  const productsSnapshot = await getDocs(itemsCollection)
  console.log('firebase',productsSnapshot)
  
 const productList = productsSnapshot.docs.map((doc) => {
   let product =doc.data()
   product.id = doc.id
   console.log("product", product)
   return product
 })
 console.log('productList',productList)
 return productList

//new Promise ((resolve, reject) =>{
//return setTimeout ( () => { 
  //resolve(mockProductos);
  //setLoading(false)
//},2000 );
};


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

export default Electro;
