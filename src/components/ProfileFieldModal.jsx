/* eslint-disable react/prop-types */
import { StyleSheet, View } from 'react-native';
import { Button, Modal, Portal, TextInput } from 'react-native-paper';
import { colors } from '../theme/colors';

const ProfileFieldModal = ({
  modalVisible,
  hideModal,
  newValueText,
  setNewValueText,
  field
}) => {
  return (
    <Portal>
      <Modal
        visible={modalVisible}
        onDismiss={hideModal}
        contentContainerStyle={styles.modalContainerStyle}
      >
        <TextInput
          label={field}
          value={newValueText}
          onChangeText={(text) => setNewValueText(text)}
        />
        <View style={styles.modalButtonsContainer}>
          <Button mode="outlined" textColor={colors.darkBlue} style={{borderColor: colors.darkBlue}} onPress={hideModal}>
            Cancelar
          </Button>
          <Button mode="contained" buttonColor={colors.darkBlue} onPress={() => console.log('Guardar nuevo valor del campo', field)}>
            Guardar
          </Button>
        </View>
      </Modal>
    </Portal>
  );
};

export default ProfileFieldModal;

const styles = StyleSheet.create({
  modalContainerStyle: {
    backgroundColor: colors.yellow,
    margin: 25,
    height: 250,
    padding: 15,
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
});
