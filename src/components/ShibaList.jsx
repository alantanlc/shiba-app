import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  getShibas,
  swipeRightShiba,
  swipeLeftShiba,
  toggleMatchModal
} from "../services/Shibas/actions";
import ShibaItem from "./Shiba";
import { Card, CardWrapper } from "react-swipeable-cards";
import { Button, Modal, ModalBody } from "reactstrap";

const ShibaListContainer = styled.div`
  margin-top: 25px;
`;

const LoadingText = styled.h3`
    position: relative;
    color #FFFFFF;
`;

class ShibaList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      matchedShiba: '',
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  static propTypes = {
    Shibas: PropTypes.shape({
      shibas: PropTypes.arrayOf(PropTypes.string.isRequired),
      isLoading: PropTypes.shape({
        getting: PropTypes.bool.isRequired
      }).isRequired
    }).isRequired,
    getShibas: PropTypes.func.isRequired,
    swipeRightShiba: PropTypes.func.isRequired,
    swipeLeftShiba: PropTypes.func.isRequired,
    toggleMatchModal: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.getShibas();
  }

  onSwipeRight(data) {
    console.log("I was swiped right");

    this.state.matchedShiba = data;
    this.toggle();
  }

  onSwipeLeft(data) {
    console.log("I was swiped left");
  }

  onDoubleTap(data) {
    console.log("I was double tapped");
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const {
      shibas,
      isLoading: { getting }
    } = this.props.Shibas;

    return (
      <ShibaListContainer>
        {getting ? (
          <LoadingText className="text-center">Loading...</LoadingText>
        ) : (
          <CardWrapper>
            {shibas.map(shiba => (
              <Card
                key={shiba}
                onSwipeRight={this.onSwipeRight.bind(this)}
                onSwipeLeft={this.onSwipeLeft.bind(this)}
                onDoubleTap={this.onDoubleTap.bind(this)}
                data={shiba}
                style={{
                  backgroundImage: `url(${shiba})`,
                  backgroundPosition: `center`,
                  backgroundSize: `cover`,
                  backgroundRepeat: `no-repeat`
                }}
              />
            ))}
          </CardWrapper>
        )}
        <Modal isOpen={this.state.modal}>
          <ModalBody className="text-center">
            <h3>It's a match!</h3>
            <div className="d-flex justify-content-center">
              <div>
                <img
                  src="https://cdn.shibe.online/shibes/7d37d4fe44e984a7a5b68c4da8600832f56ea61d.jpg"
                  alt=""
                  width="150"
                  height="150"
                  className="rounded-circle"
                />
              </div>
              <div>&nbsp;&nbsp;</div>
              <div>
                <img
                  src={this.state.matchedShiba}
                  alt=""
                  width="150"
                  height="150"
                  className="rounded-circle"
                />
              </div>
            </div>
            <Button color="primary" onClick={this.toggle}>
              Say Woof!
            </Button>
            &nbsp;
            <Button onClick={this.toggle}>Continue Swiping</Button>
          </ModalBody>
        </Modal>
      </ShibaListContainer>
    );
  }
}

const mapStateToProps = state => ({
  Shibas: state.Shibas
});

const mapDispatchToProps = {
  getShibas,
  swipeRightShiba,
  swipeLeftShiba,
  toggleMatchModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShibaList);
