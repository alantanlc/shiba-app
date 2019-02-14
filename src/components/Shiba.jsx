import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";
import { Card } from "react-swipe-card";

class Shiba extends PureComponent {
  static propTypes = {
    image: PropTypes.string.isRequired,
    swipeRightShiba: PropTypes.func.isRequired,
    swipeLeftShiba: PropTypes.func.isRequired,
    swiping: PropTypes.arrayOf(PropTypes.string),
    toggleMatch: PropTypes.func.isRequired
  };

  static defaultProps = {
    swiping: []
  };

  onSwipeRight = e => {
    console.log("swiped right");
    // this.props.swipeShiba(this.props.id);

    // log swipe action
    // check if there's a match and invoke onSwipeMatch
  };

  onSwipeLeft = e => {
    console.log("swiped left");
    // this.props.swipeShiba(this.props.id);

    // log swipe action
  };

  onSwipeMatch = e => {
    console.log("swipe matched");
    // this.props.toggleMatch(this.props.id);
  };

  isSwiping = () => {
    const { image, swiping } = this.props;
    return !isEmpty(swiping.filter(o => o === image))[0];
  };

  render() {
    const { image } = this.props;
    // const isSwiping = this.isSwiping();

    return (
      // <Card onSwipeRight={this.onSwipeRight} onSwipeLeft={this.onSwipeLeft}>
      //   <img src={image} alt="" />
      // </Card>
      <div>
        <img src={image} alt="" width="500" />
      </div>
    );
  }
}

export default Shiba;
