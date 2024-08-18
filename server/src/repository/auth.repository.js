import Collections from "../db/index.js";
import authHelper from "../helpers/auth.helper.js";

const AuthRepository = () => {
  const { userCollection, authCollection } = Collections();

  const login = (user = { email: "", password: "" }) => {
    console.log(user);
  };

  const register = async (
    user = {
      name: "",
      lastname: "",
      email: "",
      password: "",
      avatar: "",
      active: false,
    }
  ) => {
    const hashResponse = await authHelper.hashPassword(user.password);

    const userResponse = userCollection.insertAsync({
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      avatar: user.avatar,
      active: user.active,
    });

    const authResponse = authCollection.insertAsync({
      email: user.email,
      password: hashResponse.hashedPassword,
      salt: hashResponse.salt,
      active: true,
    });

    const promiseResponse = await Promise.all([userResponse, authResponse]);

    return promiseResponse;
  };

  const logout = () => {};

  const forgotPassword = () => {};

  const resetPassword = () => {};

  const changePassword = () => {};

  const verifyEmail = async (email) => {
    const user = await userCollection.findOneAsync({ email });
    const auth = await authCollection.findOneAsync({ email });

    if (!user || !auth) {
      return { message: "NOT_FOUND", isFound: false, data: auth };
    }
    return { message: "FOUND", isFound: true, data: { auth, user } };
  };

  const resendEmailVerification = () => {};

  return {
    login,
    register,
    logout,
    forgotPassword,
    resetPassword,
    changePassword,
    verifyEmail,
    resendEmailVerification,
  };
};

export default AuthRepository;
