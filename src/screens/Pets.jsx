/* eslint-disable react/prop-types */
import { FlatList } from 'react-native';
import PetItem from '../components/PetItem';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Search from '../components/Search';

const Pets = () => {
  const filteredPetsByCategory = useSelector(
    (state) => state.homeSlice.filteredPetsByCategory
  );

  console.log(
    'filteredPetsByCategory',
    JSON.stringify(filteredPetsByCategory, null, 2)
  );
  const [searchText, setSearchText] = useState('');
  const [filteredPetsBySearch, setFilteredPetsBySearch] = useState(
    filteredPetsByCategory
  );
  useEffect(() => {
    setFilteredPetsBySearch(
      filteredPetsByCategory.filter((pet) =>
        (pet.city + ' ' + pet.province)
          .toLowerCase()
          .includes(searchText.toLowerCase())
      )
    );
  }, [filteredPetsByCategory, searchText]);
  return (
    <>
      <Search
        searchText={searchText}
        setSearchText={setSearchText}
        resultsLength={filteredPetsBySearch.length}
      />
      <FlatList
        data={filteredPetsBySearch}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PetItem pet={item} />}
        style={{ width: '100%' }}
      />
    </>
  );
};

export default Pets;

// const styles = StyleSheet.create({});
