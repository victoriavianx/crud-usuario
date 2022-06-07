import users from "../../database";
import { v4 as uuidv4 } from "uuid";

const updateUserService = (name, email, id, isAdm) => {
  const userIndex = users.findIndex((user) => user.uuid === id);

  const time = Date.now();

  const today = new Date(time);

  const dateFormated = today.toISOString();

  const updateUser = {
    uuid: id,
    name,
    email,
    isAdm: isAdm,
    createdOn: dateFormated,
    updatedOn: dateFormated,
  };

  users[userIndex] = { ...users[userIndex], ...updateUser };

  return users[userIndex];
};

export default updateUserService;
