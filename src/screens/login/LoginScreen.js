import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import globalStyles from '../../styles/globalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useGlobalState from '../../store/auth';

const LoginScreen = ({ navigation }) => {

  const { setUser } = useGlobalState();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');


  const handleLogin = () => {
    // Aquí puedes manejar la lógica de inicio de sesión
    // Por ejemplo, verificar las credenciales y navegar a la pantalla de inicio
    if (email && password) {
      // Guardar el usuario en AsyncStorage
      setUser({ email, password });
      AsyncStorage.setItem('user', JSON.stringify({ email, password }));
      navigation.replace('Home');
    } else {
      alert('Por favor, ingresa tus credenciales');
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/icon.png')} // Asegúrate de que la ruta sea correcta
        style={{ width: 100, height: 100, marginBottom: 20 }}
        resizeMode="contain"
      />
      <Text style={globalStyles.normal}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Text style={globalStyles.normal}>Constraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="Constraseña"
        value={password}
        onChangeText={setPassword}
      />

      {email && password && (
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={[globalStyles.button, { color: "#FFF" }]}>Iniciar sesion</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FFF"
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    color: '#000',
    fontFamily: 'Poppins_400Regular',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default LoginScreen