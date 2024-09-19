import { View } from "react-native";
import Text from "./Text";

import handleNumber from "../../utils/numbers";

const NumberText = ({num, grayText}) => {

    const abbreviatedNumber = handleNumber(num)

    return (
        <View>
            <Text fontWeight="bold">{abbreviatedNumber}</Text>
            <Text color="textSecondary">{grayText}</Text>
        </View>
    )
}

export default NumberText