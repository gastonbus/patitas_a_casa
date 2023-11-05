/* eslint-disable react/prop-types */
import { StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { colors } from '../theme/colors';
import { useState } from 'react';
import { Text, TextInput } from 'react-native-paper';

const ProfileField = ({ field, userDetails, onUpdateField }) => {
  const [editingMode, setEditingMode] = useState(false);
  const [newValue, setNewValue] = useState('');

  const getEmptyFieldText = () => {
    if (field === 'name') {
      return 'Cargá tu nombre completo';
    }
    if (field === 'contactNumber') {
      return 'Cargá tu teléfono';
    }
  };

  const onConfirmChange = async () => {
    await onUpdateField(field, newValue);
    setEditingMode(false);
  };

  return (
    <View style={styles.existingProfileDataLine}>
      {editingMode ? (
        <>
          <TextInput
            mode="outlined"
            value={newValue}
            autoCapitalize="words"
            onChangeText={(text) => setNewValue(text)}
            style={styles.textInput}
          />
          <Pressable onPress={onConfirmChange}>
            <FontAwesome
              name="check"
              size={36}
              color={colors.ultraLightBlue}
              style={styles.editIcon}
            />
          </Pressable>
        </>
      ) : (
        <>
          <Text variant="bodyLarge" style={styles.detailsText}>
            {userDetails && userDetails[field]
              ? userDetails[field]
              : getEmptyFieldText()}
          </Text>
          <Pressable onPress={() => setEditingMode(true)}>
            <FontAwesome
              name="edit"
              size={20}
              color={colors.ultraLightBlue}
              style={styles.editIcon}
            />
          </Pressable>
        </>
      )}
    </View>
  );
};

export default ProfileField;

const styles = StyleSheet.create({
  detailsText: {
    color: colors.ultraLightBlue,
  },
  existingProfileDataLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  editIcon: {
    marginLeft: 15,
  },
  textInput: {
    height: 35,
    width: '80%',
  },
});
