import Text from "./Text"

const Subheading = (props) => {
    return (
        <Text color="primary" fontSize="subheading" fontWeight="bold">{props.children}</Text>
    )
}

export default Subheading