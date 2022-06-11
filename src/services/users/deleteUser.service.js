import users from "../../database";

const deleteUserService = (uuid, isAdm, idParam) => {
  if (uuid !== idParam && isAdm === false) {
    throw new Error("Missing admin permissions");
  }

  const userIndex = users.findIndex((user) => user.uuid === uuid);

  users.splice(userIndex, 1);

  return "User deleted with success";
};

export default deleteUserService;
