import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import carItem from './components/carItem';
import CarItem from "./components/carItem";

export default function App() {
  return (
      <View style={styles.container}>

      <CarItem />
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },



});