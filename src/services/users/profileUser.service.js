import users from "../../database";

const profileUserService = (uuid) => {
  let user = users.find((user) => user.uuid === uuid);

  if (!user) {
    throw new Error("User not found");
  }

  user = {
    uuid: user.uuid,
    name: user.name,
    email: user.email,
    isAdm: user.isAdm,
    createdOn: user.createdOn,
    updatedOn: user.updatedOn,
  };

  return user;
};

export default profileUserService;
