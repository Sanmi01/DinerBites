import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <footer className="page-footer text-center text-md-left pt-3" id="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <h5 className="text-uppercase font-weight-bold mb-3">
                DinerBites
              </h5>
              <p>
              When The Going Gets Tough, The Tough Get restaurant.
              </p>
            </div>

            <hr className="w-100 clearFix d-md-none" />

            <hr className="w-100 clearFix d-md-none" />

            <div className="col-md-2 mx-auto">
              <h5 className="text-uppercase font-weight-bold mb-3">Links</h5>
              <Nav defaultActiveKey="" className="flex-column" id="header">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/products">
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
            </div>

            <hr className="w-100 clearFix d-md-none" />

            <div className="col-md-2 mx-auto">
              <h5 className="text-uppercase font-weight-bold mb-3">Contact Us</h5>
              <p>No 32,First Road, Ikeja, Lagos, Nigeria</p>
              <p>1234567</p>
              <p>9876543</p>
            </div>
          </div>
        </div>

        <hr />

        <div className="footer-copyright py-2 text-center">
          <div className="container-fluid">
            © 2021 Copyright: SideHustle React 69
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
