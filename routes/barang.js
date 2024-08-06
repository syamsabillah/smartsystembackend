import express from "express";
import {
  getBarangMasuk,
  getBarangKeluarWeek,
  getBarangMasukById,
  createBarangMasuk,
  updateBarangMasuk,
  deleteBarangMasuk,
  getBarangKeluar,
  getBarangKeluarById,
  createBarangKeluar,
  updateBarangKeluar,
  deleteBarangKeluar,
  getBarangPrediksi,
  getBarangPrediksiById,
  createBarangPrediksi,
  updateBarangPrediksi,
  deleteBarangPrediksi,
  getBarangPrediksiLatest,
} from "../controllers/barang.js";

const router = express.Router();

//barang masuk
router.get("/barangmasuk", getBarangMasuk);
router.get("/barangmasuk/:id", getBarangMasukById);
router.post("/barangmasuk", createBarangMasuk);
router.patch("/barangmasuk/:id", updateBarangMasuk);
router.delete("/barangmasuk/:id", deleteBarangMasuk);

//barang masuk
router.get("/barangkeluar", getBarangKeluar);
router.get("/barangkeluarweek", getBarangKeluarWeek);
router.get("/barangkeluar/:id", getBarangKeluarById);
router.post("/barangkeluar", createBarangKeluar);
router.patch("/barangkeluar/:id", updateBarangKeluar);
router.delete("/barangkeluar/:id", deleteBarangKeluar);

//barang prediksi
router.get("/barangprediksi", getBarangPrediksi);
router.get("/barangprediksilatest", getBarangPrediksiLatest);
router.get("/barangprediksi/:id", getBarangPrediksiById);
router.post("/barangprediksi", createBarangPrediksi);
router.patch("/barangprediksi/:id", updateBarangPrediksi);
router.delete("/barangprediksi/:id", deleteBarangPrediksi);

export default router;
