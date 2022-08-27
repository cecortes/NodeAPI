//* Imports
import { Router } from "express";
import { methods as lenguageControllers } from "./../controllers/language.controller";

//* Create a router variable and assign express.Router() to it
const router = Router();

//* Route to get all languages
router.get("/getAll", lenguageControllers.getAllLanguages);

//* Route to add a new language
router.post("/addNew", lenguageControllers.addLanguage);

//* Export the router variable
export default router;
