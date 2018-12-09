import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListStatementStyles, QuoteIconLeft, QuoteIconRight } from './ListStatementStyles';

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
      <ListStatementStyles isTransitioned={this.state.isTransitioned}>
        <p>
          <QuoteIconLeft icon="quote-left" isTransitioned={this.state.isTransitioned} />
          {!!value
            ? value
            : "There's nothing to see here. Click the button below to create new Categories and Statements."}
          <QuoteIconRight icon="quote-right" isTransitioned={this.state.isTransitioned} />
        </p>
      </ListStatementStyles>
    );
  }
}

Statement.propTypes = {
  value: PropTypes.string
};

export default Statement;
