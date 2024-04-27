import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAuth } from '@/context/auth';
import { Link } from 'expo-router';
import { useState } from 'react';

export default function TabOneScreen() {
  const { signIn, signUp } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      await signIn(username, password);
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>
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
        <TouchableOpacity style={styles.button} onPress={() => signIn(username, password)}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
       <Link href="/(auth)/register" style={styles.link}>
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
      padding: 'auto',
      backgroundColor: '#fff', // Change the background color if needed
    },

    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 8, // Adjust the margin as needed
    },
    card: {
        width: '90%', // Card width
        backgroundColor: '#fff', // White card background
        borderRadius: 8, // Rounded corners
        shadowOpacity: 0.2, // Shadow for iOS
        shadowRadius: 4,
        shadowColor: '#000',
        shadowOffset: { height: 2, width: 0 },
        elevation: 5, // Shadow for Android
        padding: 20, // Inner spacing
      },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      borderColor: '#ddd', // Border color for the input fields
      padding: 10,
      width: '80%',
      borderRadius: 4, // Border radius for the input fields
    },
    button: {
        marginTop: 12,
        backgroundColor: 'blue',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 4,
        maxWidth: '60%', // Set a maximum width for the button
        alignSelf: 'center', // Center the button within the card
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
      color: 'blue', // Link text color
      textDecorationLine: 'underline', // Underline the link text
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
      backgroundColor: '#e4e4e4', // Separator color
    },
  });
  
