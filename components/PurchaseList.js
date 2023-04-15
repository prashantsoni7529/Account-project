import React, { useState,useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PurchaseForm from './PurchaseForm';
import Icon from 'react-native-vector-icons/FontAwesome';
import {PurchaseContext} from '../contexts/Context';





// const DATA=[
//     {purchase_bill_number: '1',vendor_name:'Purchase1',vendor_gst:"09AFBFSSFSKSF57",tax_rate:'12%',invoice_date:'01/14/2021',taxable_value:"28600", invoice_value:'33745'},
//     {purchase_bill_number: '2',vendor_name:'Purchase2 ',vendor_gst:"09AFBFSSFSKSF57",tax_rate:'10%',invoice_date:'01/14/2021',taxable_value:"28600", invoice_value:'33745'},
//     {purchase_bill_number: '3',vendor_name:'Purchase3',vendor_gst:"09AFBFSSFSKSF57",tax_rate:'8%',invoice_date:'01/14/2021',taxable_value:"28600", invoice_value:'33745'},
//     {purchase_bill_number: '4',vendor_name:'Purchase4',vendor_gst:"09AFBFSSFSKSF57",tax_rate:'11%',invoice_date:'01/14/2021',taxable_value:"28600", invoice_value:'33745'},
//     {purchase_bill_number: '5',vendor_name:'Purchase5 ',vendor_gst:"09AFBFSSFSKSF57",tax_rate:'12%',invoice_date:'01/14/2021',taxable_value:"28600", invoice_value:'33745'},
//     {purchase_bill_number: '6',vendor_name:'Purchase6',vendor_gst:"09AFBFSSFSKSF57",tax_rate:'12%',invoice_date:'01/14/2021',taxable_value:"28600", invoice_value:'33745'},
// ]

// const DATA = [
//   {
//     title: 'Main dishes',
//     data: ['Pizza', 'Burger', 'Risotto'],
//   },
//   {
//     title: 'Sides',
//     data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
//   },
//   {
//     title: 'Drinks',
//     data: ['Water', 'Coke', 'Beer'],
//   },
//   {
//     title: 'Desserts',
//     data: ['Cheese Cake', 'Ice Cream'],
//   },
// ];


const PurchaseScreen = () => {
  const [editItemId,seteditItemId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [item_data,setitem_data] = useState({});
  const [addPurchase, setAddPurchase] = useState(true);

  const DATA = useContext(PurchaseContext);
  console.log("purchaseData data in context is ",DATA);

  const onPressEditbtn = (data) => {
    selected_item_data(data.purchase_bill_number);
    seteditItemId(data.purchase_bill_number);
    setIsEditing(true);
    setAddPurchase(false);

   console.debug('edit button is clicked',data.purchase_bill_number,data.vendor_name);
  };
  console.debug('outside function ',editItemId , isEditing ,item_data);

  const handleCancelEdit = () => {
    setIsEditing(false);
    seteditItemId(null);
    setAddPurchase(true);
  };

  const renderItem = ({ item }) => {
      return(
        <SafeAreaView style={styles.container}>
             <TouchableOpacity> 
              <View style={styles.item}>
                <View style={styles.item_data}>
                  <Text style={styles.name_and_icon_style}>{item.vendor_name}</Text>
                  <Text style={styles.item_content}>{item.vendor_gst}</Text>
                  <Text style={styles.item_content}>{item.tax_rate}</Text>
                </View>
                <View style={styles.item_data}>
                  <Text style={styles.item_content}>{item.purchase_bill_number}</Text>
                  <Text style={styles.item_content}>{item.invoice_date}</Text>
                </View>
                <View style={styles.item_data}>
                  <Text style={styles.item_content}>{item.taxable_value}</Text>
                  <Text style={styles.item_content}>{item.invoice_value}</Text>
                </View>
                <View style={[styles.item_edit,styles.name_and_icon_style]}>
                  <TouchableOpacity onPress={()=>onPressEditbtn(item)}>
                  <Ionicons name="md-create" size={24} color={'#3b448f'}/>
                  </TouchableOpacity>
                </View>
              </View>
             </TouchableOpacity>
          </SafeAreaView>
      );
  };

  const handleAddPurchases =() =>{
    console.debug('Adding purchase button');
    setIsEditing(true);
    setitem_data({});
    setAddPurchase(false);
  }

  const selected_item_data = (purchase_bill_number) =>{
    for(let i=0;i<DATA.length;i++){
    // console.debug('in selected_item_data is ',DATA[i],'check bool val is',DATA[i].purchase_bill_number === editItemId,DATA[i].purchase_bill_number , editItemId);
      if(DATA[i].purchase_bill_number === purchase_bill_number){
        setitem_data(DATA[i]);
        console.debug('collecting data is ',item_data);
      }
    }
  }
// Object.keys(objectName).length === 0
  return (
    <>
    {addPurchase ? (
    <View  style={{ flexDirection:'row-reverse',margin:10,alignItems:'center',gap:7}}>
    <Icon name="plus" size={30} style={styles.plus_icon} onPress={handleAddPurchases} />
    <Text style={styles.plus_icon}>Add Purchase</Text>
    </View>):(<View></View>)}

      {isEditing ? (
        <PurchaseForm data={item_data} cancel={handleCancelEdit} />
      ) : (
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.purchase_bill_number}
        />
      )}
    </>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 8,
    
   
  },
  plus_icon:{
    fontWeight:'bold',
    // fontSize:25,
    color:'#3b448f',

    // backgroundColor:'#e6ebf2'
    // textAlign: 'right'

  },

  item_content: {
    fontSize: 10,
  },
  name_and_icon_style:{
    fontWeight:'bold',
    fontSize:15,
    color:'#3b448f',
    
  },
  item: {
    // backgroundColor: '#a9c6ff',
    borderColor:'#b0aea9',
    borderWidth:2,

    height:120,
    // paddingTop: 10,
    // paddingBottom:10,
    padding:5,
    marginVertical: '-3%',
    flex:1,
    flexDirection:'row',
    
    // alignItems:'flex-start',
    // alignItems:'center',

    justifyContent:'space-between',
    
  },
 
 
  
  item_data: {
    // backgroundColor:'green',
    alignItems:'center',
    justifyContent:'space-around',
  },
  item_edit:{
    // backgroundColor:'yellow',
    alignItems:'center',
    justifyContent:'center',
  }
});

export default PurchaseScreen;