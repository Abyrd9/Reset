import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import { AdminContext } from '../../contexts/AdminContext';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = styled(FontAwesomeIcon)`
  ${props => {
    const { theme } = props;
    return css`
      color: ${theme.colors.white};
      height: 12px;
      max-width: 15px;
      margin-right: 5px;
    `;
  }};
`;

const ButtonContainer = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      position: absolute;
      bottom: 35px;
      left: 0;
      padding: 0px 20px;
      a {
        width: 100%;
      }
      button {
        ${theme.font(16, 400)};
        padding: 12px 0px;
      }
      p {
        ${theme.font(16, 600)};
        color: ${theme.colors.blackSecondary};
        margin-top: 10px;
        transition: ${theme.transition('all', 0.2)};
        opacity: ${props.buttonDisabled ? '1' : '0'};
      }
    `;
  }};
`;

class ListButton extends Component {
  static contextType = AdminContext;
  state = {
    savedTime: 0,
    timer: 0,
    buttonDisabled: false
  };

  componentDidUpdate(prevProps) {
    if (prevProps.timer !== this.props.timer) {
      this.setState({ savedTime: this.props.timer });
    }
  }

  buttonDisableCountdown = () => {
    if (this.state.savedTime > 0) {
      this.setState({ buttonDisabled: true, timer: this.state.savedTime });
      const interval = this.state.savedTime * 1000;
      const currentTime = Date.now();
      const expectedEndTime = currentTime + interval;
      let intervalTime = currentTime + 1000;
      const Interval = setInterval(() => {
        if (Date.now() >= intervalTime) {
          intervalTime = intervalTime + 1000;
          this.setState({ timer: this.state.timer - 1 });
        }
        if (Date.now() >= expectedEndTime) {
          this.setState({ buttonDisabled: false });
          clearInterval(Interval);
        }
      }, 250);
    }
  };

  render() {
    const { hasStatements, handleChangeIndex } = this.props;
    return (
      <ButtonContainer buttonDisabled={this.state.buttonDisabled}>
        {hasStatements ? (
          <React.Fragment>
            <Button
              disabled={this.state.buttonDisabled}
              onClick={() => {
                handleChangeIndex();
                this.buttonDisableCountdown();
              }}>
              I agree with this statement.
            </Button>
            <p>This button will be enabled in {this.state.timer}s</p>
          </React.Fragment>
        ) : (
          <Link to="/admin">
            <Button>
              <Icon icon="plus-circle" />
              Add New Categories/Statements
            </Button>
          </Link>
        )}
      </ButtonContainer>
    );
  }
}

ListButton.propTypes = {};

export default ListButton;
