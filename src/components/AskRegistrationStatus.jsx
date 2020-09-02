import React from "react";
import { NavLink, Link } from "react-router-dom";
const AskRegistrationStatus = () => {
  return (
    <>
      <div className="container-fluid" style={{ padding: "0px" }}>
        <div
          style={{
            height: "100vh",
            backgroundColor: "#c7ccdc",
          }}
          className="row align-items-center "
        >
          <div className="col-10 mx-auto card d-flex flex-column align-items-center justify-content-around border pt-5">
            <img
              src={
                process.env.PUBLIC_URL +
                "./assets/image/AskRegistrationStatus.png"
              }
              alt=""
              width="280"
              height="280"
              className="card_img"
            />
            <div className="">
              <NavLink
                to="/registration-complete"
                style={{ textDecoration: "none" }}
              >
                <button className="card__btn">YEAH</button>
              </NavLink>
              <NavLink
                to="/registration-form"
                style={{ textDecoration: "none" }}
              >
                <button className="card__btn">NOPE</button>
              </NavLink>
            </div>
            <h1 className="card__text1">Did you</h1>
            <h1 className="card__text2">REGISTERED ?</h1>
          </div>
        </div>
        <div className="footer">
          <p className="text-center">
            Made with Love | <strong>Club Excel</strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default AskRegistrationStatus;
