import { useContext } from "react";
import styles from "./nav.module.css";
import logo from "../logo/1.png";
import CustomizedMenus from "./perfil"
import CartWidget from "./CartWidget/CartWidget";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import cartContext from "../context/Cardcontext";
import SimpleMenu from "./menu";
function Navbar() {

  const {handleClick} = useContext(cartContext)
  return (
  <nav>
<div className={styles.contenedor}>
    <div className={styles.logo}>
    <Link to={'/'}>
    <img className={styles.imglogo}
      src={logo}
/></Link>
  </div>
  <div  className={styles.enlacess}> 
    <CartWidget/>
  </div>
  </div>
  </nav>
  );
}

export default Navbar;