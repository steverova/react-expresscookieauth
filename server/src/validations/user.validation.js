import * as yup from "yup"

const userValidation = () => {
	const create = yup.object().shape({
		avatar: yup.string().url("Must be a valid URL"),
		active: yup.boolean(),
		name: yup
			.string()
			.matches(
				/^[a-zA-Z'-\s]*$/,
				"Name can only contain letters, spaces, hyphens, and apostrophes",
			)
			.min(2, "Name must be at least 2 characters long")
			.max(15, "Name must be less than or equal to 15 characters long")
			.required("Name is required"),
		lastname: yup
			.string()
			.matches(
				/^[a-zA-Z'-\s]*$/,
				"Lastname can only contain letters, spaces, hyphens, and apostrophes",
			)
			.min(2, "Lastname must be at least 2 characters long")
			.max(15, "Lastname must be less than or equal to 15 characters long")
			.required("Lastname is required"),
		email: yup
			.string()
			.email("Must be a valid email")
			.required("Email is required"),
		password: yup
			.string()
			.matches(
				/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
				"Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character",
			)
			.required("Password is required"),
	})

	const login = yup.object().shape({
		email: yup
			.string()
			.email("Must be a valid email")
			.required("Email is required"),
		password: yup
			.string()
			.matches(
				/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
				"Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character",
			)
			.required("Password is required"),
	})

	return { create, login }
}

export default userValidation
