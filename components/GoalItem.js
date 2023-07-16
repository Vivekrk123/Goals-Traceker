import { View, Text,StyleSheet, Pressable } from 'react-native'
import React from 'react'


function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
    <Pressable 
      android_ripple={{ color:'#dddddd'}}
      onPress={props.onDeleteItem.bind(this,props.id)}>
      <Text style={styles.goalText}>{props.text}</Text>
    </Pressable>
    </View>
    
  );
}
const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
      goalText: {
        color: 'white',
        padding : 8,
    }
});

export default GoalItem;