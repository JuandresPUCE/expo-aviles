import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const Mail = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onRegister = () => {
    // Aquí debes implementar la lógica para registrar al usuario
    // Por ahora, solo mostraremos una alerta
    Alert.alert('Registro', `Registrado con éxito: ${email}`);
  };

  return (
    <View>
      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Registrarse" onPress={onRegister} />
    </View>
  );
};

export default Mail;