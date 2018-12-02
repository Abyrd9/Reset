import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const AnimationContainer = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      width: 100%;
      visibility: ${props.isMounted ? 'visible' : 'hidden'};
      opacity: ${props.isMounted ? '1' : '0'};
      transform: ${props.isMounted ? 'translateY(0)' : 'translateY(20px)'};
      transition: ${props.isMounted
        ? `visibility 0s linear, opacity 0.3s ${theme.ease}, transform 0.3s ${
            theme.ease
          }`
        : `opacity 0.3s ${theme.ease}, transform 0.3s ${
            theme.ease
          }, visibility 0s linear 0.3s`};
    `;
  }};
`;

class BlockAnimation extends Component {
  state = {
    isMounted: false
  };

  componentDidMount() {
    const { delay } = this.props;
    const delayTime = !!delay ? delay : 0;
    setTimeout(() => {
      this.setState({ isMounted: true });
    }, delayTime);
  }

  render() {
    return (
      <AnimationContainer isMounted={this.state.isMounted}>
        {this.props.children}
      </AnimationContainer>
    );
  }
}

BlockAnimation.propTypes = {};

export default BlockAnimation;
