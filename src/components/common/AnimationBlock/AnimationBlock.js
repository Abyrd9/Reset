import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AnimationBlockStyled } from './AnimationBlockStyled';

class AnimationBlock extends Component {
  state = {
    isMounted: false
  };

  componentDidMount() {
    // setTimout sends the setState call to the callback queue,
    // allowing for enough delay to cause a re-render on state change
    const { delay } = this.props;
    const delayTime = !!delay ? delay : 0;
    setTimeout(() => {
      this.setState({ isMounted: true });
    }, delayTime);
  }

  render() {
    return (
      <AnimationBlockStyled isMounted={this.state.isMounted}>
        {this.props.children}
      </AnimationBlockStyled>
    );
  }
}

AnimationBlock.propTypes = {
  delay: PropTypes.number
};

export default AnimationBlock;
