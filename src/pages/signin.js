import React from "react";
import {MDBCol, MDBBtn, MDBContainer } from "mdbreact";
import { withRouter } from 'react-router-dom'


const Button = withRouter(({ history }) => (
    <MDBBtn
     
      color="grey lighten-3"
       type="button"
       onClick={() => {history.push('/home')}}
    >
      GO TO NEWS!
    </MDBBtn>
    
  ))


class signIn extends React.Component {
  state = {
    fname: "",
    lname: "",
    email: ""

  };

  submitHandler = event => {
    event.preventDefault();
    (event.target.className += " was-validated")
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    
    const {email} = this.state
        return email.includes("@")&&
        email.includes(".com")||
        email.includes(".net")||
        email.includes(".edu")||
        email.includes(".gov")||
        email.includes(".us")||
        email.includes(".it")||
        email.includes(".de")||
        email.includes(".ru") ? 
       
        <MDBContainer className= "d-flex justify-content-center">
      
      <div>
        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
          
            <MDBCol  md="12" className="mb-3">
              <label
                htmlFor="defaultFormRegisterNameEx"
                className="grey-text"
              >
                First name
              </label>
              <input
                value={this.state.fname}
                name="fname"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder="First name"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="12" className="mb-3">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                Last name
              </label>
              <input
                value={this.state.lname}
                name="lname"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterEmailEx2"
                className="form-control"
                placeholder="Last name"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="12" className="mb-3">
              <label
                htmlFor="defaultFormRegisterConfirmEx3"
                className="grey-text"
              >
                Email
              </label>
              <input
                value={this.state.email}
                onChange={this.changeHandler}
                type="email"
                id="defaultFormRegisterConfirmEx3"
                className="form-control"
                name="email"
                placeholder="Your Email address"
                required
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </MDBCol>


     <Button/>

         
        </form>
      </div>
      </MDBContainer>
    :( 
    
    <MDBContainer className= "d-flex justify-content-center">
      
    <div>
      <form
        className="needs-validation"
        onSubmit={this.submitHandler}
        noValidate
      >
        
          <MDBCol  md="12" className="mb-3">
            <label
              htmlFor="defaultFormRegisterNameEx"
              className="grey-text"
            >
              First name
            </label>
            <input
              value={this.state.fname}
              name="fname"
              onChange={this.changeHandler}
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
              placeholder="First name"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </MDBCol>
          <MDBCol md="12" className="mb-3">
            <label
              htmlFor="defaultFormRegisterEmailEx2"
              className="grey-text"
            >
              Last name
            </label>
            <input
              value={this.state.lname}
              name="lname"
              onChange={this.changeHandler}
              type="text"
              id="defaultFormRegisterEmailEx2"
              className="form-control"
              placeholder="Last name"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </MDBCol>
          <MDBCol md="12" className="mb-3">
            <label
              htmlFor="defaultFormRegisterConfirmEx3"
              className="grey-text"
            >
              Email
            </label>
            <input
              value={this.state.email}
              onChange={this.changeHandler}
              type="email"
              id="defaultFormRegisterConfirmEx3"
              className="form-control"
              name="email"
              placeholder="Your Email address"
              required
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </MDBCol>
      </form>
    </div>
    </MDBContainer>)
  }
}

export default signIn;