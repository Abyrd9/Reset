import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const StringMatcher = ({ string, pattern, replacement }) => {
  // Setup new string with string passed into function
  let newString = string;

  // Need to make sure the pattern passed in is a string,
  // If it isn't, simply return the string
  const patternIsString = !!pattern && typeof pattern === 'string';
  if (patternIsString && !pattern.includes('^')) {
    // Need to make sure the pattern is an even number so that the matchers
    // make sense. ex "{{}}", "<<>>", {""}
    // If it isn't even, simply return the string
    const isEven = num => {
      return num % 2 === 0;
    };
    if (!isEven(pattern.length)) return newString;

    // Since it is an even number, grab the first part of the pattern,
    // which should be half, and the last part of the pattern
    const patternStart = pattern.slice(0, pattern.length / 2);
    const patternEnd = pattern.slice(pattern.length / 2);

    // Create the regex pattern to capture all instances of replacement
    const regex = new RegExp(`(${patternStart})(\\\\?.)*(${patternEnd})`, 'g');

    // using the replace method, pull the content out of the patterns
    // leaving only the patterns themselves, rather than having "{{text here}}",
    // you will now have "^{{}}^" with the added ^ character
    newString = newString.replace(regex, `^${pattern}^`);

    // Now split the string by ^, map over the array of strings
    // and replace the patterns with the replacement
    newString = newString.split('^');
    newString = newString.map(string => {
      if (string === pattern) {
        string = replacement;
      }
      return string;
    });
  }
  return <Fragment>{newString}</Fragment>;
};

StringMatcher.propTypes = {};

export default StringMatcher;
