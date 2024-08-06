import express from "express";
import {
  getSuhu,
  getSuhuById,
  getLatestSuhu,
  createSuhu,
  deleteSuhu,
  updateSuhu,
} from "../controllers/suhu.js";

const router = express.Router();

//suhu
router.get("/suhu", getSuhu);
router.get("/suhu/:id", getSuhuById);
router.post("/suhu", createSuhu);
router.patch("/suhu/:id", updateSuhu);
router.delete("/suhu/:id", deleteSuhu);
router.get("/latestsuhu", getLatestSuhu);

export default router;
