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
  try {
    const users = listUserService();

    return res.status(200).json(users);
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
};

export const updateUser = (req, res) => {
  const { uuid } = req.params;
  const { name, email } = req.body;
  const { isAdm } = req.user;

  try {
    const updatedUser = updateUserService(name, email, uuid, isAdm);

    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(401).json({
      message: error.message,
    });
  }
};

export const deleteUser = (req, res) => {
  const { uuid } = req.params;

  try {
    const deletedUser = deleteUserService(uuid);

    return res.status(200).json({
      message: deletedUser,
    });
  } catch (error) {
    return res.status(401).json({
      message: "Missing admin permissions",
    });
  }
};

export const profileUser = (req, res) => {
  const id = req.user.uuid;

  try {
    const user = profileUserService(id);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(401).json({
      message: error.message,
    });
  }
};
