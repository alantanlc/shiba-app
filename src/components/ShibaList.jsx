import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Cards from "react-swipe-card";
import { connect } from "react-redux";
import {
  getShibas,
  swipeRightShiba,
  swipeLeftShiba,
  toggleMatchModal
} from "../services/Shibas/actions";
import ShibaItem from "./Shiba";

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
  }

  swipeFinish = () => {
    console.log("swipe finish");
  };

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
          // <Cards onEnd={this.swipeFinish} className="master-root">
          //   {shibas.map(shiba => (
          //     <ShibaItem
          //       key={shiba.id}
          //       id={shiba.id}
          //       image={shiba.image}
          //       swipeRightShiba={this.props.swipeRightShiba}
          //       swipeLeftShiba={this.props.swipeLeftShiba}
          //     />
          //   ))}
          // </Cards>

          <div>
            {shibas.map(shiba => (
              <ShibaItem
                key={shiba}
                image={shiba}
                swipeRightShiba={this.props.swipeRightShiba}
                swipeLeftShiba={this.swipeLeftShiba}
                toggleMatch={this.props.toggleMatchModal}
              />
            ))}
          </div>
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
