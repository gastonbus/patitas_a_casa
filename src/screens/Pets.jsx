import { FlatList, StyleSheet } from 'react-native';
import { pets } from './../data/pets';
import PetItem from '../components/PetItem';

const Pets = () => {
  return (
    <FlatList
      data={pets}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PetItem pet={item} />}
      style={{width: "100%"}}
    />
  );
};

export default Pets;

const styles = StyleSheet.create({});
