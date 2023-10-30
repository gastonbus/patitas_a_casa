import { Pressable, StyleSheet, View, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { PaperProvider, Text } from 'react-native-paper';
import { useState } from 'react';
import ProfileFieldModal from '../components/ProfileFieldModal';

const Profile = () => {
  const defaultImage =
    'https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp';

  const [modalVisible, setModalVisible] = useState(false);
  const [field, setField] = useState('');
  const [newValueText, setNewValueText] = useState('');
  
  const showModal = (editingField) => {
    setField(editingField);
    setModalVisible(true);
  };
  const hideModal = () => {
    setField('');
    setModalVisible(false);
  };

  return (
    <PaperProvider>
      <ScrollView style={styles.container}>
        <ProfileFieldModal
          modalVisible={modalVisible}
          hideModal={hideModal}
          newValueText={newValueText}
          setNewValueText={setNewValueText}
          field={field}
        />
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
              <Pressable onPress={() => showModal("Nombre")}>
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
              <Pressable onPress={() => showModal("Email")}>
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
              <Pressable
                onPress={() => showModal("Número de contacto")}
              >
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
            mantenelos actualizados para facilitar el encuentro entre las
            mascotas y sus dueños!
          </Text>
        </View>
      </ScrollView>
    </PaperProvider>
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
    marginVertical: 5,
  },
  editIcon: {
    marginLeft: 15,
  },
});
