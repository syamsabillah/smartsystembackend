import { PrismaClient } from "@prisma/client";
import argon2 from "argon2";

const prisma = new PrismaClient();

export const getUsers = async (req, res) => {
  try {
    const { nama } = req.query;
    const response = await prisma.tb_user.findMany({
      where: {
        nama: nama,
      },
      orderBy: {
        id: `asc`,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const response = await prisma.tb_user.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createUser = async (req, res) => {
  const { nama, email, password } = req.body;

  const existingEmail = await prisma.tb_user.findFirst({
    where: { email: email },
  });

  const hashPassword = await argon2.hash(password);

  if (existingEmail) {
    res.status(400).json({ message: "Email telah terdaftar" });
  } else {
    try {
      await prisma.tb_user.create({
        data: {
          nama: nama,
          email: email,
          password: hashPassword,
        },
      });
      res.status(201).json({ msg: "Register Berhasil" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ msg: error.message });
    }
  }
};

export const deleteUser = async (req, res) => {
  const user = await prisma.tb_user.findUnique({
    where: {
      id: Number(req.params.id),
    },
  });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  try {
    await prisma.tb_user.delete({
      where: {
        id: user.id,
      },
    });
    res.status(200).json({ msg: "User Deleted" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ msg: "Email dan password harus diisi" });
    }

    const user = await prisma.tb_user.findFirst({ where: { email } });

    if (!user) {
      return res.status(404).json({ msg: "User tidak ditemukan" });
    }

    const match = await argon2.verify(user.password, password);

    if (!match) {
      return res.status(400).json({ msg: "Password tidak sesuai" });
    }

    res.status(200).json({ msg: "Login berhasil" });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ msg: "Terjadi kesalahan pada server" });
  }
};
