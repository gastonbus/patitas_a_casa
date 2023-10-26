import { useState } from 'react';
import { Button, TextInput, Text } from 'react-native-paper';
import { colors } from '../theme/colors';
import { View, StyleSheet } from 'react-native';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  return (
    <>
      <View style={styles.title}>
        <Text variant="headlineLarge" style={{ color: colors.darkBlue }}>
          Bienvenido a...
        </Text>
        <Text variant="displaySmall" style={{ color: colors.darkBlue }}>
          &quot;Patitas a Casa&quot;
        </Text>
      </View>
      <TextInput
        label="Email"
        value={email}
        autoCapitalize="none"
        mode="outlined"
        placeholder="Ingrese su email"
        activeOutlineColor={colors.darkBlue}
        outlineColor={colors.lightBlue}
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
      />
      {
      //TODO: <HelperText type="error" visible={hasErrors()}>
      // Email address is invalid!
      // </HelperText>
      }
      <TextInput
        label="Password"
        value={password}
        autoCapitalize="none"
        secureTextEntry={isPasswordHidden}
        mode="outlined"
        placeholder="Ingrese su contraseña"
        activeOutlineColor={colors.darkBlue}
        outlineColor={colors.lightBlue}
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        right={
          <TextInput.Icon
            icon="eye"
            onPress={() => setIsPasswordHidden(!isPasswordHidden)}
          />
        }
      />

      <Button
        mode="contained"
        buttonColor={colors.lightBlue}
        loading={false} //TODO: modificar luego colocandole una variable de estado
        onPress={() => console.log('Pressed')}
        style={styles.loginButton}
      >
        Ingresar
      </Button>

      <View style={styles.registerArea}>
        <Text>Aún no tenés una cuenta?</Text>
        <Button
          mode="text"
          textColor={colors.darkBlue}
          onPress={() => console.log('Se presionó Registrate')}
        >
          Registrate!
        </Button>
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  title: {
    marginBottom: 15,
    alignItems: 'center',
  },
  input: { width: '80%', marginTop: 15 },
  loginButton: {
    marginTop: 20,
  },
  registerArea: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
