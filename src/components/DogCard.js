import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-sketchapp';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    color: '#111',
    width: 800,
    margin: 20,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.05,
    shadowRadius: 20
  },
  container: {
    padding: 20
  },
  profileImage: {
    width: 200,
    height: 200
  },
  header: {
    fontSize: 20,
    fontWeight: 700
  },
  photoContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

const DogCard = ({ name, photos }) => (
  <View style={styles.wrapper}>
    {photos && <View style={styles.photoContainer}>
      {photos.map(photo => <Image style={styles.profileImage} source={photo}/>)}
    </View>}
    <View style={styles.container}>
      <Text style={styles.header}>{name}</Text>
    </View>
  </View>
);

DogCard.propTypes = {
  name: PropTypes.string.isRequired,
  photos: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default DogCard;