import React, { useState } from 'react';
import { View, Text, TouchableOpacity,ScrollView, StyleSheet } from 'react-native';

const Dropdown = ({ options, defaultOption, onSelect }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
    onSelect(option);
  };

  return (
    <View style={styles.dropdownContainer}>
      <TouchableOpacity
        style={styles.selectedOption}
        onPress={() => setShowOptions(!showOptions)}
      >
        <Text>{selectedOption}</Text>
      </TouchableOpacity>
      {showOptions && (
         
        <View style={styles.optionsContainer}>
        <ScrollView style={{ maxHeight: 150 }}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.option}
              onPress={() => handleOptionSelect(option)}
            >
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        </View>
        
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    position: 'relative',
    width: '40%',
    backgroundColor:'lightblue'
  },
  selectedOption: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  optionsContainer: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    zIndex: 1,
  },
  option: {
    padding: 10,
  },
});

export default Dropdown;
