import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//Barang Masuk
export const getBarangMasuk = async (req, res) => {
  try {
    const response = await prisma.barang_masuk.findMany({});
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getBarangMasukById = async (req, res) => {
  try {
    const response = await prisma.barang_masuk.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const createBarangMasuk = async (req, res) => {
  const { kubis, lobak, ayam, saos } = req.body;
  try {
    await prisma.barang_masuk.create({
      data: {
        kubis: Number(kubis),
        lobak: Number(lobak),
        ayam: Number(ayam),
        saos: Number(saos),
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

export const updateBarangMasuk = async (req, res) => {
  const { kubis, lobak, ayam, saos } = req.body;
  try {
    const truk = await prisma.barang_masuk.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        kubis: kubis,
        lobak: lobak,
        ayam: ayam,
        saos: saos,
      },
    });
    res.status(201).json(truk);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteBarangMasuk = async (req, res) => {
  try {
    const response = await prisma.barang_masuk.delete({
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

//Barang Keluar
export const getBarangKeluar = async (req, res) => {
  try {
    const response = await prisma.barang_keluar.findMany({
      orderBy: {
        id: `asc`,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getBarangKeluarWeek = async (req, res) => {
  try {
    const currentDate = new Date();
    const startOfWeek = (date) => {
      const dayOfWeek = date.getDay();
      const startDate = new Date(date);
      startDate.setDate(date.getDate() - dayOfWeek);
      startDate.setHours(0, 0, 0, 0);
      return startDate;
    };

    const weeks = [];
    let weekCounter = 1;

    // This loop assumes you're iterating over each week starting from the current date backward
    for (let i = 0; i < 4; i++) {
      // Example for last 4 weeks
      const startDate = startOfWeek(currentDate);
      const endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + 6);
      endDate.setHours(23, 59, 59, 999);

      const response = await prisma.barang_keluar.findMany({
        where: {
          createdAt: {
            gte: startDate,
            lte: endDate,
          },
        },
        select: {
          kubis: true,
          lobak: true,
          ayam: true,
          saos: true,
        },
      });

      const total = response.reduce(
        (acc, item) => {
          acc.kubis += item.kubis;
          acc.lobak += item.lobak;
          acc.ayam += item.ayam;
          acc.saos += item.saos;
          return acc;
        },
        { kubis: 0, lobak: 0, ayam: 0, saos: 0 }
      );

      // Add the week's total to the result array with a label
      weeks.push({
        minggu: `minggu ${weekCounter}`,
        ...total,
      });

      // Move the date to the previous week
      currentDate.setDate(currentDate.getDate() - 7);
      weekCounter++;
    }

    res.status(200).json(weeks);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getBarangKeluarById = async (req, res) => {
  try {
    const response = await prisma.barang_keluar.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const createBarangKeluar = async (req, res) => {
  const { kubis, lobak, ayam, saos } = req.body;
  try {
    await prisma.barang_keluar.create({
      data: {
        kubis: kubis,
        lobak: lobak,
        ayam: ayam,
        saos: saos,
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

export const updateBarangKeluar = async (req, res) => {
  const { kubis, lobak, ayam, saos } = req.body;
  try {
    const truk = await prisma.barang_keluar.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        kubis: kubis,
        lobak: lobak,
        ayam: ayam,
        saos: saos,
      },
    });
    res.status(201).json(truk);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteBarangKeluar = async (req, res) => {
  try {
    const response = await prisma.barang_keluar.delete({
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

//Barang Prediksi
export const getBarangPrediksi = async (req, res) => {
  try {
    const response = await prisma.barang_prediksi.findMany({
      orderBy: {
        id: `asc`,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getBarangPrediksiLatest = async (req, res) => {
  try {
    const response = await prisma.barang_prediksi.findFirst({
      orderBy: {
        id: "desc",
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getBarangPrediksiById = async (req, res) => {
  try {
    const response = await prisma.barang_prediksi.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const createBarangPrediksi = async (req, res) => {
  const { kubis, lobak, ayam, saos } = req.body;
  try {
    await prisma.barang_prediksi.create({
      data: {
        kubis: Number(kubis),
        lobak: Number(lobak),
        ayam: Number(ayam),
        saos: Number(saos),
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

export const updateBarangPrediksi = async (req, res) => {
  const { kubis, lobak, ayam, saos } = req.body;
  try {
    const truk = await prisma.barang_prediksi.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        kubis: kubis,
        lobak: lobak,
        ayam: ayam,
        saos: saos,
      },
    });
    res.status(201).json(truk);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteBarangPrediksi = async (req, res) => {
  try {
    const response = await prisma.barang_prediksi.delete({
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
