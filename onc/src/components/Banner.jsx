import React from "react";
import uno from "../assets/img/1.png"
import dos from "../assets/img/2.png"
import tres from "../assets/img/3.png"
function Banner() {
  return(
      <div id="carouselExampleIndicators" class="carousel-inner w-100% h-200" role="listbox">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100" src={uno} alt="First slide"/>
      </div>
      <div class="carousel-item">
        <img className="d-block w-100" src={dos} alt="Second slide"/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src={tres} alt="Third slide"/>
      </div>
    </div>
    <a class="left carousel-control" href="#myCarousel" data-slide="prev" onclick="$('#myCarousel').carousel('prev')">‹</a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next" onclick="$('#myCarousel').carousel('next')">›</a>
  </div>

  )
}

export default Banner