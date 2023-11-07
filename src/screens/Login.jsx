import { useState } from 'react';
import { Button, TextInput, Text } from 'react-native-paper';
import { colors } from '../theme/colors';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { firebaseAuth } from '../firebase/firebaseAuth';
import { useDispatch } from 'react-redux';
import { setIdToken, setUid, setUser } from '../redux/slices/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      const response = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      // console.log('firebase response', response);
      await AsyncStorage.setItem(
        'user',
        JSON.stringify({
          userEmail: response.user.email,
          userToken: response._tokenResponse.idToken,
        })
      );
      dispatch(setUser(response.user.email));
      dispatch(setUid(response.user.uid));
      dispatch(setIdToken(response._tokenResponse.idToken));
      setIsLoading(false);
    } catch (error) {
      console.log('Ocurrió un error al intentar ingresar:', error);
      navigation.navigate('ErrorMessage', { message: error });
    }
  };

  return (
    <View style={styles.container}>
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
        loading={isLoading}
        onPress={handleLogin}
        style={styles.loginButton}
      >
        Ingresar
      </Button>
      <View style={styles.registerArea}>
        <Text>Aún no tenés una cuenta?</Text>
        <Button
          mode="text"
          textColor={colors.darkBlue}
          onPress={() => navigation.navigate('Register')}
        >
          Registrate!
        </Button>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },

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
