import {
  View,
  Text,
  TouchableOpacity,
  FlatList, Modal

} from 'react-native';
import React, { useRef, useState } from 'react';


const GstDLL = (props) => {
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(props.val_data);
  const [selectedState, setSelectedState] = useState(props.selectedVal);

  return (
    <View style={{ flex: 1, position: 'relative' }}>
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
        <Text style={{ fontWeight: '600' }}>
          {selectedState == '' ? 'Select value' : selectedState}
        </Text>
      </TouchableOpacity>
      <Modal visible={clicked} onBackdropPress={() => setClicked(false)} transparent>
        {clicked ? (
          <View 
            style={{
              // overflow: 'scroll',
              position: 'absolute',
              elevation: 5,
              zIndex: 5,
              top: 50,
              marginTop: '25%',
              height: 200,
              // maxHeight: 250,
              overflow: 'hidden',
              alignSelf: 'center',
              width: '30%',
              backgroundColor: '#fff',
              borderRadius: 10,
            }}>

            <FlatList
              nestedScrollEnabled
              data={data}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    style={{
                      // elevation :0,
                      // position:'relative',
                      width: '80%',
                      alignSelf: 'center',
                      height: 50,
                      justifyContent: 'center',
                      borderBottomWidth: 0.5,
                      borderColor: '#8e8e8e',
                    }}
                    onPress={() => {
                      setSelectedState(item.value);
                      props.get_value(item.value);
                      setClicked(!clicked);
                    }}>
                    <Text style={{ fontWeight: '600' }}>{item.value}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        ) : null}
      </Modal>

    </View>
  );
};

export default GstDLL;