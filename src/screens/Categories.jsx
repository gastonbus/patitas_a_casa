/* eslint-disable no-undef */
import { Image, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { Text } from 'react-native-paper';
import CategoryButton from '../components/CategoryButton';
import { FlatList } from 'react-native';
import { useGetCategoriesQuery } from '../services/pacApi';

const Categories = () => {

  const { data: petsCategories } = useGetCategoriesQuery();

  return (
    <>
      <Image style={styles.logo} source={require('./../../assets/logo.png')} />

      <Text variant="headlineSmall" style={styles.text}>
        ¿Qué tipo de mascota se te perdió?
      </Text>

      <FlatList
        data={petsCategories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <CategoryButton categoryName={item} />}
        style={styles.flatList}
      />
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
    alignSelf: "center"
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
