import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAuth } from '@/context/auth';
import { Link } from 'expo-router';
import React, { useState } from 'react';

export default function TabOneScreen() {
  const { signUp } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignUp = async () => {
    try {
      await signUp(username, password, email);
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Register</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="Username"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          secureTextEntry
          placeholder="Password"
        />
          <TouchableOpacity onPress={handleSignUp}>
      <Text>Sign Up</Text>
    </TouchableOpacity>
        <Link href="/(auth)/login" style={styles.link}>
          Already have an Account? Login
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOffset: { height: 2, width: 0 },
    elevation: 5,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    width: '80%',
    borderRadius: 4,
  },
  button: {
    marginTop: 12,
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 4,
    maxWidth: '60%',
    alignSelf: 'center',
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  link: {
    marginTop: 15,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  // ... other styles
});
