import express, { Router } from "express";
import {
  getCompanies,
  getCompanyById,
  getCompanyJobListing,
  getCompanyProfile,
  register,
  signIn,
  updateCompanyProfile,
} from "../controllers/companiesController.js"
import userAuth from "../middlewares/authMiddleware.js"
const router = express.Router()


// REGISTER
router.post("/register",register)

// LOGIN
router.post("/login",signIn)

// GET DATA
router.get("/get-company-profile", userAuth, getCompanyProfile)
router.post("/get-company-joblisting", userAuth, getCompanyJobListing)
router.get("/", getCompanies);
router.get("/get-company/:id", getCompanyById)

// UPDATE DATA
router.put("/update-company", userAuth, updateCompanyProfile)

export default router
