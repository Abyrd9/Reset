import React, { Component } from 'react';
import PropTypes from 'prop-types';
import produce from 'immer';
import { Link } from 'react-router-dom';
import { ListButtonStyles, ListButtonPlusIcon } from './ListButtonStyles';
import { AdminContext } from '../../contexts/AdminContext';
import Button from '../Button/Button';

class ListButton extends Component {
  static contextType = AdminContext;
  state = {
    timeSettings: {
      startTime: 0,
      countdown: 0
    },
    buttonDisabled: false
  };

  componentDidMount() {
    const { time } = this.props;
    if (time) {
      this.setState(
        produce(draft => {
          draft.timeSettings.startTime = time;
        })
      );
    }
  }

  componentDidUpdate(prevProps) {
    const { time } = this.props;
    if (prevProps.time !== time) {
      this.setState(
        produce(draft => {
          draft.timeSettings.startTime = time;
        })
      );
    }
  }

  buttonDisableCountdown = () => {
    const {
      timeSettings: { startTime }
    } = this.state;
    if (startTime > 0) {
      // Set the button to disabled, and start the countdown at the start time
      this.setState(
        produce(draft => {
          draft.buttonDisabled = true;
          draft.timeSettings.countdown = startTime;
        })
      );

      // convert the startTime to milliseconds
      const startTimeMilliseconds = startTime * 1000;

      // Get the milliseconds from browser's Date
      // This is milliseconds since 1995 or something.
      const currentTime = Date.now();

      // The start time added to the current time in milliseconds
      // will give us the time the timer should stop.
      const expectedEndTime = currentTime + startTimeMilliseconds;

      // 1000 = 1s, Every 250ms, the Interval will check if the current Date
      // time is greater than or equal to the intervalTime, and add 1s if it is.
      // It will also set the timer in state down by 1s. if the current Date time
      // every becomes greater than or equal to the expectedEndTime, the button
      // will be re-enabled and the interval will be cleared.
      //
      // This is a more accurate way to do countdown rather than using
      // the browser's setTimout or setInterval as both are not accurate.
      let intervalTime = currentTime + 1000;
      const Interval = setInterval(() => {
        if (Date.now() >= intervalTime) {
          intervalTime = intervalTime + 1000;
          this.setState(
            produce(draft => {
              const { countdown } = draft.timeSettings;
              draft.timeSettings.countdown = countdown - 1;
            })
          );
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
    const {
      buttonDisabled,
      timeSettings: { countdown }
    } = this.state;
    return (
      <ListButtonStyles buttonDisabled={buttonDisabled}>
        {hasStatements ? (
          <React.Fragment>
            <Button
              disabled={buttonDisabled}
              onClick={() => {
                handleChangeIndex();
                this.buttonDisableCountdown();
              }}>
              I agree with this statement.
            </Button>
            <p>This button will be enabled in {countdown}s</p>
          </React.Fragment>
        ) : (
          <Link to="/admin">
            <Button>
              <ListButtonPlusIcon icon="plus-circle" />
              Add New Categories/Statements
            </Button>
          </Link>
        )}
      </ListButtonStyles>
    );
  }
}

ListButton.propTypes = {
  time: PropTypes.number.isRequired,
  hasStatements: PropTypes.bool,
  handleChangeIndex: PropTypes.func
};

export default ListButton;
