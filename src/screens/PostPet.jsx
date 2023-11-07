import { Controller, useForm } from 'react-hook-form';
import { ScrollView, StyleSheet, TextInput } from 'react-native';
import { Button, Checkbox } from 'react-native-paper';
import { colors } from '../theme/colors';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import {
  useGetCategoriesQuery,
  useGetPetsQuery,
  useGetUserDetailsQuery,
  usePutPetMutation,
} from '../services/pacApi';
import { provinces } from '../helpers/provinces';
import { Text } from 'react-native';
import { View } from 'react-native';
import { sizes } from '../helpers/sizes';
import { Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import { useSelector } from 'react-redux';

const PostPet = () => {
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);

  const uid = useSelector((state) => state.authSlice.uid);

  const { data: userDetails } = useGetUserDetailsQuery(uid);
  const { data: pets } = useGetPetsQuery();

  const { data: petsCategories, isLoading: isLoadingCategories } =
    useGetCategoriesQuery();

  const { control, handleSubmit, formState, reset } = useForm();

  const { errors, isSubmitting } = formState;

  // console.log(selectedImage);

  // eslint-disable-next-line no-unused-vars
  const [postPet, result] = usePutPetMutation();

  const onReset = () => {
    setSelectedImage('');
    setSelectedLocation('');
    reset();
  };

  const onSubmit = async (data) => {
    const newPet = {
      id: new Date().getTime(),
      ...data,
      finder: userDetails.email,
      contactNumber: userDetails.contactNumber,
      image: selectedImage,
      latitude: selectedLocation?.coords.latitude,
      longitude: selectedLocation?.coords.longitude,
    };
    const allPetsWithAddedPet = [...pets, newPet];
    console.log(
      'Datos a enviar:',
      JSON.stringify(allPetsWithAddedPet, null, 2)
    );
    await postPet(allPetsWithAddedPet);
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
      setSelectedImage(`data:image/jpeg;base64,${result.assets[0].base64}`);
    }
  };

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    // console.log('permissionResult', permissionResult);
    if (!permissionResult.granted) {
      console.log('Permiso NO otorgado');
    } else {
      const result = await ImagePicker.launchCameraAsync({
        base64: true,
      });
      // console.log('result', result);

      if (!result.canceled) {
        setSelectedImage(
          'image',
          `data:image/jpeg;base64,${result.assets[0].base64}`
        );
      }
    }
  };

  const getCoords = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      console.log('Permiso fue denegado');
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    // console.log(location.coords);
    setSelectedLocation(location);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.alertText}>
          Antes de publicar un animal, es necesario que verifiques que el email
          y el teléfono cargados en tu perfil sean correctos.
        </Text>
        <View style={styles.pickerContainer}>
          <Controller
            name="category"
            defaultValue=""
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <Picker
                style={styles.selectInput}
                selectedValue={value}
                onValueChange={onChange}
              >
                <Picker.Item label="Seleccionar categoría" value="" />
                {isLoadingCategories ? (
                  <Picker.Item label={'Cargando...'} value="" />
                ) : (
                  petsCategories &&
                  petsCategories.map((category) => (
                    <Picker.Item
                      key={category}
                      label={category}
                      value={category}
                    />
                  ))
                )}
              </Picker>
            )}
          />
        </View>
        {errors.category && (
          <Text style={styles.errorText}>El campo es requerido</Text>
        )}
        <View style={styles.pickerContainer}>
          <Controller
            name="size"
            defaultValue=""
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <Picker
                style={styles.selectInput}
                selectedValue={value}
                onValueChange={onChange}
              >
                <Picker.Item label="Seleccionar tamaño" value="" />
                {sizes.map((size) => (
                  <Picker.Item key={size} label={size} value={size} />
                ))}
              </Picker>
            )}
          />
        </View>
        {errors.size && (
          <Text style={styles.errorText}>El campo es requerido</Text>
        )}
        <Controller
          name="estimatedAge"
          defaultValue=""
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Edad estimada (días, meses o años)"
              style={styles.textInput}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.estimatedAge && (
          <Text style={styles.errorText}>El campo es requerido</Text>
        )}
        <Controller
          name="color"
          defaultValue=""
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Color"
              style={styles.textInput}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.color && (
          <Text style={styles.errorText}>El campo es requerido</Text>
        )}

        <Controller
          name="breed"
          defaultValue=""
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Raza"
              style={styles.textInput}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.breed && (
          <Text style={styles.errorText}>El campo es requerido</Text>
        )}
        <Controller
          name="dateFound"
          defaultValue=""
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Fecha en que encontró al animal (dd/mm/aaaa)"
              style={styles.textInput}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.color && (
          <Text style={styles.errorText}>El campo es requerido</Text>
        )}

        <View style={styles.pickerContainer}>
          <Controller
            name="province"
            defaultValue=""
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <Picker
                style={styles.selectInput}
                selectedValue={value}
                onValueChange={onChange}
              >
                <Picker.Item label="Seleccionar provincia" value="" />
                {provinces.map((category) => (
                  <Picker.Item
                    key={category}
                    label={category}
                    value={category}
                  />
                ))}
              </Picker>
            )}
          />
        </View>
        {errors.province && (
          <Text style={styles.errorText}>El campo es requerido</Text>
        )}
        <Controller
          name="city"
          defaultValue=""
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Ciudad"
              style={styles.textInput}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.city && (
          <Text style={styles.errorText}>El campo es requerido</Text>
        )}
        <Controller
          name="description"
          defaultValue=""
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Agrega una descripción"
              editable
              multiline
              numberOfLines={5}
              maxLength={400}
              onChangeText={onChange}
              value={value}
              style={styles.descriptionInput}
            />
          )}
        />
        {errors.description && (
          <Text style={styles.errorText}>El campo es requerido</Text>
        )}
        <View style={styles.checkBoxContainer}>
          <Controller
            name="isCollar"
            defaultValue={false}
            control={control}
            rules={{}}
            render={({ field: { onChange, value } }) => (
              <Checkbox
                status={value ? 'checked' : 'unchecked'}
                onPress={() => onChange(!value)}
                color={colors.darkBlue}
                uncheckedColor={colors.darkBlue}
              />
            )}
          />
          <Text style={styles.text}>Apareció con collar</Text>
        </View>
        <Text style={styles.text}>
          Tomá una foto del animal o seleccionala de la galería presionando el
          ícono correspondiente:
        </Text>
        <View style={styles.buttonsContainer}>
          <Pressable onPress={openCamera}>
            <FontAwesome name="camera" size={36} color={colors.darkBlue} />
          </Pressable>
          <Pressable onPress={pickImage}>
            <FontAwesome name="picture-o" size={36} color={colors.darkBlue} />
          </Pressable>
        </View>
        {selectedImage && (
          <Text style={styles.resultText}>La imagen se obtuvo con éxito.</Text>
        )}

        <Text style={styles.text}>
          Obtené las coordenadas geofráficas del lugar donde lo encontraste
          presionando el ícono:
        </Text>
        <View style={styles.buttonsContainer}>
          <Pressable onPress={getCoords}>
            <FontAwesome name="map-marker" size={36} color={colors.darkBlue} />
          </Pressable>
        </View>
        {selectedLocation && (
          <Text style={styles.resultText}>
            Coordenadas obtenidas:{' '}
            {selectedLocation.coords.latitude +
              ', ' +
              selectedLocation.coords.latitude}
          </Text>
        )}
        <Button
          mode="outlined"
          textColor={colors.darkBlue}
          onPress={onReset}
          style={styles.resetButton}
        >
          Reset
        </Button>
        <Button
          mode="contained"
          buttonColor={colors.lightBlue}
          loading={isSubmitting}
          onPress={handleSubmit(onSubmit)}
          style={styles.submitButton}
        >
          Publicar
        </Button>
      </View>
    </ScrollView>
  );
};

