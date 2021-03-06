import { Description } from "@mui/icons-material";
import { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import Cards from "../Cards/Cards";
import { mockProductos } from "../mockProductos";
import './Itema.css';
import {Navigate, useNavigate, useParams} from 'react-router-dom'
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import CartContext from "../../context/Cardcontext";
import {doc, getDoc} from "firebase/firestore";
import db from "../../firebase/firebase";

const ItemDetail = () => {
 const {id} = useParams()
 const [product, setProduct] = useState({})
 const navigate = useNavigate()
 const [click, setClick] = useState(true);
 const {cartProducts, addProductTocart} = useContext(CartContext)
const [cantidad, setCantidad] = useState(1)
product.cantidad= cantidad;
const [total, setTotal] = useState(product.price)
product.total = total

const getProduct = async() => { 
const docRef = doc(db, "produtctos", id)
const docSnap = await getDoc(docRef);
if(docSnap.exists()){
console.log("document data:", docSnap.data() );
let product = docSnap.data()
product.id = docSnap.id
setProduct(product)
}else{
  navigate('/error404')
}

}

useEffect( () => {
  getProduct()

},[id])



const onAdd = (count) => {
  const total = count * product.price;
  if (count > 0 ){
    setClick(!click)
    addProductTocart(product)
    setCantidad(count)
    setTotal(count * product.price)


  }
    
};


  return (
    
    <div className="itemdetail" key={id}>
   <h1 className="titleitemdetail">{product.title} </h1>
    <div className="contentitem" >
        <img className="imagendetail" src={`../${product.image} `}  />
   <div> 
     <div className="tallestock">
    <p>Tamaño de pantalla: {product.talle} </p>
    <p>Stock disponible:  {product.stock} </p>
    </div>
    <div className="">
    <p className="precioitem">${product.price} <span className="price">  </span></p>

   { click ? (
 <div className="itemcount">    <ItemCount   stock={product.stock} initial={1} onAdd={onAdd} /> </div>  
   ): (
     <div className="checkout">
       <p className="pcheck"> Ir al Check Out </p>
       <div className="d-flex"> 
    <Link to={'/Checkout'}> <Button className="botones">CkeckOut</Button></Link>
    <Link to={'/'}> <Button className="botones" >Volver al inicio</Button></Link>
    </div>

    </div>
   )}

</div>
    </div>
    </div>
    <div className="d-flex justify-content-evenly">

    </div>
    <h2 className="hdescripcion container"> Descripcion   </h2>
    <p className="descripcion">{product.descripcion} </p>

    </div>
    
  );
}

export default ItemDetail;