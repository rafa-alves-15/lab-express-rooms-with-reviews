require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectToDb = require("./config/db.config");
const userRouter = require("./routes/user.routes");

const app = express();

app.use(express.json());

app.use(cors({ origin: "http://localhost:3000" }));

async function init() {
  try {
    await connectToDb();

    console.log("Conectado ao banco de dados!");

    app.use("/", userRouter);

    app.use((err, req, res) => {
      console.log(error);
      if (err) {
        return res.status(500).json({ error: err.message });
      }
    });

    app.listen(4000, () => console.log("Servidor rodando na porta 4000!"));
  } catch (err) {
    console.log("Erro ao conectar ao banco de dados!", err);
    process.exit(1);
  }
}
init();
