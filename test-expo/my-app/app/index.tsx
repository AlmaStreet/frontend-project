// import { Text, View } from "react-native";

// export default function Index() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text>Edit app/index.tsx to edit this screen.</Text>
//     </View>
//   );
// }

// app/index.tsx
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';

export default function Home() {
  // State for API Form
  const [input, setInput] = useState('');
  const [apiResponse, setApiResponse] = useState(null);

  // State for LightSwitch
  const [isOn, setIsOn] = useState(false);

  const handleApiCall = async () => {
    try {
      // Replace the URL with your actual API endpoint
      const res = await fetch('https://example.com/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input }),
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setApiResponse(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Type-checking the error before using error.message
      if (error instanceof Error) {
        setApiResponse({ error: error.message });
      } else {
        setApiResponse({ error: 'An unknown error occurred' });
      }
    }
  };

  const toggleLight = () => {
    setIsOn(!isOn);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Expo API Form</Text>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="Enter text"
      />
      <Button title="Send" onPress={handleApiCall} />
      {apiResponse && (
        <View style={styles.responseContainer}>
          <Text style={styles.responseTitle}>Response:</Text>
          <Text>{JSON.stringify(apiResponse, null, 2)}</Text>
        </View>
      )}

      <View style={styles.separator} />

      <Text style={styles.header}>Expo LightSwitch</Text>
      <View
        style={[
          styles.circle,
          { backgroundColor: isOn ? 'yellow' : 'transparent' },
        ]}
      />
      <Button title={isOn ? 'Turn Off' : 'Turn On'} onPress={toggleLight} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    marginVertical: 10,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  responseContainer: {
    marginVertical: 10,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  responseTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    alignSelf: 'center',
    marginVertical: 10,
  },
  separator: {
    marginVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
  },
});
