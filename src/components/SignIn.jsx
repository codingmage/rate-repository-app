import { Pressable, TextInput, View, StyleSheet } from "react-native";
import Text from "./Text";
import { useFormik } from "formik";
import theme from "../theme";

const styles = StyleSheet.create({
  inputbox: {
    padding: 10,
    borderWidth: 1,
    margin: 10
  },
  button: {
    backgroundColor: theme.colors.primary,
    color: "white", 
    padding: 14,
    margin: 10,
    borderRadius: 5,
    alignItems: "center"
  }
})

const initialValues = {
  username: "",
  password: ""
}

const onSubmit = (values) => {
  console.log(values);
};

const SignIn = () => {

  const formik = useFormik({
    initialValues,
    onSubmit
  })

  return (
    <View>
      <TextInput style={styles.inputbox} placeholderTextColor={theme.colors.textSecondary} placeholder="Username" value={formik.values.username} onChangeText={formik.handleChange("username")}/>
      <TextInput style={styles.inputbox} placeholderTextColor={theme.colors.textSecondary} placeholder="Password" value={formik.values.password} onChangeText={formik.handleChange("password")} secureTextEntry/>
      <Pressable style={styles.button}onPress={formik.handleSubmit}>
        <Text style={{color: "white"}}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;