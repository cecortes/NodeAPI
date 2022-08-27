//* Import config module
import { config } from "dotenv ";

//* Call the config function
config();

//* Export the config module
export default {
  host: process.env.HOST || "",
  database: process.env.DATABASE || "",
  user: process.env.USER || "",
  password: process.env.PASSWORD || "",
};
