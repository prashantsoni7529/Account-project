import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    
  } from 'react-native';
import React, {useRef, useState} from 'react';

 
  const GstDLL = (props) => {
    const [clicked, setClicked] = useState(false);
    const [data, setData] = useState(props.val_data);
    const [selectedState, setSelectedState] = useState('');
    
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
            {selectedState == '' ? 'Select GST' : selectedState}
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
                      setSelectedState(item.value);
                      props.get_tax_rate_value(item.value);
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
  
  export default GstDLL;