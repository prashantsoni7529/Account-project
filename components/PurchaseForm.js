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
//   const [Invoice, setInvoice] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [bill_party, set_bill_to_party] = useState('');
  const [bill_party_state, set_bill_party_state] = useState('');
  const [ship_party, set_ship_to_party] = useState('');
  const [ship_party_state, set_ship_party_state] = useState('');


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
    <>
    <View style={styles.container}>
        <View style={styles.row}>
            <Text style={styles.label}>Vendor:</Text>
            <TextInput style={styles.input} value={v_name} onChangeText={set_v_name} />
        </View>
    
      <View style={styles.row}>
        <Text style={styles.label}>GST Number:</Text>
        <TextInput style={styles.input} value={v_gst} onChangeText={set_v_gst} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Bill to Party:</Text>
        <TextInput style={styles.input} value={bill_party} onChangeText={set_bill_to_party} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Bill to Party State:</Text>
        <TextInput style={styles.input} value={bill_party_state} onChangeText={set_bill_party_state} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Ship to Party:</Text>
        <TextInput style={styles.input} value={ship_party} onChangeText={set_ship_to_party} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Ship to Party State:</Text>
        <TextInput style={styles.input} value={ship_party_state} onChangeText={set_ship_party_state} />
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
      <Text style={styles.label}>  GST % : {selectedOption}</Text>
      <Dropdown style={styles.input} options={options} defaultOption={selectedOption} onSelect={handleOptionSelect} />
      </View>
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
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
    </>
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
