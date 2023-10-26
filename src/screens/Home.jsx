/* eslint-disable no-undef */
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { colors } from '../theme/colors';

const Home = () => {
  return (
    <>
      <Image style={styles.logo} source={require('./../../assets/logo.png')} />
      <Text variant="displayMedium" style={styles.textWelcome}>
        Bienvenido!
      </Text>
      <Text variant="bodyLarge" style={styles.text}>
        ¿Perdiste a tu mascota? Ingresá a buscarla haciendo click en el siguiente botón para ver si otro usuario la rescató. Ojalá la encuentres!
      </Text>
      <Button
        mode="contained"
        buttonColor={colors.lightBlue}
        textColor={colors.yellow}
        style={styles.button}
        onPress={() => console.log('Se presionó Buscar a mi mascota')}
      >
        <Text variant="headlineSmall" style={styles.buttonText}>Buscar a mi mascota</Text>
      </Button>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
  },
  textWelcome: {
    marginTop: 15,
    color: colors.darkBlue,
  },
  text: {
    textAlign: 'center',
    color: colors.darkBlue,
    margin: 10,
  },
  button: {
    width: '80%',
    marginTop: 15,
    padding: 5
  },
  buttonText: {
    color: colors.yellow,
    fontWeight: "bold",
  }
});
