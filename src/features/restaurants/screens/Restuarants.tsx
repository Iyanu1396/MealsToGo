import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";;
import { Searchbar } from 'react-native-paper';
import RestaurantsInfoCard from "../components/RestaurantsInfoCard";

function Restuarants() {
    const [searchQuery, setSearchQuery] = useState('');
  return (
     <SafeAreaView style={styles.container}>
           <View style={styles.searchContainer}>
           <Searchbar
         placeholder="Search"
         mode="bar"
         onChangeText={setSearchQuery}
         elevation={3}
         value={searchQuery}
       />
           </View>
           <View style={styles.listContainer}>
           <RestaurantsInfoCard/>
           </View>
         </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
  },
  searchContainer: {

    padding: 16,
  },
  listContainer: {
    backgroundColor: "blue",
    flex: 1,
    padding: 16,
  },
});

export default Restuarants
