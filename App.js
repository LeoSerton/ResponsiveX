import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const gridSize = deviceWidth - 20;
const cellSize = gridSize / 3;

const lineThickness = 7; // Adjust grid line thickness
const textSize = 60; // Adjust text size of the X's and O's

const lineOffset = 0; // more offset will take line shadow further away

const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5', // light gray background
  },

  row: 
  {
    flexDirection: 'row',
  },

  // Incorporated Neumorphic style to cells
  cell: 
  {
    width: cellSize,
    height: cellSize,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0', // Cell color for neumorphic style
    borderRadius: 10, // Rounded corners for neumorphic style
    margin: 5, // Adjust space between cells
  },

  line: 
  {
    position: 'absolute',
    backgroundColor: '#bdbdbd',
  },

  horizontalLine: 
  {
    height: lineThickness,
    width: '100%',
  },

  verticalLine: 
  {
    height: '100%',
    width: lineThickness,
  },

  // Adjust appearance of X's and O's
  cellText: 
  {
    fontSize: textSize,
    fontWeight: 'bold',
    color: 'white', // Gives a slight minimalist look
    textShadowOffset: { width: 2, height: 2 }, // Colour shadow
    textShadowRadius: 3, // Shadow radius
  },

  // Text shadow colours
  xShadow: 
  {
    textShadowColor: 'red',
  },

  oShadow: 
  {
    textShadowColor: 'blue',
  },

});

const generateBoard = (sequence) => 
{
  return (
    <View style={styles.container}>
      {[0, 3, 6].map((startIndex) => 
      (
        <View key={startIndex} style={styles.row}>
          {[startIndex, startIndex + 1, startIndex + 2].map((index) => 
          (
            <View key={index} style={styles.cell}>
              {index !== startIndex && (<View style={[styles.line, styles.verticalLine, { left: lineOffset }]} />)}
              {startIndex !== 0 && index !== startIndex + 6 && (<View style={[styles.line, styles.horizontalLine, { top: lineOffset }]} />)}
              <Text style=
              {[
                styles.cellText,
                styles[sequence[index] === 'X' ? 'xShadow' : 'oShadow'],
              ]}>
                {sequence[index]}
              </Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

const TicTacToe = () => 
{
  const sequence = 'OOXXOOXXO'; // Get sequence identical to screenshot

  return generateBoard(sequence);
};

export default function App() 
{
  return (
    <View style={styles.container}>
      <TicTacToe />
      <StatusBar style="auto" />
    </View>
  );
}


