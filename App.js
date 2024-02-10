import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Xin chao, toi la Hien</Text>
      <StatusBar style="auto" />

      <Button
        onPress={() => {
          console.log('You tapped the button!');
        }}
        title="Press Me"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
