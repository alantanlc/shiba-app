import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ShibaList from "../components/ShibaList";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Container = styled.div`
  position: relative;
  width: 500px; !important;
  margin-bottom: 25px;
`;

const Title = styled.h1`
  position: relative;
  font-size: 3rem;
  text-align: center;
  margin-top: 25px;
`;

class Home extends Component {
  render() {
    return (
      <div>
        <Container className="container">
          <ToastContainer />

          <Navbar color="faded" light>
            <NavbarBrand href="/">Shiber</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <img
                  src="https://cdn.shibe.online/shibes/a85627eda959d8222eb4b9544b7b1292d624376a.jpg"
                  alt=""
                  width="50"
                  height="50"
                  className="rounded-circle"
                />
              </NavItem>
            </Nav>
          </Navbar>

          <Title />
          <ShibaList />
        </Container>
        <Container className="container text-center">
          <Link to="/tc">Learn how to score a date with a shiba!</Link>
        </Container>
      </div>
    );
  }
}

export default Home;
