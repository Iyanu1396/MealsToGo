import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import RestaurantsInfoCard from "../components/RestaurantsInfoCard";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { SafeArea } from "@/src/utils/SafeArea";



const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestuarantList = styled(FlatList).attrs({
  contentContainerStyle:{
    padding:16
  }
})``

function Restuarants() {
  const [searchQuery, setSearchQuery] = useState("");
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
      <RestuarantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
          { name: 10 },
          { name: 11 },
          { name: 12 },
          { name: 13 },
          { name: 14},
          
        ]}
        renderItem={() => <RestaurantsInfoCard />}
        keyExtractor={(item) => item.name}
       
      />
    </SafeArea>
  );
}

export default Restuarants;
