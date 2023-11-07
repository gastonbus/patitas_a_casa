/* eslint-disable react/prop-types */
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  ScrollView,
  Linking,
} from 'react-native';
import { Button, Text } from 'react-native-paper';
import { colors } from '../theme/colors';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const PetDetails = () => {
  const navigation = useNavigation();

  const pet = useSelector((state) => state.homeSlice.selectedPet);

  const yesIcon = (
    <AntDesign name="checkcircle" size={14} color={colors.darkOlive} />
  );
  const noIcon = <AntDesign name="closecircle" size={14} color={colors.red} />;

  const callNumber = () => {
    Linking.openURL(`tel:${pet.contactNumber}`);
  };

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
              Encontrado el día {pet.dateFound} en {pet.city}, {pet.province}.
            </Text>
            <Text variant="bodyLarge" style={styles.descriptionText}>
              {pet.description}
            </Text>
            <Text variant="bodyLarge">Tamaño: {pet.size}.</Text>
            <Text variant="bodyLarge">Edad estimada: {pet.estimatedAge}.</Text>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
              <Text variant="bodyLarge" style={{ marginRight: 10 }}>
                Collar {pet.collar ? yesIcon : noIcon}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <Button
        mode="contained"
        buttonColor={colors.lightBlue}
        style={styles.button}
        onPress={() => navigation.navigate('PetLoc')}
      >
        Ver ubicación en mapa
      </Button>

      <View style={styles.finderDetails}>
        <Text variant="bodyLarge" style={styles.finderDetailsText}>
          Publicado por: <Text style={styles.boldText}>{pet.finder}</Text>
        </Text>
        <Text variant="bodyLarge" style={styles.finderDetailsText}>
          Nro. de contacto:{' '}
          <Text style={{ fontWeight: 'bold', color: colors.darkBlue }}>
            {pet.contactNumber}
          </Text>
        </Text>
        <Pressable onPress={callNumber}>
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
