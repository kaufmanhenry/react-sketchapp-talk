import React from 'react';
import PropTypes from 'prop-types';
import { render, Artboard, StyleSheet } from 'react-sketchapp';

import DogCard from './components/DogCard';

const styles = StyleSheet.create({
  width: 240,
  height: 400,
  backgroundColor: '#fafafa'
});

const Document = () => (
  <Artboard
    name="dogs!"
    style={styles}
  >
    <DogCard
      name="Billy"
      age={3}
      photo="https://dog.ceo/api/img/terrier-patterdale/320px-05078045_Patterdale_Terrier.jpg"
    />
  </Artboard>
);

export default (context) => {
  render(<Document />, context.document.currentPage());
};