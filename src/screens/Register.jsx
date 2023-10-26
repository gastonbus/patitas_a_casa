import { useState } from 'react';
import { Button, TextInput, Text } from 'react-native-paper';
import { colors } from '../theme/colors';
import { View, StyleSheet } from 'react-native';


const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  return (
    <>
      <Text variant="bodyLarge" style={{ color: colors.darkBlue }}>
        Completá los datos para registrarte:
      </Text>

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
        //TODO: <Text variant="bodySmall" style={{color: colors.red}}>Email no válido</Text>
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
        onPress={() => console.log('Se presionó Resgistrarme')}
        style={styles.loginButton}
      >
        Registrarme
      </Button>

      <View style={styles.registerArea}>
        <Text>Ya tenés una cuenta?</Text>
        <Button
          mode="text"
          textColor={colors.darkBlue}
          onPress={() => console.log('Se presionó Ingresar')}
        >
          Ingresá!
        </Button>
      </View>
    </>
  );
};

export default Register;

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
