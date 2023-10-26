import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { colors } from '../theme/colors';
import PropTypes from 'prop-types';

const CategoryButton = ({ categoryName }) => {
  return (
    <Button
      mode="contained"
      buttonColor={colors.darkBlue}
      textColor={colors.yellow}
      style={styles.button}
      onPress={() => console.log("Se presionó ir a la categoría", categoryName)}
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