export default PostPet;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    backgroundColor: colors.olive,
    paddingBottom: 45,
  },
  pickerContainer: {
    backgroundColor: colors.ultraLightBlue,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.ultraLightBlue,
    justifyContent: 'center',
    marginVertical: 5,
  },
  selectInput: {
    backgroundColor: colors.ultraLightBlue,
    height: 30,
    marginVertical: 10,
  },
  textInput: {
    height: 55,
    backgroundColor: colors.ultraLightBlue,
    borderRadius: 20,
    paddingHorizontal: 16,
    marginVertical: 5,
  },
  descriptionInput: {
    backgroundColor: colors.ultraLightBlue,
    height: 200,
    textAlignVertical: 'top',
    padding: 16,
    marginVertical: 10,
    borderRadius: 20,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    // alignItems: 'center',
  },
  text: {
    color: colors.darkBlue,
    alignSelf: 'center',
    // marginBottom: 10,
    textAlign: 'center',
  },
  alertText: {
    color: colors.red,
    alignSelf: 'center',
    marginBottom: 10,
    fontFamily: 'Agbalumo',
    fontSize: 24,
    textAlign: 'center',
  },
  resultText: {
    color: colors.darkOlive,
    alignSelf: 'center',
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 20,
    marginTop: 10,
  },
  resetButton: {
    borderColor: colors.darkBlue,
  },
  submitButton: {
    marginVertical: 15,
  },
  errorText: {
    color: colors.red,
    marginLeft: 16,
    marginBottom: 10,
  },
});
