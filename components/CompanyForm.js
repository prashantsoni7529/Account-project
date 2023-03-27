import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Image } from 'react-native-elements';

const CompanyForm = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://via.placeholder.com/150x150.png' }}
        style={styles.logo}
      />
      <Text style={styles.label}>Company Name</Text>
      <Text style={styles.value}>ABC Corporation</Text>
      <Text style={styles.label}>GST No.</Text>
      <Text style={styles.value}>1234567890</Text>
      <Text style={styles.label}>Address</Text>
      <Text style={styles.value}>
        123, Main Street, New York, NY 10001
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});

export default CompanyForm;
