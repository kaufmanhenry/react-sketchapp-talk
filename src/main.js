import React from 'react';
import PropTypes from 'prop-types';
import { render, Artboard, StyleSheet } from 'react-sketchapp';

import DogCard from './components/DogCard';

const styles = StyleSheet.create({
  container: {
    width: 840,
    height: 800,
    backgroundColor: '#fafafa'
  }
});

const Document = ({ breeds }) => (
  <Artboard
    name="dogs!"
    style={styles.container}
  >
     {breeds && breeds.map(breed => <DogCard
      name={breed.name}
      photos={breed.photos}
    />)} 
  </Artboard>
);

export default (context) => {
  fetch('https://dog.ceo/api/breed/hound/images')
    .then(res => res.json())
    .then((data) => {
      const breeds = [{
        name: 'Hound',
        photos: data.message.slice(0, 8)
      }];
      render(<Document breeds={breeds}/>, context.document.currentPage());
    })
    .catch((err) => {
      throw Error(err);
    });
};