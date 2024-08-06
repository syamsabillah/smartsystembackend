/*
  Warnings:

  - You are about to drop the `barang` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `barang`;

-- CreateTable
CREATE TABLE `barang_masuk` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `jenis_barang` VARCHAR(191) NULL,
    `jumlah` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `barang_keluar` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `jenis_barang` VARCHAR(191) NULL,
    `jumlah` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `barang_prediksi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `jenis_barang` VARCHAR(191) NULL,
    `jumlah` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
