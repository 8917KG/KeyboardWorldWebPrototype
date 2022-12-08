
export function Product(props) {
  
  return (
    <div className="container-fluid">
      <div className="row align-items-center">
        <img src="./banner_img/banner1.jpg" className="img-fluid" />
      </div>
      <div className="container-fluid">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="..." class="d-block w-100" alt="slide1" />
            </div>
            <div class="carousel-item">
              <img src="..." class="d-block w-100" alt="slide2" />
            </div>
            <div class="carousel-item">
              <img src="..." class="d-block w-100" alt="slide3" />
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

