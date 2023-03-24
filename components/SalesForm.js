import React, { useState } from 'react';
import { View, Text,TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Ionicons';
import Dropdown from './Dropdown';

  
const Form = () => {
  const [Invoice_Date, setInvoice_Date] = useState(new Date());
  const [v_gst, set_v_gst] = useState('');
  const [v_name, set_v_name] = useState('');
  const [tax_val, set_tax_val] = useState('');
  const [invoice_val, set_invoice_val] = useState('');
  const [Invoice, setInvoice] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || Invoice_Date;
    setShowPicker(Platform.OS === 'ios');
    setInvoice_Date(currentDate);
  };

  const showDatepicker = () => {
    setShowPicker(true);
  };

  

  const handleSubmit = () => {
    // Your form submission logic here
    alert('Trying to submit the form....')
  }

  const options = ['Non GST','0%', '0.1%', 'O.25%','1%','1.5%','3%'];


  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Invoice Date:</Text>
        <TouchableOpacity onPress={showDatepicker}>
        <Icon name="calendar-outline" size={24} color="#555" style={styles.icon} />
      </TouchableOpacity>
      {showPicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={Invoice_Date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
        <TextInput placeholder="Selected Date" style={styles.input} value={Invoice_Date.toLocaleDateString()} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Vendor GST:</Text>
        <TextInput style={styles.input} value={v_gst} onChangeText={set_v_gst} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Vendor Name:</Text>
        <TextInput style={styles.input} value={v_name} onChangeText={set_v_name} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Taxable Value:</Text>
        <TextInput  style={styles.input} value={tax_val} onChangeText={set_tax_val} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Invoice Value:</Text>
        <TextInput  style={styles.input} value={invoice_val} onChangeText={set_invoice_val} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Invoice:</Text>
        <TextInput style={styles.input} value={Invoice} onChangeText={setInvoice} />
      </View>
      <View style={styles.row}>
      {/* <Text>Select GST % :</Text> */}
      <Text style={styles.label}> Select GST % : {selectedOption}</Text>
      <Dropdown style={styles.input} options={options} defaultOption={selectedOption} onSelect={handleOptionSelect} />
    </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    flex: 1,
    fontWeight: 'bold',
    marginRight: 10,
  },
  input: {
    flex: 2,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Form;
