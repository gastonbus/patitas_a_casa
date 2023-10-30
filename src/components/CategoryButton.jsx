/* eslint-disable react/prop-types */
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { colors } from '../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setCategory } from '../redux/slices/homeSlice';

const CategoryButton = ({ categoryName }) => {

  const navigation = useNavigation();
  
  const dispatch = useDispatch();

  const onSelectCategory = () => {
    dispatch(setCategory(categoryName));
    navigation.navigate('Pets');
  }

  return (
    <Button
      mode="contained"
      buttonColor={colors.darkBlue}
      textColor={colors.yellow}
      style={styles.button}
      onPress={onSelectCategory}
    >
      {categoryName}
    </Button>
  );
};

export default CategoryButton;

const styles = StyleSheet.create({
  button: {
    width: '60%',
    marginTop: 10,
  },
});
