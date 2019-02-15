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
import { Card, CardWrapper } from "react-swipeable-cards";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

const ShibaListContainer = styled.div`
  margin-top: 25px;
`;

const LoadingText = styled.h3`
    position: relative;
    color #333;
`;

class ShibaList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      matchedShiba: "",
      modal: false,
      profileModal: false
    };

    this.toggle = this.toggle.bind(this);
    this.toggleProfile = this.toggleProfile.bind(this);
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

    if (Math.floor(Math.random() * 3) == 0) {
      this.toggle();
    }
  }

  onSwipeLeft(data) {
    console.log("I was swiped left");
  }

  onDoubleTap(data) {
    console.log("I was double tapped");
    this.state.matchedShiba = data;
    this.toggleProfile();
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));

    if (this.state.modal) {
      setTimeout(this.toggle, 1000);
    }
  }

  toggleProfile() {
    this.setState(prevState => ({
      profileModal: !prevState.profileModal
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
        <Modal isOpen={this.state.profileModal}>
          <ModalHeader toggle={this.toggleProfile} />
          <ModalBody>
            <div className="d-flex">
              <div>
                <img src={this.state.matchedShiba} width="100%" alt="" />
              </div>
            </div>
            <br />
            <h3>Tommy, 28</h3>
            <p>2 kilometers away</p>
            <hr />
            <p>Woof woof woof woof woof</p>
          </ModalBody>
        </Modal>
        <Modal isOpen={this.state.modal}>
          <ModalBody className="text-center">
            <h3>It's a Match!</h3>
            <br />
            <br />
            <div className="d-flex justify-content-center">
              <div>
                <img
                  src="https://cdn.shibe.online/shibes/a85627eda959d8222eb4b9544b7b1292d624376a.jpg"
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
            <br />
            <br />
            <Button color="primary" onClick={this.toggle}>
              Say Woof
            </Button>
            <br />
            <br />
            <Button color="link" size="sm" onClick={this.toggle}>
              Continue Swiping
            </Button>
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
