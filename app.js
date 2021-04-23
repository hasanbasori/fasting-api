// require("dotenv").config();
const express = require("express");
const { sequelize } = require("./models");
// const errorMiddleware = require("./middleware/error");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res) => {
  res.status(404).json({ message: "path not found on this server" });
});

// app.use("/posts", postRoute);
// app.use("/friends", friendRoute);
// app.use("/users", userRoute);
// app.post("/register", userController.register);
// app.post("/login", userController.login);    ยังไม่เสร็จ**

// app.use(errorMiddleware);
// sequelize.sync({ force: true });
//

// sequelize
//   .authenticate()
//   .then(() => console.log("DB connected"))
//   .catch((err) => console.log(err));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
