const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8000;



app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});