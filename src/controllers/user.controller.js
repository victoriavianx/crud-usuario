// import users from "../database";
import createUserService from "../services/users/createUser.service";
import deleteUserService from "../services/users/deleteUser.service";
import listUserService from "../services/users/listUser.service";
import profileUserService from "../services/users/profileUser.service";
import updateUserService from "../services/users/updateUser.service";

export const createUser = async (req, res) => {
  const { name, email, password, isAdm } = req.body;

  try {
    const user = await createUserService(name, email, password, isAdm);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const listUser = (req, res) => {
  const users = listUserService();

  return res.status(200).json(users);
};

export const updateUser = (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const updatedUser = updateUserService(name, email, id);

    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = deleteUserService(id);

    return res.status(200).json(deletedUser);
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

export const profileUser = (req, res) => {
  const { id } = req.params;

  try {
    const user = profileUserService(id);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};
