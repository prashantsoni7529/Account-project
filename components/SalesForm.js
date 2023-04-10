import React, { useState } from 'react';
import { View, Text,TextInput, StyleSheet, TouchableOpacity ,ScrollView} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Ionicons';
import StateData from './StatesData';
import {GstData} from './GstData';
import GstDataList from './GstDatalist';

// import Dropdown from './Dropdown';
import Dropdown  from './Dropdown';

  
const Form = (props) => {
  const [Invoice_Date, setInvoice_Date] = useState(new Date());
  const [c_gst, set_c_gst] = useState(props.data.Gst_No);
  const [v_name, set_c_name] = useState(props.data.company_name);
  const [bill_party, set_bill_to_party] = useState('');
  const [bill_party_state, set_bill_party_state] = useState('');
  const [ship_party, set_ship_to_party] = useState('');
  const [ship_party_state, set_ship_party_state] = useState('');
  const [tax_val, set_tax_val] = useState('');
  const [invoice_val, set_invoice_val] = useState('');
  const [Invoice, setInvoice] = useState('');

  const [showPicker, setShowPicker] = useState(false);
  const [selectedOption, setSelectedOption] = useState(props.data.GST_rate);

  console.debug('data coming from flatlist',props.data);
  const prop_data=props.data;
  console.debug('prop_data is ',prop_data);
  // setInvoice_Date(prop_data.date.toLocaleDateString());
  /*
  set_c_name(prop_data.company_name);
  set_c_gst(prop_data.Gst_No);
  set_bill_to_party(prop_data.bill);
  // set_bill_party_state();
  set_ship_to_party(prop_data.field_inv);
  set_tax_val(prop_data.field_extra);
  set_invoice_val(prop_data.field_extra);
  // setInvoice();
  setSelectedOption(prop_data.GST_rate);*/
  //Will remove above comments 


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
    // SUbmit first all data inside db then close this modal
    alert('Trying to submit the form....')
    props.cancel();

  }

  const options = ['Non GST','0%', '0.1%', 'O.25%','1%','1.5%','3%'];
  // let data = [{
  //   value: 'Banana',
  // }, {
  //   value: 'Mango',
  // }, {
  //   value: 'Pear',
  // }];


  // const handleOptionSelect = (option) => {
  //   setSelectedOption(option);
  // };
  

  return (
    <ScrollView>
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
        <Text style={styles.label}>Customer GST:</Text>
        <TextInput style={styles.input} value={c_gst} onChangeText={set_c_gst} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Customer Name:</Text>
        <TextInput style={styles.input} value={v_name} onChangeText={set_c_name} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Bill to Party:</Text>
        <TextInput style={styles.input} value={bill_party} onChangeText={set_bill_to_party} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Bill to Party State:</Text>
        {/* <TextInput style={styles.input} value={bill_party_state} onChangeText={set_bill_party_state} /> */}
        <Dropdown val_data={StateData} />

      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Ship to Party:</Text>
        <TextInput style={styles.input} value={ship_party} onChangeText={set_ship_to_party} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Ship to Party State:</Text>
        {/* <TextInput style={styles.input} value={ship_party_state} onChangeText={set_ship_party_state} /> */}
        <Dropdown val_data={StateData} />
      </View>
      <View style={styles.row}>
      <Text style={styles.label}> Select GST % : </Text>
      <GstDataList val_data={GstData} />
      {/* <Dropdown  val_data ={GstData}/> */}
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Taxable Value:</Text>
        <TextInput  style={styles.input} value={tax_val} onChangeText={set_tax_val} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Invoice:</Text>
        <TextInput style={styles.input} value={Invoice} onChangeText={setInvoice} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Invoice Value:</Text>
        <TextInput  style={styles.input} value={invoice_val} onChangeText={set_invoice_val} />
      </View>
     

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
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
