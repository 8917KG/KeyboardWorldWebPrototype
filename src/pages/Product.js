
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export function Product(props) {
  
  return (
    <div>
      <Carousel autoPlay infiniteLoop renderThumbs={()=> null}>
      <div>
          <img className="img-fluid" src="./banner_img/banner1.jpg" />
          <a href="https://dailyclack.com/products/zoom-tkl-essential-edition-keyboard-kit"
          className="legend">Zoom TKL EE (Navy)</a>
      </div>
      <div>
          <img className="img-fluid" src="./banner_img/banner2.jpg" />
          <a href="https://dailyclack.com/products/zoom-tkl-essential-edition-keyboard-kit"
           className="legend">Zoom TKL EE (Navy)</a>
      </div>
      <div>
          <img className="img-fluid" src="./banner_img/banner3.jpg" />
          <a href="https://dailyclack.com/products/zoom-tkl-essential-edition-keyboard-kit"
           className="legend">Zoom TKL EE(Baby Blue)</a>
      </div>
      <div>
          <img className="img-fluid" src="./banner_img/banner4.jpg" />
          <a href="https://dailyclack.com/products/zoom-tkl-essential-edition-keyboard-kit"
           className="legend">Zoom TKL EE (Pink)</a>
      </div>
      <div>
          <img className="img-fluid" src="./banner_img/banner5.jpg" />
          <a href="https://dailyclack.com/products/zoom-tkl-essential-edition-keyboard-kit"
           className="legend">Zoom TKL EE (Pink)</a>
      </div>
      </Carousel>
      <div className="container-fluid">
        

      </div>
    </div>
    
  )
}

