import React from "react";
import "./style.scss";

const HomeBanner = () => {
  return (
    <section className="">
      <div className="container">
        <div className="row">
          <div className="col-md">
            <div className="home-banner">
              <h1 className="text-center">Welcome to Our Website</h1>
              <p className="text-center">
                We are glad to have you here. Explore our services and
                offerings.
              </p>
              <div className="text-center">
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
