import { useState, useContext } from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './ItemCount.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CartContext from "../../context/Cardcontext";



function ItemCount({stock, initial, onAdd, quantity}) {
  const {setQuantity} = useContext(CartContext)

    const [count, setCount] = useState(initial)

    const AddStock = () => { if(count<stock ) 
     setCount(count +1);
 };
 const RestStock = () => { if(count >0)
    setCount(count - 1);
};
const ProductosAgregados = () => onAdd(count)
setQuantity(count);

  
return (
<div>
<div className="stock">
  
      <button
     onClick={AddStock}>
      <AddIcon/>
      </button>
      <p>{count}</p>
      <button
     onClick={RestStock}>
        <RemoveIcon/>
      </button>
     
     
    </div>
    <button className="addcart" onClick={ProductosAgregados} ><AddShoppingCartIcon/> </button>
    </div>

  );
}
  export default ItemCount;