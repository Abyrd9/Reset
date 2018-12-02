import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const QuoteIconLeft = styled(FontAwesomeIcon)`
  ${props => {
    const { theme } = props;
    return css`
      position: absolute;
      color: ${theme.colors.graySecondary};
      font-size: 100px;
      left: 10px;
      z-index: ${theme.zIndex.bottom};
      /* transition */
      opacity: ${props.isTransitioned ? '1' : '0'};
      transform: ${props.isTransitioned
        ? 'translateY(-40px)'
        : 'translateY(-50px)'};
      ${props.isTransitioned &&
        `transition: ${theme.transition('all', 0.5, 0.1)};`};
    `;
  }};
`;

const QuoteIconRight = styled(FontAwesomeIcon)`
  ${props => {
    const { theme } = props;
    return css`
      position: absolute;
      color: ${theme.colors.graySecondary};
      font-size: 100px;
      right: 10px;
      z-index: ${theme.zIndex.bottom};
      /* transition */
      opacity: ${props.isTransitioned ? '1' : '0'};
      transform: ${props.isTransitioned
        ? 'translateY(40px)'
        : 'translateY(30px)'};
      ${props.isTransitioned && `transition: ${theme.transition('all', 0.5)};`};
    `;
  }};
`;

const Container = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      position: relative;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      p {
        z-index: ${theme.zIndex.middle};
        text-align: center;
        ${theme.font(26, 600)};
        color: ${theme.colors.black};
        /* transition */
        opacity: ${props.isTransitioned ? '1' : '0'};
        transform: ${props.isTransitioned
          ? 'translateY(0)'
          : 'translateY(-10px)'};
        ${props.isTransitioned &&
          `transition: ${theme.transition('all', 0.5, 0.2)};`};
      }
    `;
  }};
`;

class Statement extends Component {
  state = {
    isTransitioned: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isTransitioned: true });
    }, 0);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== false && prevProps.value !== this.props.value) {
      this.setState({ isTransitioned: false });
      setTimeout(() => {
        this.setState({ isTransitioned: true });
      }, 0);
    }
  }

  render() {
    const { value } = this.props;
    return (
      <Container isTransitioned={this.state.isTransitioned}>
        <QuoteIconLeft
          icon="quote-left"
          isTransitioned={this.state.isTransitioned}
        />
        <p>
          {!!value
            ? value
            : "There doesn't seem to be anything here. Click the button below to add new Categories and Statements."}
        </p>
        <QuoteIconRight
          icon="quote-right"
          isTransitioned={this.state.isTransitioned}
        />
      </Container>
    );
  }
}

Statement.propTypes = {};

export default Statement;
