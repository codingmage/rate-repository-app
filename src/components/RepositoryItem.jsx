import { Image, StyleSheet, View, /* Text */ } from "react-native"
import Text from "./Text"
import NumberText from "./NumberText";
import Tag from "./Tag";

const styles = StyleSheet.create({
    card: {
        padding: 10,
        backgroundColor: "white",
        gap: 10
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 10
    },
    main: {
        flexDirection: "row",
        justifyContent: "flex-start",
        gap: 10
    },
    numbers: {
        flexDirection: "row",
        justifyContent: "space-around"
    }
  });
  

const RepositoryItem = (props) => {
    return (
        <View style={styles.card}>
            <View style={styles.main}>
                <Image style={styles.avatar} source={{ uri: props.ownerAvatarUrl,}}/>
                <View style={{flexGrow: 0, gap: 10}}>
                    <Text fontWeight="bold">{props.fullName}</Text>
                    <Text color="textSecondary">{props.description}</Text>
                    <Tag>{props.language}</Tag>
                </View>
            </View>
            <View style={styles.numbers}>
                <NumberText num={props.stargazersCount} grayText={"Stars"} />
                <NumberText num={props.forksCount} grayText={"Forks"} />
                <NumberText num={props.reviewCount} grayText={"Reviews"} />
                <NumberText num={props.ratingAverage} grayText={"Ratings"} />
            </View>

        </View>
    )
}

export default RepositoryItem