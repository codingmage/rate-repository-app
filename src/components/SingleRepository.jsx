import { useQuery } from "@apollo/client";
import { useParams } from "react-router-native";
import { GET_REPOSITORY } from "../graphql/queries";
import Text from "./Text";
import RepositoryItem from "./RepositoryItem";
import { FlatList, StyleSheet, useWindowDimensions, View } from "react-native";
import theme from "../theme";
import { format } from "date-fns";

const styles = StyleSheet.create({
    card: {
        padding: 10,
        backgroundColor: "white",
        gap: 10,
        flexDirection: "row"
    },
    rating: {
      width: 50,
      height: 50,
      borderWidth: 2,
      borderColor: theme.colors.primary,
      borderRadius: 50,
      color: theme.colors.primary,
      alignItems: "center",
      justifyContent: "center",
    },
    main: {
        flexDirection: "row",
        justifyContent: "flex-start",
        gap: 10,
    },
    numbers: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

const ReviewItem = ({review}) => {

    const {width} = useWindowDimensions();

    const date = format(new Date(review.createdAt), "P")

    return (
        <View style={styles.card}>
            <View style={styles.rating}>
                <Text style={{color: theme.colors.primary, fontWeight: theme.fontWeights.bold}}>{review.rating}</Text>
            </View>
            <View style={{gap: 2}}>
                <Text fontWeight="bold">{review.user.username}</Text>
                <Text color="textSecondary">{date}</Text>
                <Text style={{marginTop: 5, flexWrap: "wrap", width: (width - 80)}}>{review.text}</Text>
            </View>   
        </View>
    )
}

const SingleRepository = () => {
    const { id } = useParams()
    const { data, error, loading } = useQuery(GET_REPOSITORY, {
        fetchPolicy: "cache-and-network",
        variables: { id },
        onError: console.log(error)
      });

    if(loading) {
        return <Text>Loading...</Text>
    } else {
        const repositoryInfo = data.repository
        const reviews = repositoryInfo.reviews.edges.map(edge => edge.node)
        return (
            <FlatList
                data={reviews}
                renderItem={({item}) => <ReviewItem review={item}/>}
                ItemSeparatorComponent={ItemSeparator}
                keyExtractor={({id}) => id}
                ListHeaderComponent={() => <RepositoryItem {...repositoryInfo} />}
            />
        )
    }
}

export default SingleRepository