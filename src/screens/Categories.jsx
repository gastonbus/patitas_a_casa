/* eslint-disable no-undef */
import { Image, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { Text } from 'react-native-paper';
import CategoryButton from '../components/CategoryButton';
import { FlatList } from 'react-native';
import { useGetCategoriesQuery, useGetPetsQuery } from '../services/pacApi';
import { useDispatch } from 'react-redux';
import { setAllPets, setAllcategories } from '../redux/slices/homeSlice';
import { useEffect } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

const Categories = () => {
  const { data: categories, isLoadingCategories } = useGetCategoriesQuery();
  const { data: pets, isLoadingPets } = useGetPetsQuery();

  const dispatch = useDispatch();

  useEffect(() => {
    if (pets) {
      dispatch(setAllPets(pets));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pets]);

  useEffect(() => {
    if (categories) {
      dispatch(setAllcategories(categories));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]);

  return (
    <>
      <Image style={styles.logo} source={require('./../../assets/logo.png')} />

      <Text variant="headlineSmall" style={styles.text}>
        ¿Qué tipo de mascota se te perdió?
      </Text>
      {isLoadingCategories || isLoadingPets ? (
        <LoadingSpinner />
      ) : (
        <FlatList
          data={categories}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <CategoryButton categoryName={item} />}
          style={styles.flatList}
        />
      )}
    </>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    width: 140,
    height: 140,
    borderRadius: 100,
    marginTop: 10,
    marginBottom: 15,
    alignSelf: 'center',
  },
  flatList: {
    width: '100%',
    paddingBottom: 20,
  },
  text: {
    textAlign: 'center',
    color: colors.darkBlue,
    marginBottom: 10,
  },
});
