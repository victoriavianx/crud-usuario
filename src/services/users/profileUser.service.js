import users from "../../database";

const profileUserService = (id) => {
  const user = users.find((user) => user.uuid === id);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

export default profileUserService;
