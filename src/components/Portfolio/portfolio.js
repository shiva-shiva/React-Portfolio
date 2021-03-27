import React, {useEffect, useState} from "react";
import initialData from '../../utils/data'
import "./style.css";
function Portfolio(){

 const [ cardData, setMyInput ]= useState([])
   useEffect( function(){
        console.log(initialData)
        setMyInput(initialData);
      }, [])
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