import { StyleSheet, View, Image, Pressable, ScrollView } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { colors } from '../theme/colors';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const PetDetails = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={styles.petImage}
            source={{
              uri: 'https://images.unsplash.com/photo-1453227588063-bb302b62f50b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
          />
          <View style={styles.descriptionContainer}>
            <Text variant="titleMedium" style={{ textAlign: 'center' }}>
              Encontrado el día {'27/10/23'} en {'Mar de Plata'},{' '}
              {'Buenos Aires'}.
            </Text>
            <Text variant="bodyLarge" style={styles.descriptionText}>
              {
                'Cachorro de raza pequeña encontrado en el parque. Muy juguetón y amigable.'
              }
            </Text>
            <Text variant="bodyLarge">Tamaño: {'Grande'}.</Text>
            <Text variant="bodyLarge">Edad estimada: {'8 años'}.</Text>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
              <Text variant="bodyLarge" style={{ marginRight: 10 }}>
                Collar{' '}
                <AntDesign
                  name="checkcircle"
                  size={14}
                  color={colors.darkOlive}
                />
              </Text>
              <Text variant="bodyLarge" style={{ marginLeft: 10 }}>
                Correa{' '}
                <AntDesign name="closecircle" size={14} color={colors.red} />
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
    </SafeAreaView>
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
    marginHorizontal: 10
  },
});
