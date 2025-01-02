import { Text , StyleSheet} from "react-native";
import { Card } from "react-native-paper";

function RestaurantsInfoCard({ restaurant = {} }) {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporary,
  } = restaurant;
  return (
    <Card  elevation={5} style={styles.card} >
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
}

const styles= StyleSheet.create({
  card:{
    backgroundColor:"white"
  },
  cover:{
    backgroundColor:"white",
    padding:20,
    

  },title:{
    padding:16
  }
})

export default RestaurantsInfoCard;


