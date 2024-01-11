import express from "express";
import cors from "cors";
import morgan from "morgan";
import connect from "./database/conn.js";
import router from "./router/route.js";

const app = express();
/**middleware */
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by"); // for security

const PORT = 5000;

/** HTTP GET Request */
app.get("/", (req, res) => {
  res.status(200).json("home get request");
});

/** API */
app.use("/api", router);


/**strat server when we have valid connection */
connect().then(() => {
  try {
    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`);
      });
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
}).catch((error) => {
    console.log("db connection failed");
});

/**sart the server */
