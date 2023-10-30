/* eslint-disable no-undef */
import { Image, StyleSheet, View } from 'react-native';
import { colors } from '../theme/colors';
import { Text } from 'react-native-paper';
import CategoryButton from '../components/CategoryButton';
import { useSelector } from 'react-redux';


const Categories = () => {

  const petsCategories = useSelector((state) => state.homeSlice.categories);
  
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./../../assets/logo.png')} />

      <Text variant="headlineMedium" style={styles.text}>
        ¿Qué tipo de mascota se te perdió?
      </Text>

      <View style={styles.categoriesButtonsContainer}>
        {petsCategories.map((category) => (
          <CategoryButton key={category} categoryName={category} />
        ))}
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20
  },
  logo: {
    width: 180,
    height: 180,
    borderRadius: 100,
    marginTop: 10,
    marginBottom: 15,
  },
  categoriesButtonsContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    textAlign: 'center',
    color: colors.darkBlue,
  },
});
