import { useState } from 'react';
import { Button, TextInput, Text } from 'react-native-paper';
import { colors } from '../theme/colors';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { firebaseAuth } from '../firebase/firebaseAuth';
import { usePutUserMutation } from '../services/pacApi';

const Register = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  // eslint-disable-next-line no-unused-vars
  const [putUser, result] = usePutUserMutation();

  const { status } = result;
  console.log('status', JSON.stringify(status, null, 2));

  const handleRegister = async () => {
    try {
      const response = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      console.log(response);
      await putUser({
        email: response.user.email,
        uid: response.user.uid,
        contactNumber: '',
        image:
          'https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp',
      });

      navigation.navigate('Login');
    } catch (error) {
      console.log('Ocurrió un error en el registro:', error);
      navigation.navigate('ErrorMessage', { message: error });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text variant="headlineLarge" style={styles.title}>
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
        loading={status === 'pending'}
        onPress={handleRegister}
        style={styles.loginButton}
      >
        Registrarme
      </Button>
      <View style={styles.registerArea}>
        <Text>Ya tenés una cuenta?</Text>
        <Button
          mode="text"
          textColor={colors.darkBlue}
          onPress={() => navigation.navigate('Login')}
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
    justifyContent: 'center',
    marginTop: 40,
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
