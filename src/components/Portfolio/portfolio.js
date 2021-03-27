import React, {useEffect, useState} from "react";
//import initialData from '../../utils/data'
import "./style.css";
function Portfolio(){

    const [ cardData, setMyInput ]= useState( [
        {
            name:"RedAPlus",
            Url:"https://www.redaplus.com/",
            deployUrl:"https://www.redaplus.com/",
            img:"../images/RedAPlus.png",
        },
        {
            name:"Reddit-Tracker-for-Cryto",
            Url:"https://github.com/shiva-shiva/Reddit-Tracker-for-Cryto.git",
            deployUrl:"https://dragontalker.github.io/FrontEnd-EasyRedditTrackerForCrypto/",
            img:"../images/login.png",
        },
        {
            name:"Eat da Burger",
            Url:"https://github.com/shiva-shiva/Burger.git",
            deployUrl:"https://afternoon-oasis-27732.herokuapp.com/",
            img:"../images/burgerApp.png",
        },
        {
            name:"Dream Kitchen",
            Url:"https://github.com/shiva-shiva/Resturant-Search.git",
            deployUrl:"https://dreamkitchentoronto.herokuapp.com/",
            img:"../images/dream-kitchen.png",
        },
        {
            name:"weather-Dashbord",
            Url:"https://github.com/shiva-shiva/Weather-Dashboard.git",
            deployUrl:"https://shiva-shiva.github.io/Weather-Dashboard/",
            img:"../images/weather.png",
        },
        {
            name:"Password-Generator",
            Url:"https://github.com/shiva-shiva/Password-Generator.git",
            deployUrl:"https://shiva-shiva.github.io/Password-Generator/",
            img:"../images/password.png",
        }
    ])

   /*useEffect( function(){
        console.log(initialData.initialData)
        setMyInput(initialData.initialData);
      }, [])*/
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
            {cardData.map( cardData=> 
              <div className="col-md-5 col-sm-6">
                <div className="card card-block">
                  <a href={cardData.Url} target="_blank"><img src={cardData.img} className="img-fluid" alt="RedAPlus" /></a>
                  <a href={cardData.deployUrl} target="_blank">
                    <h5 className="card-title portfolio-text mt-3 mb-3 text-center">{cardData.name}</h5>
                  </a>
                  <p className="card-text" /><p />
                </div>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default Portfolio;