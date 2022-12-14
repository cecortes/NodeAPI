//* Imports
import { Router } from "express";
import { methods as lenguageControllers } from "./../controllers/language.controller";

//* Create a router variable and assign express.Router() to it
const router = Router();

//* Route to get all languages
router.get("/getAll", lenguageControllers.getAllLanguages);

//* Route to add a new language
router.post("/addNew", lenguageControllers.addLanguage);

//* Route to get a language by id
router.get("/getById/:id", lenguageControllers.getById);

//* Delete a language by id
router.delete("/deleteById/:id", lenguageControllers.deleteById);

//* Update a language by id
router.put("/updateById/:id", lenguageControllers.updateById);

//* Export the router variable
export default router;
