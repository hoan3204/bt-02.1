import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <Text style={styles.text}>Hello, world</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Màu nền của ứng dụng
  },
  square: {
    width: 150, // Chiều rộng hình vuông
    height: 150, // Chiều cao hình vuông
    backgroundColor: '#4CAF50', // Màu nền hình vuông
    justifyContent: 'center',
    alignItems: 'center', // Canh giữa nội dung trong hình vuông
  },
  text: {
    color: '#ffffff', // Màu chữ
    fontSize: 18, // Kích thước chữ
    fontWeight: 'bold', // In đậm
  },
});
