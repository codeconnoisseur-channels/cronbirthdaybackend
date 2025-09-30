const express = require("express");
require("./config/database");
const cors = require("cors");
const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173", "https://your-frontend.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
const PORT = process.env.PORT;

const userRouter = require("./router/userRouter");
const { cronSchedule } = require("./utils/cronJob");
app.use(userRouter);

cronSchedule();
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
