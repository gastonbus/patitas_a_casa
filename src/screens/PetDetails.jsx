/* eslint-disable react/prop-types */
import { StyleSheet, View, Image, Pressable, ScrollView } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { colors } from '../theme/colors';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const PetDetails = ({route}) => {
  const { pet } = route.params;

  const yesIcon = <AntDesign name="checkcircle" size={14} color={colors.darkOlive} />
  const noIcon = <AntDesign name="closecircle" size={14} color={colors.red} />

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={styles.petImage}
            source={{
              uri: pet.image,
            }}
          />
          <View style={styles.descriptionContainer}>
            <Text variant="titleMedium" style={{ textAlign: 'center' }}>
              Encontrado el día {pet.dateFound} en {pet.city},{pet.province}.
            </Text>
            <Text variant="bodyLarge" style={styles.descriptionText}>
              {pet.description}
            </Text>
            <Text variant="bodyLarge">Tamaño: {pet.size}.</Text>
            <Text variant="bodyLarge">Edad estimada: {pet.estimatedAge}.</Text>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
              <Text variant="bodyLarge" style={{ marginRight: 10 }}>
                Collar{' '}
                {pet.leash === "Correa y collar" || pet.leash === "Solo collar" ? yesIcon : noIcon}
              </Text>
              <Text variant="bodyLarge" style={{ marginLeft: 10 }}>
                Correa{' '}
                {pet.leash === "Correa y collar" ? yesIcon : noIcon}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <Button
        mode="contained"
        buttonColor={colors.lightBlue}
        style={styles.button}
        onPress={() =>
          console.log(
            'Se presionó ver mapa (punto donde se encontró el animal).'
          )
        }
      >
        Ver ubicación en mapa
      </Button>

      <View style={styles.finderDetails}>
        <Text variant="bodyLarge" style={styles.finderDetailsText}>
          Publicado por:{' '}
          <Text style={styles.boldText}>{'mascotero74@gmail.com'}</Text>
        </Text>
        <Text variant="bodyLarge" style={styles.finderDetailsText}>
          Nro. de contacto:{' '}
          <Text style={{ fontWeight: 'bold', color: colors.darkBlue }}>
            {'+5401234567'}
          </Text>
        </Text>
        <Pressable onPress={() => console.log('Llamar al publicante')}>
          <Ionicons name="call" size={54} color={colors.darkOlive} />
        </Pressable>
      </View>
    </>
  );
};

export default PetDetails;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: 'center',
    backgroundColor: colors.olive,
  },
  petImage: {
    width: 300,
    height: 300,
    borderRadius: 15,
  },
  descriptionContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  descriptionText: {
    textAlign: 'center',
  },
  finderDetails: {
    alignSelf: 'stretch',
    backgroundColor: colors.lightGray,
    alignItems: 'center',
    borderRadius: 20,
    margin: 10,
    padding: 10,
  },
  finderDetailsText: {
    color: colors.darkBlue,
  },
  boldText: {
    fontWeight: 'bold',
    color: colors.darkBlue,
  },
  button: {
    marginTop: 10,
    marginHorizontal: 10,
  },
});