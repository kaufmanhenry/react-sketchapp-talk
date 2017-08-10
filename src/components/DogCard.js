import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-sketchapp';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    color: '#111',
    width: 200,
    margin: 20,
    borderRadius: 4
  },
  container: {
    padding: 20
  },
  profileImage: {
    width: '100%',
    height: 200
  },
  header: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 8
  },
  subheader: {
    color: '#aaa'
  }
});

const DogCard = ({ name, age, photo }) => (
  <View style={styles.wrapper}>
    <Image style={styles.profileImage} source={photo}/>
    <View style={styles.container}>
      <Text style={styles.header}>{name}</Text>
      <Text style={styles.subheader}>{age} years old</Text>
    </View>
  </View>
);

DogCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired
};

export default DogCard;