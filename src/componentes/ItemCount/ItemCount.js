import { useState } from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './ItemCount.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
function ItemCount({stock, initial, onAdd}) {
    const [count, setCount] = useState(initial)

    const AddStock = () => { if(count<stock ) 
     setCount(count +1);
 };
 const RestStock = () => { if(count >0)
    setCount(count - 1);
};
const ProductosAgregados = () => onAdd(count);

  
return (
<div>
<div className="stock">
  
<button
     onClick={RestStock}>
        <RemoveIcon/>
      </button>
      <p>  {count}</p>
      <button
     onClick={AddStock}>
      <AddIcon/>
      </button>
   
      
     
     
    </div>
    <button className="addcart" onClick={ProductosAgregados} ><AddShoppingCartIcon/> </button>
    </div>

  );
}
  export default ItemCount;