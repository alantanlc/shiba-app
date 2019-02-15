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

const ShibaListContainer = styled.div`
  margin-top: 25px;
`;

const LoadingText = styled.h3`
    position: relative;
    color #FFFFFF;
`;

class ShibaList extends Component {
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
    // console.log(this.props.state.Shibas);
  }

  onSwipeRight(data) {
    console.log("I was swiped right");
  }

  onSwipeLeft(data) {
    console.log("I was swiped left");
  }

  onDoubleTap(data) {
    console.log("I was double tapped");
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
                style={{ backgroundImage: `url(${shiba})`, backgroundPosition: `center`, backgroundSize: `cover`, backgroundRepeat: `no-repeat` }}
              >
              </Card>
            ))}
          </CardWrapper>
        )}
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
