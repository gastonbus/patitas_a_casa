import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { colors } from '../theme/colors';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';

const CategoryButton = ({ categoryName }) => {
  const navigation = useNavigation();
  console.log("categoryName desde CategoryButton", categoryName);
  return (
    <Button
      mode="contained"
      buttonColor={colors.darkBlue}
      textColor={colors.yellow}
      style={styles.button}
      onPress={() => navigation.navigate('Pets', {categoryName} )}
    >
      {categoryName}
    </Button>
  );
};

CategoryButton.propTypes = {
  categoryName: PropTypes.string.isRequired,
};

export default CategoryButton;

const styles = StyleSheet.create({
  button: {
    width: '60%',
    marginTop: 10,
  },
});
