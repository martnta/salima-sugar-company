import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '@/context/auth';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function Dashboard() {
  const router = useRouter();
  const { signOut } = useAuth();
  const [available, setAvailable] = useState(5); // Renamed to "available" for better naming convention

  const handleEmployeeManagementPress = () => {
    router.push('/(app)/(tabs)/two');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Dashboard</Text>
      <View style={styles.separator} />

      <Pressable style={styles.card} onPress={handleEmployeeManagementPress}>
        <MaterialIcons name="dashboard" size={24} color="black" />
        <Text style={styles.title}>Employee Management System</Text>
        <Text style={styles.title}>{available}</Text>
      </Pressable>

      <Button title="Sign Out" color="yellow" onPress={signOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: '#eee', // Set a default background color for the separator
  },
  card: {
    alignItems: 'center', // Center the content inside the card
    padding: 16, // Add some padding for better spacing
    backgroundColor: 'white', // Set a background color for the card
    borderRadius: 8, // Add some border radius for a rounded look
    shadowColor: '#000', // Add a shadow for a subtle depth effect
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Add elevation for Android devices
  },
});