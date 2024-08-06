/*
  Warnings:

  - You are about to drop the column `jenis_barang` on the `barang_keluar` table. All the data in the column will be lost.
  - You are about to drop the column `jumlah` on the `barang_keluar` table. All the data in the column will be lost.
  - You are about to drop the column `jenis_barang` on the `barang_masuk` table. All the data in the column will be lost.
  - You are about to drop the column `jumlah` on the `barang_masuk` table. All the data in the column will be lost.
  - You are about to drop the column `jenis_barang` on the `barang_prediksi` table. All the data in the column will be lost.
  - You are about to drop the column `jumlah` on the `barang_prediksi` table. All the data in the column will be lost.
  - Added the required column `ayam` to the `barang_keluar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kubis` to the `barang_keluar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lobak` to the `barang_keluar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `saos` to the `barang_keluar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ayam` to the `barang_masuk` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kubis` to the `barang_masuk` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lobak` to the `barang_masuk` table without a default value. This is not possible if the table is not empty.
  - Added the required column `saos` to the `barang_masuk` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ayam` to the `barang_prediksi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kubis` to the `barang_prediksi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lobak` to the `barang_prediksi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `saos` to the `barang_prediksi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `barang_keluar` DROP COLUMN `jenis_barang`,
    DROP COLUMN `jumlah`,
    ADD COLUMN `ayam` INTEGER NOT NULL,
    ADD COLUMN `kubis` INTEGER NOT NULL,
    ADD COLUMN `lobak` INTEGER NOT NULL,
    ADD COLUMN `saos` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `barang_masuk` DROP COLUMN `jenis_barang`,
    DROP COLUMN `jumlah`,
    ADD COLUMN `ayam` INTEGER NOT NULL,
    ADD COLUMN `kubis` INTEGER NOT NULL,
    ADD COLUMN `lobak` INTEGER NOT NULL,
    ADD COLUMN `saos` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `barang_prediksi` DROP COLUMN `jenis_barang`,
    DROP COLUMN `jumlah`,
    ADD COLUMN `ayam` INTEGER NOT NULL,
    ADD COLUMN `kubis` INTEGER NOT NULL,
    ADD COLUMN `lobak` INTEGER NOT NULL,
    ADD COLUMN `saos` INTEGER NOT NULL;
