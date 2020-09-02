import React from "react";
import { Link } from "react-router-dom";
const RegistrationComplete = () => {
  return (
    <div className="container-fluid salutation">
      <div className="salutation__img">
        <img
          src={
            process.env.PUBLIC_URL + "./assets/image/RegistrationComplete.png"
          }
          alt=""
        />
      </div>
      <div className="salutation__footer">
        <div className="salutation__footer__link">
          <div className="salutation__footer__link__item">
            <img
              src={
                process.env.PUBLIC_URL + "./assets/image/icons8-facebook.png"
              }
              width="40"
              height="40"
              alt=""
            />
          </div>
          <div className="salutation__footer__link__item">
            <img
              src={
                process.env.PUBLIC_URL + "./assets/image/icons8-instagram.png"
              }
              width="40"
              height="40"
              alt=""
            />
          </div>
          <div className="salutation__footer__link__item">
            <img
              src={
                process.env.PUBLIC_URL + "./assets/image/icons8-linkedin.png"
              }
              alt=""
              width="40"
              height="40"
            />
          </div>
        </div>
        <div className="salutation__footer__text">
          <p>
            Made with Love|<strong>Club Excel</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationComplete;
