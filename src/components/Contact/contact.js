import React from "react";
import './style.css';

function Contact() {
    let BackgroundImage = "images/1.jpg";
    return (
        <section className="container-fluid" style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <div className="row justify-content-md-center justify-content-lg-start">
                <div className="col-md-9 col-lg-8 col-xl-7  col-xs-12">
                    <div className="card  contact-card ">
                        <div className="card-body contact-body">
                            <h5 className="card-title contact-title pb-4">Contact</h5>
                            <p className="card-text">
                            </p><div className="mb-4">
                                <label htmlFor="NameFormControlInput1" className="form-label  contact-label">Name</label>
                                <input type="email" className="form-control" id="NameFormControlInput1" placeholder="Name" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="EmailFormControlInput1" className="form-label contact-label">Email</label>
                                <input type="email" className="form-control" id="EmailFormControlInput1" placeholder="Email" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="MessageFormControlTextarea1" className="form-label contact-label">Message</label>
                                <textarea className="form-control" id="MessagrFormControlTextarea1" rows={3} placeholder="Message" defaultValue={""} />
                            </div>
                            <p />
                            <a href="/" className="btn btn-primary submit-btn p-3 mt-3">Submit</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
