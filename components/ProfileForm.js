import React, { useState , useContext} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import { ProfileContext } from '../contexts/Context';

const EditableField = ({ label, value, onChange }) => {
  // const [editing, setEditing] = useState(false);



  // const handleSave = () => {
  //   setEditing(false);
  // };

  // if (editing) {
  //   return (
  //     <View style={styles.editableField}>
  //       <Text style={styles.label}>{label}</Text>
  //       <TextInput
  //         style={styles.input}
  //         value={value}
  //         onChangeText={onChange}
  //       />
  //       <TouchableOpacity onPress={handleSave}>
  //         <Text style={styles.saveButton}>Save</Text>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // }

  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
      {/* <TouchableOpacity onPress={() => setEditing(true)}>
        <Text style={styles.editButton}>✏️</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const EditScreen = () => {
  const [Name, setName] = useState('');
  const [ContactNo, setContactNo] = useState('');
  const [Email, setEmail] = useState('');
  const [Role, setRole] = useState('');



  const profileData = useContext(ProfileContext);
  console.log("profileData data in context is ", profileData);

  return (
    <View style={styles.container}>
      <Avatar
        size="large"
        rounded
        source={{ uri: 'https://i.pravatar.cc/150' }}
        containerStyle={styles.avatar}
      />
      <EditableField label="Name" value={profileData.name} onChange={setName} />
      <EditableField label="Contact No." value={profileData.mobile} onChange={setContactNo} />
      <EditableField label="Email" value={profileData.email} onChange={setEmail} />
      <EditableField label="Role" value={profileData.role}  onChange={setRole} />
      {/* <TouchableOpacity style={styles.saveContainer}>
        <Text style={styles.saveButton}>Save All</Text>
      </TouchableOpacity> */}
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
