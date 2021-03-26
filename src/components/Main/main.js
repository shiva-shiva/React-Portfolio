import React from "react";
import "./style.css";
  function Main(){
   let BackgroundImage = "./images/girl.jpg";
  return (
   <section className="container-fluid"  style={{ backgroundImage: `url(${BackgroundImage})` }}>
  <div className="row justify-content-md-center  justify-content-lg-start">
    <div className="col-md-10 col-lg-10 col-xl-9  col-xs-12">
      <div className="card  portfolio-card ">
        <div className="card-body contact-body ">
          <h5 className="card-title contact-title pb-4 text-center">About Me</h5>
          <hr className="hr-style" />
          <p className="card-text">
          </p><div className="row justify-content-center align-items-center">
            <div className=" col-md-4 col-xs-2 col-sm-4 col-lg-4 col-xl-3 col-xxl-2">
              <img src="images/shiva.JPG" className="img-fluid pb-1" alt="About Me" id="img-me" />
            </div>
            <div className="col-md-11 col-sm-9 col-lg-9 col-xl-9 col-xs-12">
              <p className="text-me">
                My name is Shiva. I'm a Front End Engineer live in Canada⛄. I describe myself as a passionate
                developer who loves coding ❤️
                Aside from my job, I like to create and contribute to open source projects. That helps me to learn a
                ton of new stuff, grow as a developer and support other open source projects😊.
                <br />
                Feel free to take a look at my latest projects on the web portfolio page.
              </p>
              <ul className="social-network social-circle social-txt">
                <li className="emailStyle"><a href="#" target="_blank">
                    <i className="fas fa-at " /></a>shivasabokdast@gmail.com</li>  
                <li><a href="#" target="_blank"><i className="fas fa-mobile-alt" /></a>(647) 825-1216</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul className="text-me">
                <li>Hands-on Experienced in Angular5+ framework and React library.</li>
                <li>Good knowledge of responsive webpage design and single page websites.</li>
                <li>Designed, developed and maintained user interface and database for large projects in banking and
                  e-commerce applications.</li>
                <li>Familiar with Photoshop CS6 and Illustrator CS6.</li>
                <li>Demonstrated time management skills and ability to meet deadlines, responsible, detail oriented,
                  hardworking.</li>
              </ul>
            </div>
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-4">
              <ul className="social-network social-circle">
                <li><a href="https://www.linkedin.com/in/shivasabokdast/" className="icolinkedin" title="linkedin" target="_blank"><i className="fab fa-linkedin fa-2x" /></a></li>
                <li><a href="https://github.com/shiva-shiva" className="icogithub" title="github" target="_blank"><i className="fab fa-github-square fa-2x" /></a></li>
                <li><a href="./resume/Shiva_Sabokdast.pdf" className="icofile" title="file" target="_blank"><i className="fas fa-file fa-2x" /></a></li>
              </ul>
            </div>
          </div>
          <p />
        </div>
      </div>
    </div>
  </div>
</section>
    );
  }
  
  export default Main;
  