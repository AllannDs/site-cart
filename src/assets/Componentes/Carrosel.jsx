import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Carrosel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://tm.ibxk.com.br/2021/12/22/22114306286189.jpg?ims=1200x675"
          alt="First slide" style={{width:"500px", height:"auto"}}
        />
        <Carousel.Caption style={{ color:"white"}}>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.remessaonline.com.br/blog/wp-content/uploads/2023/10/hardware.jpg"
          alt="Second slide" style={{width:"500px", height:"auto"}}
        />
        <Carousel.Caption style={{ color:"white", backgroundColor:"rgb(128, 128, 128, 0.5)"}}>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://4infra.com.br/wp-content/uploads/2019/01/background-board-card-825262-1-1024x683.jpg"
          alt="Third slide" style={{width:"500px", height:"auto"}}
        />
        <Carousel.Caption style={{ color:"white"}}>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.geotab.com/CMS-Media-production/Feature%20pages/Hardware%20integration/hardware-integration-hero-image@2x.jpg"
          alt="Four slide" style={{width:"500px", height:"auto"}}
        />
        <Carousel.Caption style={{ color:"white"}}>
          <h5>Four slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrosel;