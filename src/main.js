import React from 'react';
import PropTypes from 'prop-types';
import { render, Artboard, Text } from 'react-sketchapp';

const Document = ({ colors }) => (
  <Artboard
    name="dogs!"
    style={{
      width: 400,
      height: 400
    }}
  >
    <Text>Hello!</Text>
  </Artboard>
);

export default (context) => {
  render(<Document />, context.document.currentPage());
};