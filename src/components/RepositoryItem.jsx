import { Image, Pressable, StyleSheet, View, /* Text */ } from "react-native"
import Text from "./Text"
import NumberText from "./NumberText";
import Tag from "./Tag";
import {useWindowDimensions} from "react-native";
import theme from "../theme";
import * as Linking from "expo-linking";

const styles = StyleSheet.create({
    card: {
        padding: 10,
        backgroundColor: "white",
        gap: 10,
        marginBottom: 10
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 10
    },
    main: {
        flexDirection: "row",
        justifyContent: "flex-start",
        gap: 10,
    },
    numbers: {
        flexDirection: "row",
        justifyContent: "space-around"
    }
  });
  

const RepositoryItem = (props) => {

    const {width} = useWindowDimensions();

    return (
        <View testID="repositoryItem" style={styles.card}>
            <View style={styles.main}>
                <Image style={styles.avatar} source={{ uri: props.ownerAvatarUrl,}}/>
                <View style={{flexGrow: 1, gap: 10}}>
                    <Text fontWeight="bold">{props.fullName}</Text>
                    <Text color="textSecondary" style={{flexWrap: "wrap", width: (width - 70)}}>{props.description}</Text>
                    <Tag>{props.language}</Tag>
                </View>
            </View>
            <View style={styles.numbers}>
                <NumberText num={props.stargazersCount} grayText={"Stars"} />
                <NumberText num={props.forksCount} grayText={"Forks"} />
                <NumberText num={props.reviewCount} grayText={"Reviews"} />
                <NumberText num={props.ratingAverage} grayText={"Rating"} />
            </View>
            {
                props.url && (
                    <View>
                        <Pressable onPress={() => Linking.openURL(props.url)} style={{padding: 12, borderRadius: 5, backgroundColor: theme.colors.primary}}>
                            <Text style={{color: "white", alignSelf: "center"}} >
                                Open in Github
                            </Text>
                        </Pressable>
                    </View>
                )
            }
        </View>
    )
}

export default RepositoryItem