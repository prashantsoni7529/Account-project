import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-elements';

const EditableField = ({ label, value, onChange }) => {
  const [editing, setEditing] = useState(false);

  const handleSave = () => {
    setEditing(false);
  };

  if (editing) {
    return (
      <View style={styles.editableField}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChange}
        />
        <TouchableOpacity onPress={handleSave}>
          <Text style={styles.saveButton}>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
      <TouchableOpacity onPress={() => setEditing(true)}>
        <Text style={styles.editButton}>✏️</Text>
      </TouchableOpacity>
    </View>
  );
};

const EditScreen = () => {
  const [companyName, setCompanyName] = useState('Acme Inc.');
  const [gstNo, setGstNo] = useState('123456789');
  const [address, setAddress] = useState('123 Main St');

  return (
    <View style={styles.container}>
      <Avatar
        size="large"
        rounded
        source={{ uri: 'https://i.pravatar.cc/150' }}
        containerStyle={styles.avatar}
      />
      <EditableField label="Company Name" value={companyName} onChange={setCompanyName} />
      <EditableField label="GST No." value={gstNo} onChange={setGstNo} />
      <EditableField label="Address" value={address} onChange={setAddress} />
      <TouchableOpacity style={styles.saveContainer}>
        <Text style={styles.saveButton}>Save All</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  avatar: {
    marginBottom: 20,
  },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
    flex: 1,
  },
  value: {
    flex: 2,
  },
  editButton: {
    fontSize: 20,
  },
  editableField: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  input: {
    flex: 2,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  saveButton: {
    color: '#007AFF',
  },
  saveContainer: {
    alignSelf: 'stretch',
    alignItems: 'center',
    marginVertical: 20,
  },
});

export default EditScreen;
