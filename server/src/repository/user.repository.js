import Collections from "../db/index.js";

const respondeHandler = (res) => {
  return { success: !!res._id, data: res };
};

const UserRepository = () => {
  const { userCollection } = Collections();

  const create = async (user) => {
    if (!user) {
      throw new Error("User is required");
    }

    const res = await userCollection.insertAsync(user);
    return respondeHandler(res);
  };

  const getAll = () => {
    const res = userCollection.getAllData();
    return respondeHandler(res);
  };

  const getById = async (id) => {
    if (!id) {
      throw new Error("Id is required");
    }
    const res = await userCollection.findOneAsync({ _id: id });
    console.log(res);
    return respondeHandler(res);
  };

  const userRepository = {
    create,
    getAll,
    getById,
  };

  return userRepository;
};

export default UserRepository;
