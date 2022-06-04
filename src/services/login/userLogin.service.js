import users from "../../database";
import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userLoginService = async (email, password) => {
  const user = users.find((user) => user.email === email);

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign({ isAdm: user.isAdm }, "SECRET_KEY", {
    expiresIn: "24h",
    subject: user.id,
  });

  return token;
};

export default userLoginService;
