import React, { useState, useEffect } from 'react';
import { Input, Radio } from 'antd';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGoogle
} from '@fortawesome/free-brands-svg-icons';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import logo from '../photo/Font-Samsung-Logo.jpg';
import '../css/signIn.css';

function SignIn(props) {

  useEffect (() => {
    props.handleSignIn();
  }, []);

  let handleBack = () => {
    props.handleBack();
  };

  return (
    <div className="row">
      <div className="col-lg-2 col-md-3 col-sm-4 col-4 text-right mb-3">
        <Link to="/" onClick={() => handleBack()}>
          <img src={logo} alt="Logo" width="140" height="80"/>
        </Link>
      </div>
      <div className="col-lg-10 col-md-9 col-sm-8 col-8 mb-3">
        <div className="h-font mt-3">Account</div>
      </div>
      <div className="col-12 gray-background">
        <div className="row">
          <div className="col-lg-3 col-md-2 col-sm-1 col-1"></div>
          <div className="col-lg-6 col-md-8 col-sm-10 col-10 white-background mt-5 mb-5 rounded-border">
            <div className="text-primary text-center title-font mt-5 pl-5 pr-5 mb-5">
              Sign in to your samsung account
            </div>
            <div className="pl-5 pr-5 mb-4 text-center">
              <div className="bordered-bottom">
                <Input placeholder="Email" bordered={false} />
              </div>
            </div>
            <div className="pl-5 pr-5 mb-3 text-center">
              <div className="bordered-bottom">
                <Input placeholder="Password" bordered={false} />
              </div>
            </div>
            <div className="pl-5 pr-5 mb-4">
              <Radio>Remember my ID </Radio>
            </div>
            <div className="pl-5 pr-5 mb-4 text-center">
              <Button variant="secondary" className="px-5 rounded-pill form-control">Sign in</Button>
            </div>
            <div className="pl-5 pr-5 mb-1">
              <Button variant="link" className="text-dark">Find ID</Button> or 
              <Button variant="link" className="text-dark">Reset Password</Button>
            </div>
            <div className="pl-5 pr-5 mb-4">
              <Button variant="link" className="text-dark">Create account</Button>
            </div>
            <div className="pl-5 pr-5 mb-5 text-center">
              <Button variant="primary" className="px-5 rounded-pill form-control">
                <FontAwesomeIcon icon={faGoogle} /> Continue with Google
              </Button>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-1 col-1"></div>
          <div className="col-lg-8 col-md-12 col-sm-12 col-12 pl-lg-5 mb-3 footer-font">
            <a href="#" className="ml-5 mr-5 text-dark">Terms and Conditions</a>
            <a href="#" className="mr-5 font-weight-bold text-dark">Samsung account Pravicy Note</a>
            <a href="#" className="mr-5 text-dark">Notice</a>
            <a href="#" className="mr-5 text-dark">Contact Us</a>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12 mb-3 footer-font">
            <span className="text-right ml-5">Copyright © 1995-2021 Samsung. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;