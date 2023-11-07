/* eslint-disable react/prop-types */
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { colors } from '../theme/colors';
import { useNavigation } from '@react-navigation/native';

const ErrorMessage = ({ message }) => {
  const navigation = useNavigation();

  return (
    <View>
      <Text variant="titleLarge" style={styles.text}>
        Ocurrió un error
      </Text>
      <Text variant="bodyLarge" style={styles.text}>
        {message}
      </Text>
      <Button
        mode="contained"
        buttonColor={colors.red}
        onPress={() => navigation.navigate('Login')}
        style={styles.loginButton}
      >
        OK
      </Button>
    </View>
  );
};

export default ErrorMessage;

const styles = StyleSheet.create({
  loginButton: {
    marginTop: 20,
  },
  text: {
    color: colors.red,
    textAlign: 'center',
    marginTop: 10,
  },
});
