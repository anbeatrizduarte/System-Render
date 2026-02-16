import express from "express";
import routes from "./routes/indexRoutes.js"
import cors from 'cors';
import db from "./config/dbConnect.js"

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log('conexão com o banco feita com sucesso')
})

const app = express();
app.use(express.json());
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://anbeatrizduarte.github.io"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"]
}));

routes(app);

export default app