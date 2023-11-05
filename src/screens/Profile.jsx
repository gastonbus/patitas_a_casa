import { Pressable, StyleSheet, View, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { PaperProvider, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import { useGetUserDetailsQuery, usePutUserMutation } from '../services/pacApi';
import ProfileField from '../components/ProfileField';
import { clearUser } from '../redux/slices/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

const Profile = () => {
  const uid = useSelector((state) => state.authSlice.uid);

  const { data: userDetails, refetch } = useGetUserDetailsQuery(uid);

  // eslint-disable-next-line no-unused-vars
  const [putUser, result] = usePutUserMutation();

  const dispatch = useDispatch();

  const onUpdateField = async (field, newValue) => {
    try {
      if (field === 'name') {
        await putUser({
          ...userDetails,
          name: newValue,
        });
      }
      if (field === 'image') {
        await putUser({
          ...userDetails,
          image: newValue,
        });
      }
      if (field === 'contactNumber') {
        await putUser({
          ...userDetails,
          contactNumber: newValue,
        });
      }
      refetch();
    } catch (error) {
      console.log('Ocurrió un error al intentar actualizar el campo:', error);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      base64: true,
    });

    // console.log(result);

    if (!result.canceled) {
      await onUpdateField(
        'image',
        `data:image/jpeg;base64,${result.assets[0].base64}`
      );
    }
  };

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    console.log('permissionResult', permissionResult);
    if (!permissionResult.granted) {
      console.log('Permiso NO otorgado');
    } else {
      const result = await ImagePicker.launchCameraAsync({
        base64: true,
      });
      console.log('result', result);

      if (!result.canceled) {
        await onUpdateField(
          'image',
          `data:image/jpeg;base64,${result.assets[0].base64}`
        );
        refetch();
      }
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('user');
      dispatch(clearUser());
    } catch (error) {
      console.log('Ocurrió un error al intentar cerrar sesión.');
    }
  };

  const onLogout = () => {
    Alert.alert('Cerrar sesión', '¿Está seguro que desea cerrar sesión?', [
      {
        text: 'No',
        style: 'cancel',
      },
      { text: 'Si', onPress: () => handleLogout() },
    ]);
  };
  return (
    <PaperProvider>
      <ScrollView style={styles.container}>
        <View style={styles.infoContainer}>
          <Image
            style={styles.image}
            source={{
              uri: userDetails?.image,
            }}
          />
          <View style={styles.buttonsContainer}>
            <Pressable onPress={openCamera}>
              <FontAwesome name="camera" size={36} color={colors.darkBlue} />
            </Pressable>
            <Pressable onPress={pickImage}>
              <FontAwesome name="picture-o" size={36} color={colors.darkBlue} />
            </Pressable>
            <Pressable onPress={onLogout}>
              <FontAwesome name="sign-out" size={36} color={colors.darkBlue} />
            </Pressable>
          </View>
          <View style={styles.existingProfileDataContainer}>
            <ProfileField
              field={'name'}
              userDetails={userDetails}
              onUpdateField={onUpdateField}
            />
            <ProfileField
              field={'contactNumber'}
              userDetails={userDetails}
              onUpdateField={onUpdateField}
            />
          </View>
          <Text variant="bodyLarge" style={styles.bottomText}>
            Estos son tus datos registrados en Patitas a Casa. Por favor,
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
    borderRadius: 200,
  },
  buttonsContainer: {
    width: '50%',
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
  bottomText: {
    width: '80%',
    marginTop: 20,
    textAlign: 'center',
    color: colors.red,
    fontFamily: 'Agbalumo',
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 150,
    marginBottom: 10,
  },
});
