
import styles from "./navmenu.module.css";
import MenuIcon from '@mui/icons-material/Menu';
import { Accordion } from "react-bootstrap";
import CustomizedAccordions from "./acordeon";
import { Link } from "react-router-dom";
function Navmenu() {
  return (
    <section >
<div className={styles.containermenu}>
<nav className={styles.nav}>

<ul className={styles.ulhiden}>
<li><Link  to="/">Todos Los productos</Link></li>

  <li><Link  to="/colchon">Colchones</Link></li>
  <li><Link to="/bicicletas">Bicicletas</Link></li>
  <li><Link to="/electro">Electro</Link></li>
  <li><Link to="/tecno">Tecno</Link></li>
  <li><Link to="/mas">Mas</Link></li>

</ul>
<div className={styles.hide}>
<CustomizedAccordions/>
<div></div>
</div>
</nav>

</div>
</section>
  );
}

export default Navmenu;