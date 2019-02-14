import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ShibaList from "../components/ShibaList";

const Container = styled.div`
  position: relative;
  margin-bottom: 25px;
`;

const Title = styled.h1`
  position: relative;
  font-size: 3rem;
  color: #ffffff;
  text-align: center;
  margin-top: 25px;
  font-family: "Libra Barcode 39 Text", cursive;
`;

class Home extends Component {
  render() {
    return (
      <div>
        <Container className="container">
          <ToastContainer />
          <Title>Shiba Listly</Title>
          <ShibaList />
        </Container>
        <Container className="container">
          <Link to="/tc">Terms and conditions</Link>
        </Container>
      </div>
    );
  }
}

export default Home;