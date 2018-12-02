import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import { AdminContext } from '../Contexts/AdminContext';
import Button from '../Button';
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
      bottom: 50px;
      left: 0;
      padding: 0px 20px;
      a {
        width: 100%;
      }
      button {
        ${theme.font(12, 400)};
        padding: 12px 0px;
      }
      p {
        ${theme.font(10, 600)};
        color: ${theme.colors.blackSecondary};
        margin-top: 10px;
      }
    `;
  }};
`;

class ListButton extends Component {
  static contextType = AdminContext;
  state = {
    time: 5,
    buttonDisabled: false
  };

  componentDidMount() {
    const userId = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref(`/users/${userId}/timer`)
      .on('value', snapshot => {
        let timer = snapshot.val();
        timer ? (timer = timer) : (timer = 0);
        this.setState({ time: timer });
      });
  }

  componentWillUnmount() {
    const userId = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref(`/users/${userId}/timer`)
      .off();
  }

  buttonDisableCountdown = () => {
    if (this.state.time > 0) {
      this.setState({ buttonDisabled: true });
      const Interval = setInterval(() => {
        const intervalNumber = this.state.time - 1;
        this.setState({ time: intervalNumber });
        if (intervalNumber <= 0) {
          clearInterval(Interval);
          this.setState({ buttonDisabled: false });
        }
      }, this.state.time * 100);
    }
  };

  render() {
    const { hasStatements } = this.props;
    return (
      <ButtonContainer>
        {hasStatements ? (
          <React.Fragment>
            <Button
              disabled={this.state.buttonDisabled}
              onClick={() => this.buttonDisableCountdown()}>
              I agree with this statement.
            </Button>
            {this.state.buttonDisabled && (
              <p>This button will be enabled in {this.state.time}s</p>
            )}
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
