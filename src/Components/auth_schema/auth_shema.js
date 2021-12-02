import * as Yup from 'yup'

export const auth_schema = Yup.object({
    title: Yup.string()
        .min(4, 'Title must be at least 4 character long')
        .required("Can't be empty"),
    description: Yup.string()
        .min(15, 'Feedback detail must be at least 15 character long')
        .required("Can't be empty")
})

export const register_validation_schema = Yup.object({
    username: Yup.string()
        .min(4, 'Username must be at least 4 character long')
        .max(50)
        .required('Please enter a username'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 character long')
        .required('Please enter Your password'),
    first_name: Yup.string()
        .required('Please enter first name'),
    last_name: Yup.string()
        .required('Please enter last name')
})

export const login_validation_schema = Yup.object({
    username: Yup.string()
        .required('Please enter a username'),
    password: Yup.string()
        .required('Please enter Your password'),
})