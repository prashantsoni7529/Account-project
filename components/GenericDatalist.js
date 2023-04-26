import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    
  } from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

 
  const DLL = (props) => {
    const [clicked, setClicked] = useState(false);
    const [data, setData] = useState(props.val_data);
    const [selectedValue, setSelectedValue] = useState(props.selectedVal);
    const [selectedLabel,setSelectedLabel]  = useState("00");

    useEffect(()=>{
      props.onchanged_value(selectedValue,selectedLabel);
      console.log("here selected val and label  are ",selectedValue,selectedLabel);
    },[selectedValue]);
    
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={{
            // backgroundColor:'red',
            width: '90%',
            height: 50,
            borderRadius: 10,
            borderWidth: 0.5,
            alignSelf: 'center',
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 15,
            paddingRight: 15,
          }}
          onPress={() => {
            setClicked(!clicked);
          }}>
          <Text style={{fontWeight:'600'}}>
            {selectedValue == '' ? 'Select value' : selectedValue}
            
          </Text>
        </TouchableOpacity>
        {clicked ? (
          <View
            style={{
              elevation: 5,
              marginTop: 20,
              height:250,
              alignSelf: 'center',
              width: '90%',
              backgroundColor: '#fff',
              borderRadius: 10,
            }}>
            
            <FlatList
            nestedScrollEnabled
              data={data}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={{
                      width: '85%',
                      alignSelf: 'center',
                      height: 50,
                      justifyContent: 'center',
                      borderBottomWidth: 0.5,
                      borderColor: '#8e8e8e',
                    }}
                    onPress={() => {
                      setSelectedValue(item.hasOwnProperty('value') ? item.value : "Current");
                      setSelectedLabel(item.hasOwnProperty('label') ? item.label : "00");
                      setClicked(!clicked);
                    }}>
                    <Text style={{fontWeight: '600'}}>{item.value}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        ) : null}
      </View>
    );
  };
  
  export default DLL;