-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
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
  `nameStatus` VARCHAR(100) NULL,
  `datatimeProduct` DATETIME NULL DEFAULT NULL,
  INDEX `fk_product_image_idx` (`idProduct` ASC) VISIBLE,
  CONSTRAINT `fk_image_product`
    FOREIGN KEY (`idProduct`)
    REFERENCES `losroperosdb`.`image` (`idImage`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `losroperosdb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `losroperosdb`.`user` (
  `idUser` INT NOT NULL,
  `firstName` VARCHAR(100) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `lastName` VARCHAR(100) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `userName` VARCHAR(100) NULL,
  `email` VARCHAR(100) NULL,
  `password` VARCHAR(100) NULL,
  `birthday` DATE NULL DEFAULT NULL,
  `address` VARCHAR(255) CHARACTER SET 'utf8' NULL DEFAULT NULL,
  `datatimeUser` DATETIME NULL DEFAULT NULL,
  `idImageUser` NVARCHAR(100) NULL,
  PRIMARY KEY (`idUser`))
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
