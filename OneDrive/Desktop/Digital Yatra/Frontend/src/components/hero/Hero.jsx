import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Hero.scss';
import Bus from '../Services/Bus';

function Hero() {
  return (
    <div
      id="carouselId"
      className="carousel slide abc full-bleed"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active position-relative">
          <img
            src="https://picsum.photos/1200/500?image=1050"
            className="w-100 d-block"
            alt="Slide"
          />
          <div className="custom-caption position-absolute w-100">
            <Bus />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
