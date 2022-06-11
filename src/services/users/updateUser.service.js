import users from "../../database";

const updateUserService = (name, email, uuid, isAdm, idParam) => {
  if (uuid !== idParam && isAdm === false) {
    throw new Error("Missing admin permissions");
  }

  const userIndex = users.findIndex((user) => user.uuid === uuid);

  const time = Date.now();

  const today = new Date(time);

  const dateFormated = today.toISOString();

  const updateUser = {
    uuid: uuid,
    name,
    email,
    isAdm: isAdm,
    createdOn: dateFormated,
    updatedOn: dateFormated,
  };

  users[userIndex] = { ...users[userIndex], ...updateUser };

  const updatedUser = { ...updateUser };

  return updatedUser;
};

export default updateUserService;
