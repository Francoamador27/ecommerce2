import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./carousel.module.css";
import {Carousel} from 'react-bootstrap';
import slider2 from '../slider/slider2.jpg'
import slider3 from '../slider/slider3.jpg'
import slider1 from '../slider/slider1.jpg'

function Slider() {
  return (
      <section>
          
<Carousel className={styles.slider}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider2}
      alt="First slide"/>

    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider3}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider1}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</section>
  );
}

export default Slider;