
import styles from "./navmenu.module.css";
import MenuIcon from '@mui/icons-material/Menu';
import { Accordion } from "react-bootstrap";
import CustomizedAccordions from "./acordeon";
function Navmenu() {
  return (
    <section >
<div className={styles.containermenu}>
<nav className={styles.nav}>

<ul className={styles.ulhiden}>
  <li><a href="">Colchones</a></li>
  <li><a href="">Electro</a></li>
  <li><a href="">Bicicletas</a></li>
  <li><a href="">Tecno</a></li>
  <li><a href="">Mas</a></li>
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