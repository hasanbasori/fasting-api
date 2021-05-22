require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userController = require("./controller/userController");
const userRoute = require("./routes/userRoute");
const errorMiddleware = require("./middleware/error");

const { sequelize } = require("./models");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/register", userController.register);
app.get("/login", userController.login);
app.use((req, res) => {
  res.status(404).json({ message: "path not found on this server" });
});

// app.use("/posts", postRoute);
// app.use("/friends", friendRoute);
// app.use("/users", userRoute);
// app.post("/login", userController.login);    ยังไม่เสร็จ**

app.use(errorMiddleware);

// sequelize.sync({ force: true });

//

sequelize
  .authenticate()
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
