// src/components/ResponsiveLayout.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ResponsiveLayout.css';
import Svg from './svg';

const ResponsiveLayout = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 left-column d-flex flex-column">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <Svg/>
          </nav>
          <img src="/pokerimages/istockphoto-836728954-170667a.jpg" className='img-left' alt="Placeholder" />
        </div>
        <div className="col-md-6 right-column">
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveLayout;
