/* eslint-disable react/prop-types */
import { FlatList } from 'react-native';
import { pets } from './../data/pets';
import PetItem from '../components/PetItem';
import PropTypes from 'prop-types';

const Pets = ({ route }) => {
  const { categoryName } = route.params;

  const filteredPets = pets.filter((pet) => pet.category === categoryName);

  return (
    <FlatList
      data={filteredPets}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PetItem pet={item} />}
      style={{ width: '100%' }}
    />
  );
};

Pets.propTypes = {
  categoryName: PropTypes.string.isRequired,
};

export default Pets;

// const styles = StyleSheet.create({});
