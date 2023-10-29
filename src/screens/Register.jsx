import { useState } from 'react';
import { Button, TextInput, Text } from 'react-native-paper';
import { colors } from '../theme/colors';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const Register = () => {

  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <Text variant="headlineLarge" style={styles.title}>
        Completá los datos para registrarte:
      </Text>

      <TextInput
        label="Nombre y Apellido"
        value={name}
        mode="outlined"
        placeholder="Ingrese su nombre y apellido"
        activeOutlineColor={colors.darkBlue}
        outlineColor={colors.lightBlue}
        style={styles.input}
        onChangeText={(text) => setName(text)}
      />
      {
        //TODO: <Text variant="bodySmall" style={{color: colors.red}}>Email no válido</Text>
      }
      <TextInput
        label="Número de contacto"
        value={contactNumber}
        mode="outlined"
        placeholder="Ingrese su número de teléfono"
        activeOutlineColor={colors.darkBlue}
        outlineColor={colors.lightBlue}
        style={styles.input}
        onChangeText={(text) => setContactNumber(text)}
      />
      {
        //TODO: <Text variant="bodySmall" style={{color: colors.red}}>Email no válido</Text>
      }
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
          onPress={() => navigation.navigate("Login")}
        >
          Ingresá!
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: "center",
    marginTop: 40
  },
  title: {
    color: colors.darkBlue,
    textAlign: 'center',
    marginBottom: 15,
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
