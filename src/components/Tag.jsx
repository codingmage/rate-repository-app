import { View } from "react-native"
import theme from "../theme"
import Text from "./Text"

const Tag = (props) => {
    return (
        <View style={{flexGrow: 0, flexDirection: "row"}}>
            <Text style={{backgroundColor: theme.colors.primary, color: "white", flexGrow: 0, padding: 6, borderRadius: 5}} >
                {props.children}
            </Text>
        </View>
    )
}

export default Tag