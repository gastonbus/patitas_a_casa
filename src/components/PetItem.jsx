import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import PropTypes from 'prop-types';
import { Button, Card, Text } from 'react-native-paper';

const PetItem = ({ pet }) => {
  return (
    <Card
      mode="contained"
      style={styles.card}
      onPress={() => console.log('Ir a detalle de mascota')}
    >
      <Card.Cover source={{ uri: pet.image }} />
      <Card.Content>
        <Text variant="bodyLarge">{pet.description}</Text>
        <Text variant="bodyMedium">
          Encontrado en: {pet.city}, {pet.province}.
        </Text>
        <Text variant="bodyMedium">Fecha de hallazgo: {pet.dateFound}</Text>
      </Card.Content>
      <Card.Actions style={styles.cardActions}>
        <Button
          mode="contained"
          buttonColor={colors.lightBlue}
          onPress={() =>
            console.log(
              'Se presionó ver detalle',
              pet.id
            )
          }
        >
          Ver detalle
        </Button>
      </Card.Actions>
    </Card>
  );
};

PetItem.propTypes = {
  pet: PropTypes.object.isRequired,
};

export default PetItem;

const styles = StyleSheet.create({
  card: {
    width: '90%',
    backgroundColor: colors.olive,
    marginTop: 15,
    alignSelf: 'center',
  },
  cardActions: {
    flexDirection: 'column',
  },
});
