import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//Barang Masuk
export const getSuhu = async (req, res) => {
  try {
    const response = await prisma.suhu.findMany({
      orderBy: {
        id: `asc`,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getSuhuById = async (req, res) => {
  try {
    const response = await prisma.suhu.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const createSuhu = async (req, res) => {
  const { suhu } = req.body;
  try {
    await prisma.suhu.create({
      data: {
        suhu: Number(suhu),
      },
    });
    res.status(201).json({ msg: "Register Berhasil" });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Internal Server Error",
    });
  }
};

export const updateSuhu = async (req, res) => {
  const { suhu } = req.body;
  try {
    const truk = await prisma.barang_masuk.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        suhu: Number(suhu),
      },
    });
    res.status(201).json(truk);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteSuhu = async (req, res) => {
  try {
    const response = await prisma.suhu.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: error.message });
  }
};

export const getLatestSuhu = async (req, res) => {
  try {
    const response = await prisma.suhu.findFirst({
      orderBy: {
        id: "desc",
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
