-- MySQL Script generated by MySQL Workbench
-- Sat Feb 12 01:10:02 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema losroperosdb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema losroperosdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `losroperosdb` DEFAULT CHARACTER SET utf8 ;
USE `losroperosdb` ;

-- -----------------------------------------------------
-- Table `losroperosdb`.`image`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `losroperosdb`.`image` (
  `idImage` INT NOT NULL,
  `imageName` VARCHAR(100) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  PRIMARY KEY (`idImage`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `losroperosdb`.`status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `losroperosdb`.`status` (
  `idStatus` INT NOT NULL,
  `nameStatus` VARCHAR(100) CHARACTER SET 'utf8' NOT NULL,
  `DescriptionStatus` VARCHAR(255) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  PRIMARY KEY (`idStatus`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `losroperosdb`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `losroperosdb`.`product` (
  `idProduct` INT NOT NULL,
  `name` VARCHAR(100) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `model` VARCHAR(100) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `brand` VARCHAR(100) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `size` VARCHAR(100) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `color` VARCHAR(100) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `amount` VARCHAR(100) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `price` DOUBLE NULL DEFAULT NULL,
  `decriptionProduct` VARCHAR(255) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `datatimeProduct` DATETIME NULL DEFAULT NULL,
  `idStatus` INT NULL DEFAULT NULL,
  INDEX `fk_product_status_idstatus_idx` (`idStatus` ASC) VISIBLE,
  INDEX `fk_product_image_idx` (`idProduct` ASC) VISIBLE,
  CONSTRAINT `fk_image_product`
    FOREIGN KEY (`idProduct`)
    REFERENCES `losroperosdb`.`image` (`idImage`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_product_status_idstatus`
    FOREIGN KEY (`idStatus`)
    REFERENCES `losroperosdb`.`status` (`idStatus`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `losroperosdb`.`reference`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `losroperosdb`.`reference` (
  `idreference` INT NOT NULL,
  `language` VARCHAR(100) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `background` VARCHAR(100) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `money` VARCHAR(100) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  PRIMARY KEY (`idreference`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `losroperosdb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `losroperosdb`.`user` (
  `idUser` INT NOT NULL,
  `firstName` VARCHAR(100) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `lastName` VARCHAR(100) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `birthday` DATE NULL DEFAULT NULL,
  `address` VARCHAR(255) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `datatimeUser` DATETIME NULL DEFAULT NULL,
  `idReference` INT NULL DEFAULT NULL,
  PRIMARY KEY (`idUser`),
  INDEX `fk_user_reference_idreference_idx` (`idReference` ASC) VISIBLE,
  CONSTRAINT `fk_user_reference_idreference`
    FOREIGN KEY (`idReference`)
    REFERENCES `losroperosdb`.`reference` (`idreference`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `losroperosdb`.`sale`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `losroperosdb`.`sale` (
  `idSale` INT NOT NULL,
  `price` DOUBLE NULL DEFAULT NULL,
  `discount` INT NULL DEFAULT NULL,
  `priceSold` DOUBLE NULL DEFAULT NULL,
  `dataTimeSale` DATETIME NULL DEFAULT NULL,
  `idUser` INT NULL DEFAULT NULL,
  PRIMARY KEY (`idSale`),
  INDEX `fk_sale_user_idUser_idx` (`idUser` ASC) VISIBLE,
  CONSTRAINT `fk_sale_user_idUser`
    FOREIGN KEY (`idUser`)
    REFERENCES `losroperosdb`.`user` (`idUser`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `losroperosdb`.`saleproduct`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `losroperosdb`.`saleproduct` (
  `idSaleProduct` INT NOT NULL,
  `idProduct` INT NOT NULL,
  `idSale` INT NOT NULL,
  PRIMARY KEY (`idSaleProduct`),
  INDEX `fk_saleproduct_sale_idsale_idx` (`idSale` ASC) VISIBLE,
  INDEX `fk_saleProduct_product_idx` (`idProduct` ASC) VISIBLE,
  CONSTRAINT `fk_saleProduct_product`
    FOREIGN KEY (`idProduct`)
    REFERENCES `losroperosdb`.`product` (`idProduct`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_saleproduct_sale_idsale`
    FOREIGN KEY (`idSale`)
    REFERENCES `losroperosdb`.`sale` (`idSale`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;