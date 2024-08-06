import { PrismaClient } from "@prisma/client";
import argon2 from "argon2";

const prisma = new PrismaClient();

export const Login = async (req, res) => {
  const user = await prisma.tb_user.findFirst({
    where: {
      email: req.body.email,
    },
  });

  if (!user) {
    return res.status(404).json({
      msg: "User tidak ditemukan",
      error: "popup_username_not_found", // Tambahkan jenis error untuk ditangani di frontend
    });
  }

  const match = await argon2.verify(user.password, req.body.password);

  if (!match) {
    return res.status(400).json({
      msg: "Password tidak sesuai",
      error: "popup_wrong_password", // Tambahkan jenis error untuk ditangani di frontend
    });
  }

  req.session.userId = user.id;
  const id = user.id;
  const nama = user.nama;
  const email = user.email;

  res.status(200).json({ id, nama, email });
};

export const Me = async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ msg: "Mohon login ke akun Anda!" });
  }

  const user = await prisma.tb_user.findFirst({
    where: {
      id: req.session.userId,
    },
  });

  if (!user) {
    return res.status(404).json({ msg: "User tidak ditemukan" });
  }

  res.status(200).json(user);
};

export const logOut = (req, res) => {
  req.session.destroy((err) => {
    // if (err) {
    //   return res.status(400).json({ msg: "Tidak dapat logout" });
    // }
    res.status(200).json({ msg: "Anda telah logout" });
  });
};
