import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Hero.scss';

function Hero() {
  return (
    // add .full-bleed here
    <div
      id="carouselId"
      className="carousel slide abc full-bleed"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <img
            src="https://picsum.photos/1200/500?image=1050"
            className="w-100 d-block"
            alt="Slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <h3>Slide Title</h3>
            <p>Slide description goes here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
