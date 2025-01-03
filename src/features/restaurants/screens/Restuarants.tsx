import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView,  } from "react-native";
import { Searchbar } from 'react-native-paper';
import RestaurantsInfoCard from "../components/RestaurantsInfoCard";
import styled from "styled-components/native";

const SafeArea = styled.SafeAreaView`
  flex: 1;
`

const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]};
`

const ListContainer = styled.View`
    flex: 1;
    padding: ${props => props.theme.space[3]};
`



function Restuarants() {
    const [searchQuery, setSearchQuery] = useState('');
  return (
     <SafeArea>
           <SearchContainer>
           <Searchbar
         placeholder="Search"
         mode="bar"
         onChangeText={setSearchQuery}
         elevation={3}
         value={searchQuery}
       />
           </SearchContainer>
           <ListContainer >
           <RestaurantsInfoCard/>
           </ListContainer>
         </SafeArea>
  )
}



export default Restuarants
