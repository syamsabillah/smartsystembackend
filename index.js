import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import session from "express-session";
import { PrismaSessionStore } from "@quixo3/prisma-session-store";
import { PrismaClient } from "@prisma/client";
import bodyParser from "body-parser";

import AuthRoute from "./routes/AuthRoute.js";
import UserRoute from "./routes/UserRoute.js";
import SuhuRoute from "./routes/suhu.js";
import BarangRoute from "./routes/barang.js";

const app = express();
dotenv.config();

app.use(express.json());
//session store
const store = new PrismaSessionStore(new PrismaClient(), {
  dbRecordIdIsSessionId: true,
  dbRecordIdFunction: undefined,
});

app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto",
    },
  })
);

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use(bodyParser.json());

// app.use(AuthRoute);
app.use(UserRoute);
app.use(SuhuRoute);
app.use(BarangRoute);

app.listen(process.env.APP_PORT, () => {
  console.log(`server up and running on port ${process.env.APP_PORT}`);
});
