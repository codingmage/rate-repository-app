import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import Text from "./Text";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  mainList: {
    gap: 10,
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
  ? repositories.edges.map(edge => edge.node)
  : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => (
        <RepositoryItem {...item}/>
      )}
      keyExtractor={(item) => item.id}
      // other props
      style={styles.mainList}
    />
);};

const RepositoryList = () => {

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network"
  });

  if (loading) {
    return <Text>Loading...</Text>
  } else {
    const repositories = data.repositories
    return <RepositoryListContainer repositories={repositories} />;
  }

};

export default RepositoryList;