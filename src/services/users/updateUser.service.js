import users from "../../database";
import * as bcrypt from "bcryptjs";

const updateUserService = (name, email, id) => {
  const updateUser = {
    name,
    email,
  };

  const userIndex = users.findIndex((user) => user.uuid === id);

  if (userIndex === -1) {
    throw new Error("User not found");
  }

  users[userIndex] = { ...users[userIndex], ...updateUser };

  return users[userIndex];
};

export default updateUserService;
