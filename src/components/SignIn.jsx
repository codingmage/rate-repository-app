import { Pressable, TextInput, View, StyleSheet } from "react-native";
import Text from "./Text";
import { useFormik } from "formik";
import theme from "../theme";
import * as yup from "yup"
import useSignIn from "../hooks/useSignIn";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    padding: 5
  },
  inputbox: {
    padding: 10,
    borderWidth: 1,
    margin: 10,
    borderRadius: 5
  },
  errorBox: {
    borderColor: theme.colors.error
  },
  error: {
    color: theme.colors.error,
    paddingLeft: 11
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

const validationSchema = yup.object().shape({
  username: yup.string().min(3, "Username must have at least 3 characters").required("Username is required"),
  password: yup.string().min(3, "Password must have at least 3 characters").required("Password is required")
})

const initialValues = {
  username: "",
  password: ""
}

const SignIn = () => {

  const navigate = useNavigate()

  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const {username, password} = values

    try {
      const {data} = await signIn({username, password})
      const token = data.authenticate.accessToken
      console.log(token)
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })

  return (
    <View style={styles.container}>
      <TextInput 
        style={[styles.inputbox, formik.touched.username && formik.errors.username ? styles.errorBox : ""]} 
        placeholderTextColor={theme.colors.textSecondary} 
        placeholder="Username" value={formik.values.username} 
        onChangeText={formik.handleChange("username")}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={styles.error}>{formik.errors.username}</Text>
      )}
      <TextInput 
        style={styles.inputbox} 
        placeholderTextColor={theme.colors.textSecondary} 
        placeholder="Password" value={formik.values.password} 
        onChangeText={formik.handleChange("password")} 
        secureTextEntry
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={styles.error}>{formik.errors.password}</Text>
      )}
      <Pressable style={styles.button}onPress={formik.handleSubmit}>
        <Text style={{color: "white"}}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;