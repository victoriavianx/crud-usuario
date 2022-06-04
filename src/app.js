import express from "express";
import loginRouter from "./routes/login.routes";
import userRouter from "./routes/user.routes";

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/login", loginRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`O app está rodando na porta ${port}`);
});
