import userLoginService from "../services/login/userLogin.service";

export const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await userLoginService(email, password);
    return res.status(200).json({ token: token });
  } catch (error) {
    return res.status(401).json({
      message: error.message,
    });
  }
};
