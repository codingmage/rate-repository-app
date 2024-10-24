import { useFormik } from "formik"
import { Pressable, StyleSheet, TextInput, View } from "react-native"
import * as yup from "yup"
import Text from "./Text"
import theme from "../theme"
import useAddReview from "../hooks/useAddReview"
import { useNavigate } from "react-router-native"

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
    owner: yup.string().required("Repository owner's name is required"),
    name: yup.string().required("Repository's name is required"),
    rating: yup.number().min(0, "Rating must be between 0 and 100").max(100, "Rating must be between 0 and 100").required("Rating is required").positive().integer(),
    review: yup.string().notRequired()
})
  
const initialValues = {
    owner: "",
    name: "",
    rating: "",
    review: ""
}

export const AddReview = () => {

    const [createReview] = useAddReview()

    const navigate = useNavigate()

    const onSubmit = async (values) => {
        const {owner, name, rating, review} = values

        try {
          const {data} = await createReview({owner, name, rating, review})
          const repId = data.createReview.repositoryId
          navigate(`/repository/${repId}`)
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
          style={[styles.inputbox, formik.touched.owner && formik.errors.owner ? styles.errorBox : ""]} 
          placeholderTextColor={theme.colors.textSecondary} 
          placeholder="Repository owner name" value={formik.values.owner} 
          onChangeText={formik.handleChange("owner")}
        />
        {formik.touched.owner && formik.errors.owner && (
          <Text style={styles.error}>{formik.errors.owner}</Text>
        )}
        <TextInput 
          style={styles.inputbox} 
          placeholderTextColor={theme.colors.textSecondary} 
          placeholder="Repository name" value={formik.values.name} 
          onChangeText={formik.handleChange("name")} 
        />
        {formik.touched.name && formik.errors.name && (
          <Text style={styles.error}>{formik.errors.name}</Text>
        )}
        <TextInput 
          style={styles.inputbox} 
          placeholderTextColor={theme.colors.textSecondary} 
          placeholder="Rating between 0 and 100" value={formik.values.rating}
          keyboardType="numeric" 
          onChangeText={formik.handleChange("rating")}
        />
        {formik.touched.rating && formik.errors.rating && (
          <Text style={styles.error}>{formik.errors.rating}</Text>
        )}
        <TextInput 
          style={styles.inputbox} 
          placeholderTextColor={theme.colors.textSecondary} 
          placeholder="Review" value={formik.values.review} 
          onChangeText={formik.handleChange("review")}
          multiline
        />
        {formik.touched.review && formik.errors.review && (
          <Text style={styles.error}>{formik.errors.review}</Text>
        )}
        <Pressable style={styles.button}onPress={formik.handleSubmit}>
          <Text style={{color: "white"}}>Create a Review</Text>
        </Pressable>
      </View>
    );
}