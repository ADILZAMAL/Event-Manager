import React, { Component } from "react";
class Register extends Component {
  state = {
    eventId: "",
    name: "",
    email: "",
    rollNo: "",
    whatsApp: "",
  };

  render() {
    const onChangeHandler = (e) => {
      const { name, value } = e.target;
      console.log(name, value);
      this.setState({
        [name]: value,
      });
    };

    const submitHandler = (e) => {
      e.preventDefault();
    };
    return (
      <>
        <div className="container-fluid home">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="container-fluid">
                <div className="row register">
                  <div className="col-md-6 register__img">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ height: "80vh" }}
                    >
                      <img
                        src={
                          process.env.PUBLIC_URL + "./assets/image/kutta.png"
                        }
                        alt=""
                        width="320"
                        height="320"
                      />
                    </div>

                    <h1 className="register__img__title1">STILL NOT</h1>
                    <h1 className="register__img__title2">REGISTERED ?</h1>
                  </div>
                  <div className="col-md-6 register__form">
                    <div className="register__form__title my-4">SIGN UP</div>
                    <form onSubmit={submitHandler}>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control register__form__input"
                          placeholder="Event ID"
                          name="eventId"
                          value={this.state.eventId}
                          onChange={onChangeHandler}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          placeholder="Name"
                          className="form-control register__form__input"
                          name="name"
                          value={this.state.name}
                          onChange={onChangeHandler}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="email"
                          placeholder="E-mail"
                          className="form-control register__form__input"
                          name="email"
                          value={this.state.email}
                          onChange={onChangeHandler}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          placeholder="Roll No"
                          className="form-control register__form__input"
                          name="rollNo"
                          value={this.state.rollNo}
                          onChange={onChangeHandler}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          placeholder="WhatsApp"
                          className="form-control register__form__input"
                          name="whatsApp"
                          value={this.state.whatsApp}
                          onChange={onChangeHandler}
                        />
                      </div>
                      <div className="d-flex justify-content-end register__form__button__container px-2 px-md-5">
                        <button
                          type="submit"
                          className="btn btn-lg btn-light register__form__button"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <p className="footer__text">
              Made with Love | <strong>Club Excel</strong>
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Register;
