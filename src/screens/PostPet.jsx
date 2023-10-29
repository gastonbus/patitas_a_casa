import { Controller, useForm } from 'react-hook-form';
import { ScrollView, StyleSheet, TextInput } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { colors } from '../theme/colors';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';

const PostPet = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const { handleSubmit, control } = useForm({
    defaultValues: {
      category: '',
      city: '',
      province: '',
      description: '',
      dateFound: '',
      specificDetails: '',
      color: '',
      breed: '',
    },
  });
  const onSubmit = (data) => console.log('data');

  return (
    <ScrollView style={styles.container}>
      <Picker
        style={{
          backgroundColor: colors.ultraLightBlue,
          height: 50,
          marginVertical: 10,
        }}
        selectedValue={selectedCategory}
        onValueChange={(itemValue) => setSelectedCategory(itemValue)}
      >
        <Picker.Item label="Canino" value="canino" />
        <Picker.Item label="Felino" value="felino" />
        <Picker.Item label="Ave" value="ave" />
        <Picker.Item label="Roedor" value="roedor" />
        <Picker.Item label="Otro" value="otro" />
      </Picker>
      <TextInput
        name="city"
        placeholder="Ciudad"
        style={styles.input}
        onChangeText={() => console.log('Cambia TextInput Ciudad')}
        value=""
      />
      <TextInput
        name="dateTime"
        placeholder="Fecha y hora"
        style={styles.input}
        onChangeText={() => console.log('Cambia TextInput dateTime')}
        value=""
      />
      <TextInput
        name="province"
        placeholder="Provincia"
        style={styles.input}
        onChangeText={() => console.log('Cambia TextInput Provincia')}
        value=""
      />
      <TextInput
        name="color"
        placeholder="Color"
        style={styles.input}
        onChangeText={() => console.log('Cambia TextInput Color')}
        value=""
      />
      <TextInput
        name="breed"
        placeholder="Raza"
        style={styles.input}
        onChangeText={() => console.log('Cambia TextInput Raza')}
        value=""
      />
      <TextInput
        name="description"
        placeholder="Agrega una descripción"
        editable
        multiline
        numberOfLines={5}
        maxLength={400}
        onChangeText={() => console.log('Cambia TextInput Descripción')}
        value=""
        style={styles.descriptionInput}
      />
      <TextInput
        name="specificDetails"
        placeholder="Agrega algun detalle particular"
        editable
        multiline
        numberOfLines={2}
        maxLength={200}
        onChangeText={() => console.log('Cambia TextInput specificDetails')}
        value=""
        style={styles.specificDetailsInput}
      />

      {/* <Controller
        control={control}
        name="category"
        // rules={{
        //   required: true,
        // }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onChangeText={(value) => onChange(value)}
            onBlur={onBlur}
            value={value}
            label="Categoría"
            mode="outlined"
            style={styles.input}
          />
        )}
      />
*/}
      <Button
        mode="contained"
        buttonColor={colors.lightBlue}
        loading={false} //TODO: modificar luego colocandole una variable de estado
        onPress={() => {
          // console.log('presionado');
          handleSubmit(onSubmit);
        }}
      >
        Publicar
      </Button> 
    </ScrollView>
  );
};

export default PostPet;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    backgroundColor: colors.olive,
  },
  input: {
    height: 50,
    backgroundColor: colors.ultraLightBlue,
    padding: 10,
    marginVertical: 10,
  },
  descriptionInput: {
    backgroundColor: colors.ultraLightBlue,
    height: 200,
    textAlignVertical: 'top',
    marginVertical: 10
  },
  specificDetailsInput: {
    backgroundColor: colors.ultraLightBlue,
    height: 100,
    textAlignVertical: 'top',
    marginVertical: 10
  },
});
