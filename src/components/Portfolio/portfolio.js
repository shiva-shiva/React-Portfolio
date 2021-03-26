import React from "react";
import "./style.css";
function Portfolio(){
    let BackgroundImage = "./images/girl.jpg";
    return(
        <section className="container-fluid backImage" style={{ backgroundImage: `url(${BackgroundImage})` }}>
  <div className="row justify-content-md-center justify-content-xs-center justify-content-lg-start">
    <div className="col-md-9 col-lg-8 col-xl-7  col-xs-12">
      <div className="card portfolio-card ">
        <div className="card-body contact-body">
          <h5 className="card-title contact-title pb-4 text-center">Portfolio</h5>
          <div className="container mt-2">
            <div className="row">
              <div className="col-md-5 col-sm-6">
                <div className="card card-block">
                  <a href="https://www.redaplus.com/" target="_blank"><img src="../images/RedAPlus.png" className="img-fluid" alt="RedAPlus" /></a>
                  <a href="https://www.redaplus.com/" target="_blank">
                    <h5 className="card-title portfolio-text mt-3 mb-3 text-center">RedAPlus</h5>
                  </a>
                  <p className="card-text" />
                </div>
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="card card-block">
                  <a href="https://github.com/shiva-shiva/Reddit-Tracker-for-Cryto.git" target="_blank"> <img src="../images/login.png" className="img-fluid" target="_blank" alt="Reddit-Tracker" /></a>
                  <a href="https://shiva-shiva.github.io/Weather-Dashboard/" target="_blank" />
                  <h5 className="card-title  portfolio-text text-center mt-3 mb-3">Reddit-Tracker-for-Cryto</h5>
                  <p className="card-text" />
                </div>
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="card card-block">
                  <a href="https://shiva-shiva.github.io/Weather-Dashboard/" target="_blank"><img src="../images/weather.png" className="img-fluid" alt="Weather-Dashboard" /></a>
                  <a href="https://github.com/shiva-shiva/Weather-Dashboard.git" target="_blank">
                    <h5 className="card-title portfolio-text  text-center mt-3 mb-3">weather-Dashbord</h5>
                  </a>
                  <p className="card-text" />
                </div>
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="card card-block">
                  <a href="https://shiva-shiva.github.io/Password-Generator/" target="_blank"><img src="../images/password.png" className="img-fluid" alt="Password-Generator" /></a>
                  <a href="https://github.com/shiva-shiva/Password-Generator.git" target="_blank">
                    <h5 className="card-title portfolio-text text-center mt-3 mb-3">Password-Generator</h5>
                  </a>
                  <p className="card-text" />
                </div>
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="card card-block">
                  <a href="https://afternoon-oasis-27732.herokuapp.com/" target="_blank"><img src="../images/burgerApp.png" className="img-fluid" alt="Weather-Dashboard" /></a>
                  <a href="https://github.com/shiva-shiva/Burger.git" target="_blank">
                    <h5 className="card-title portfolio-text  text-center mt-3 mb-3">Eat da Burger</h5>
                  </a>
                  <p className="card-text" />
                </div>
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="card card-block">
                  <a href="https://dreamkitchentoronto.herokuapp.com/" target="_blank"><img src="../images/dream-kitchen.png" className="img-fluid" alt="Dream-Kitchen" /></a>
                  <a href="https://github.com/shiva-shiva/Resturant-Search.git" target="_blank">
                    <h5 className="card-title portfolio-text  text-center mt-3 mb-3">Dream Kitchen</h5>
                  </a>
                  <p className="card-text" />
                </div>
              </div>
            </div>
          </div>
          <p />
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default Portfolio;