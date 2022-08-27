//* Imports
import { Router } from "express";
import { methods as lenguageControllers } from "./../controllers/language.controller";

//* Create a router variable and assign express.Router() to it
const router = Router();

//* Route to root path
router.get("/getAll", lenguageControllers.getAllLanguages);

//* Export the router variable
export default router;
