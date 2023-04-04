import React, { useState } from 'react';
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
import SalesForm from './SalesForm';
import Icon from 'react-native-vector-icons/FontAwesome';



// const [Invoice_Date, setInvoice_Date] = useState(new Date());
// const [v_gst, set_v_gst] = useState('');
// const [v_name, set_v_name] = useState('');
// const [bill_party, set_bill_to_party] = useState('');
// const [bill_party_state, set_bill_party_state] = useState('');
// const [ship_party, set_ship_to_party] = useState('');
// const [ship_party_state, set_ship_party_state] = useState('');
// const [tax_val, set_tax_val] = useState('');
// const [invoice_val, set_invoice_val] = useState('');
// const [Invoice, setInvoice] = useState('');


const DATA=[
    {id: '1',company_name:'Nipra Associates',Gst_No:"09AFBFSSFSKSF57",GST_rate:'12%',field_inv:'inv 2021',date:'01/14/2021',bill:"28600", field_extra:'33745'},
    {id: '2',company_name:'Affiivo ',Gst_No:"09AFBFSSFSKSF57",GST_rate:'10%',field_inv:'inv 2021',date:'01/14/2021',bill:"28600", field_extra:'33745'},
    {id: '3',company_name:'Innow8 apps',Gst_No:"09AFBFSSFSKSF57",GST_rate:'8%',field_inv:'inv 2021',date:'01/14/2021',bill:"28600", field_extra:'33745'},
    {id: '4',company_name:'TCS ',Gst_No:"09AFBFSSFSKSF57",GST_rate:'11%',field_inv:'inv 2021',date:'01/14/2021',bill:"28600", field_extra:'33745'},
    {id: '5',company_name:'Infosys ',Gst_No:"09AFBFSSFSKSF57",GST_rate:'12%',field_inv:'inv 2021',date:'01/14/2021',bill:"28600", field_extra:'33745'},
    {id: '6',company_name:'wipro ',Gst_No:"09AFBFSSFSKSF57",GST_rate:'12%',field_inv:'inv 2021',date:'01/14/2021',bill:"28600", field_extra:'33745'},
]

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


const SalesScreen = () => {
  const [editItemId,seteditItemId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [item_data,setitem_data] = useState({});
  

  const onPressEditbtn = (data) => {
    selected_item_data(data.id);
    seteditItemId(data.id);
    setIsEditing(true);

   console.debug('edit button is clicked',data.id,data.company_name);
  };
  console.debug('outside function ',editItemId , isEditing ,item_data);

  const handleCancelEdit = () => {
    setIsEditing(false);
    seteditItemId(null);
  };

  const renderItem = ({ item }) => {
      return(
        <SafeAreaView style={styles.container}>
             <TouchableOpacity> 
              <View style={styles.item}>
                <View style={styles.item_data}>
                  <Text style={styles.name_and_icon_style}>{item.company_name}</Text>
                  <Text style={styles.item_content}>{item.Gst_No}</Text>
                  <Text style={styles.item_content}>{item.GST_rate}</Text>
                </View>
                <View style={styles.item_data}>
                  <Text style={styles.item_content}>{item.field_inv}</Text>
                  <Text style={styles.item_content}>{item.date}</Text>
                </View>
                <View style={styles.item_data}>
                  <Text style={styles.item_content}>{item.bill}</Text>
                  <Text style={styles.item_content}>{item.field_extra}</Text>
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

  const handleAddSales =() =>{
    console.debug('Adding sales button');
    setIsEditing(true);
    setitem_data({});
  }

  const selected_item_data = (id) =>{
    for(let i=0;i<DATA.length;i++){
    // console.debug('in selected_item_data is ',DATA[i],'check bool val is',DATA[i].id === editItemId,DATA[i].id , editItemId);
      if(DATA[i].id === id){
        setitem_data(DATA[i]);
        console.debug('collecting data is ',item_data);
      }
    }
  }

  return (
    <>
    <View  style={{ flexDirection:'row-reverse',margin:10,alignItems:'center',gap:7}}>
    <Icon name="plus" size={30} style={styles.plus_icon} onPress={handleAddSales} />
    <Text style={styles.plus_icon}>Add Sales</Text>
    </View>
      {isEditing ? (
        <SalesForm data={item_data} cancel={handleCancelEdit} />
      ) : (
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
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

export default SalesScreen;