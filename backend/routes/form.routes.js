import express from "express";
import {
  getForm,
  listForms,
  saveForm,
  updateForm,
} from "../controllers/form.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

//create form
router.post("/save", isAuthenticated, saveForm);

//update form
router.patch("/update/:id", isAuthenticated, updateForm);

//list forms
router.get("/list", isAuthenticated, listForms);

//fetch form
router.get("/:id", isAuthenticated, getForm);

export default router;
