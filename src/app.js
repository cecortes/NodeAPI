//* Import the express module
import express from "express";

//* Import Morgan module for logging
import morgan from "morgan";

//* Import the language routes
import languageRoutes from "./routes/language.routes";

//* Create app variable and assign express() to it
const app = express();

//* Settings
app.set("port", process.env.PORT || 6969);

//* Middlewares
app.use(morgan("dev"));
app.use(express.json());

//* Routes
app.use("/api/languages", languageRoutes);

//* Export the app variable
export default app;
