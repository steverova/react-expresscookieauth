import { StatusCodes } from "http-status-codes";
import UserRepository from "../repository/user.repository.js";

const UserService = () => {
  const userRepository = UserRepository();

  const index = async (_, res) => {
    res.status(StatusCodes.OK).send({ message: "Hello, World!" });
  };

  const create = async (req, res) => {
    const user = req.body;
    const response = await userRepository.create(user);
    res.status(StatusCodes.OK).send({ message: "User created", response });
  };

  const getAll = async (_, res) => {
    const response = userRepository.getAll();
    res.status(StatusCodes.OK).send(response);
  };

  const getById = async (req, res) => {
    const { id } = req.params;
    
    const response = await userRepository.getById(id);
    console.log('hey ==>', response);
    res.status(StatusCodes.OK).send(response);
  }

  return {
    index,
    create,
    getAll,
    getById
  };
};

export default UserService;
