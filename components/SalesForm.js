import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Ionicons';
import StateData from './StatesData';
import { GstData } from './GstData';
import GstDataList from './GstDatalist';
import { AddNewSale ,updateSale } from '../Apicalls';

// import Dropdown from './Dropdown';
import Dropdown from './Dropdown';

// Invoice_Date,c_gst,v_name,bill_party,bill_party_state,ship_party,ship_party_state,tax_val,invoice_val,Invoice

const Form = ({ data, cancel }) => {
  var check_data_keys = Object.keys(data).length;
  const [Invoice_Date, setInvoice_Date] = useState(check_data_keys ? (data.invoice_date) : new Date().toLocaleDateString("en-CA"));
  const [c_gst, set_c_gst] = useState(check_data_keys ? data.customer_gst : "");
  const [v_name, set_c_name] = useState(check_data_keys ? data.customer_name : "");
  const [bill_party, set_bill_to_party] = useState(check_data_keys ? data.bill_to_party : "");
  const [bill_party_state, set_bill_party_state] = useState(check_data_keys ? data.bill_to_party_state : "");
  const [ship_party, set_ship_to_party] = useState(check_data_keys ? data.ship_to_party : "");
  const [ship_party_state, set_ship_party_state] = useState(check_data_keys ? data.ship_to_party_state : "");
  const [tax_val, set_tax_val] = useState(check_data_keys ? String(data.taxable_value) : "");
  const [invoice_val, set_invoice_val] = useState(check_data_keys ? String(data.invoice_value) : "");
  const [Invoice, setInvoice] = useState(check_data_keys ? String(data.tax_rate) : "");
  const [salesBillNo, setSalesBillNo] = useState(check_data_keys ? data.sales_bill_number : "");

  const [showPicker, setShowPicker] = useState(false);
  // const [selectedOption, setSelectedOption] = useState(String(data ? data.tax_rate : ""));

  console.debug('data coming from flatlist', data, invoice_val, tax_val);

  const handleSelectedDate = (dateString) => {
    // const dateString = '2023-04-18';
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
    // dateString = String(dateString.split('T')[0]);
    // return dateString;
  }


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate.toLocaleDateString("en-CA") || Invoice_Date;
    setShowPicker(false);
    setInvoice_Date(currentDate);
 
  };

  const showDatepicker = () => {
    setShowPicker(true);
  };

  const getTaxRateValue = (val) => {
    setInvoice(val);
  }


  const handleSubmit = async () => {
    // Your form submission logic here
    // SUbmit first all data inside db then close this modal
    let obj = {};
    console.log(Invoice_Date, c_gst, v_name, bill_party, "bill_party_state is ", bill_party_state, "ship_party", ship_party, "ship_party_state is ", ship_party_state, tax_val, invoice_val, Invoice);
    if (salesBillNo === "" || Invoice_Date === "" || c_gst === "" || v_name === "" || bill_party === "" || bill_party_state === "" || ship_party === "" || ship_party_state === "" || tax_val === "" || invoice_val === "" || Invoice === "") {

      alert("All fields are required to fill ");
    }
    else {
      obj = {
        sales_bill_number: salesBillNo,
        invoice_date: Invoice_Date,
        customer_gst: c_gst,
        customer_name: v_name,
        bill_to_party: bill_party,
        bill_to_party_state: bill_party_state,
        ship_to_party: ship_party,
        ship_to_party_state: ship_party_state,
        tax_rate: Invoice,
        taxable_value: tax_val,
        invoice: Invoice,
        invoice_value: invoice_val,
      }
      console.log("prepare obj is ", obj);
      if(check_data_keys && data.sales_id){ //Logic for saggregating update and add sale
        await updateSale(obj , data.sales_id );
      }
      else{
        await AddNewSale(obj);
      }
      
      // alert('Your....')
      cancel();
    }
    // alert('Trying to submit the form....')
    // cancel();

  }



  useEffect(() => {
    let final_amount;
    if (Invoice && tax_val) {
      final_amount = "";
      console.debug("Invoice  coming is ", Invoice, " tax_val is ", tax_val);

      final_amount = ((100 + parseFloat(Invoice)) * parseInt(tax_val)) / 100;
      final_amount = String(final_amount);
      console.debug("final_amount coming is ", final_amount);
      set_invoice_val(final_amount);
    }
    else {
      set_invoice_val("");
    }

  }, [tax_val, Invoice]);



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
              value={new Date()}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
          <TextInput placeholder="Selected Date" style={styles.input} value={Invoice_Date} />
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
          <Dropdown val_data={StateData} state={bill_party_state} stateSelected={set_bill_party_state} />

        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Ship to Party:</Text>
          <TextInput style={styles.input} value={ship_party} onChangeText={set_ship_to_party} />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Ship to Party State:</Text>
          {/* <TextInput style={styles.input} value={ship_party_state} onChangeText={set_ship_party_state} /> */}
          <Dropdown val_data={StateData} state={ship_party_state} stateSelected={set_ship_party_state} />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Sales Bill Number:</Text>
          <TextInput style={styles.input} value={salesBillNo} onChangeText={setSalesBillNo} />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}> Select GST % : </Text>
          <GstDataList val_data={GstData} get_value={getTaxRateValue} selectedVal={Invoice} />
          {/* <Dropdown  val_data ={GstData}/> */}
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Taxable Value:</Text>
          <TextInput style={styles.input} value={tax_val} keyboardType='numeric' onChangeText={set_tax_val} />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Tax Rate:</Text>
          <TextInput style={styles.input} editable={false} value={Invoice} onChangeText={setInvoice} />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Total Amount:</Text>
          <TextInput style={styles.input} editable={false} value={invoice_val} />
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
