import { Pressable, StyleSheet, View, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { Text } from 'react-native-paper';

const Profile = () => {
  const defaultImage =
    'https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp';

  return (
    <ScrollView style={styles.container}>
      <View style={styles.infoContainer}>
        <Image
          style={styles.image}
          source={{
            uri: defaultImage,
          }}
        />
        <View style={styles.buttonsContainer}>
          <Pressable onPress={() => console.log('Tomar foto')}>
            <FontAwesome name="camera" size={36} color={colors.darkBlue} />
          </Pressable>
          <Pressable onPress={() => console.log('Abrir galería')}>
            <FontAwesome name="picture-o" size={36} color={colors.darkBlue} />
          </Pressable>
        </View>
        <View style={styles.existingProfileDataContainer}>
          <View style={styles.existingProfileDataLine}>
            <Text variant="headlineSmall" style={styles.detailsText}>
              {'Gaston' + ' ' + 'Bustamante'}
            </Text>
            <Pressable onPress={() => console.log('Editar nombre')}>
              <FontAwesome
                name="edit"
                size={24}
                color={colors.ultraLightBlue}
                style={styles.editIcon}
              />
            </Pressable>
          </View>
          <View style={styles.existingProfileDataLine}>
            <Text variant="bodyLarge" style={styles.detailsText}>
              {'mail@mail.com'}
            </Text>
            <Pressable onPress={() => console.log('Editar email')}>
              <FontAwesome
                name="edit"
                size={20}
                color={colors.ultraLightBlue}
                style={styles.editIcon}
                />
            </Pressable>
          </View>
          <View style={styles.existingProfileDataLine}>
            <Text variant="bodyLarge" style={styles.detailsText}>
              {'+541134658765'}
            </Text>
            <Pressable onPress={() => console.log('Editar número de contacto')}>
              <FontAwesome
                name="edit"
                size={20}
                color={colors.ultraLightBlue}
                style={styles.editIcon}
              />
            </Pressable>
          </View>
        </View>
        <Text variant="bodyLarge" style={styles.bottomText}>
          Estos son los datos tuyos que tenemos registrados. Por favor,
          mantenelos actualizados para facilitar el encuentro entre las mascotas
          y sus dueños!
        </Text>
        {/* <Button
          mode="contained"
          buttonColor={colors.lightBlue}
          onPress={() =>
            console.log(
              
            )
          }
        >
          Editar
        </Button> */}
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  infoContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
  image: {
    height: 220,
    width: 220,
    borderRadius: 100,
  },
  buttonsContainer: {
    width: 100,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  existingProfileDataContainer: {
    width: '80%',
    marginTop: 20,
    backgroundColor: colors.darkBlue,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  detailsText: {
    color: colors.ultraLightBlue,
  },
  bottomText: {
    width: '80%',
    marginTop: 20,
    textAlign: 'center',
    color: colors.red,
  },
  existingProfileDataLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5
  },
  editIcon: {
    marginLeft: 15
  }
});
