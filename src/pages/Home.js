
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export function Home(props) {

  return (
    <div>
      <Carousel autoPlay infiniteLoop renderThumbs={() => null}>
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
        <div className="row align-items-start">
          <div className="col">
            <div class="card">
              <img src="./keeb_img/img1.jpg" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Keychron Q1 QMK Custom Mechanical Keyboard - Version 2</h5>
                <p class="card-text">The Fully Assembled version includes:
                  The keyboard PCB, the case, and the steel plate.
                  Keycaps (included Mac & Windows keycaps).
                  Gateron switches.</p>
                <a href="https://www.keychron.com/collections/custom-keyboards/products/keychron-q1"
                  class="btn btn-primary">Purchase here.</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img src="./keeb_img/img2.jpg" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Keychron Q2 QMK Custom Mechanical Keyboard</h5>
                <p class="card-text">The fully assembled version includes:
                  The keyboard PCB, the case, and the steel plate.
                  Double-shot OSA PBT keycaps (included Mac & Windows keycaps).
                  Gateron G Pro switches.</p>
                <a href="https://www.keychron.com/collections/custom-keyboards/products/keychron-q2-qmk-custom-mechanical-keyboard"
                  class="btn btn-primary">Purchase here.</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img src="./keeb_img/img3.jpg" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Keychron Q8 (Alice Layout) QMK Custom Mechanical Keyboard
                </h5>
                <p class="card-text">The fully assembled version includes:

                  The keyboard PCB, the case, and the steel plate.
                  Double-shot OSA PBT keycaps (including Mac & Windows keycaps).
                  Gateron G Pro switches.</p>
                <a href="https://www.keychron.com/collections/custom-keyboards/products/keychron-q8-alice-layout-qmk-custom-mechanical-keyboard"
                  class="btn btn-primary">Purchase here.</a>
              </div>
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col">
            <div class="card">
              <img src="./keeb_img/img4.jpg" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">THE MARK: 65 KEYBOARD KIT</h5>
                <p class="card-text">Light up your life this perfectly placed board on your desk.
                  Available in either aluminium with an accented foot or polycarbonate allowing even more RGB diffusion.</p>
                <a href="https://dailyclack.com/products/the-mark-65-keyboard-kit" class="btn btn-primary">Purchase here.</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img src="./keeb_img/img5.jpg" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">JANUARY KEYBOARD</h5>
                <p class="card-text">The January is a 60% O-ring mounted board featuring
                  a gentle side sweep with a rounded front and back. As with most o-ring mounted boards,
                  the January is compatible with a variety of o-rings and plate options. Designed by Artemis Design Studios. </p>
                <a href="https://www.switchkeys.com.au/products/january-keyboard-group-buy" class="btn btn-primary">Purchase here.</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img src="./keeb_img/img6.jpg" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Tinyneko</h5>
                <p class="card-text">The tinyneko is a 60% o ring mounted keyboard created in collaboration with shirouu!
                  Specs:
                  8 mounting point o ring
                  6 degrees typing angle</p>
                <a href="https://tinyneko.com/products/group-buy-tinyneko?variant=43948884132141" class="btn btn-primary">Purchase here.</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div >
  )
}

