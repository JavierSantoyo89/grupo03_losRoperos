CREATE DATABASE  IF NOT EXISTS `losroperosdb` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `losroperosdb`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: losroperosdb
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `image`
--

DROP TABLE IF EXISTS `image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image` (
  `idImage` int NOT NULL,
  `imageName` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`idImage`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
/*!40000 ALTER TABLE `image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `model` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `brand` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `size` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `color` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `discount` int DEFAULT NULL,
  `price` double DEFAULT NULL,
  `decriptionProduct` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `nameStatus` varchar(100) DEFAULT NULL,
  `imgProduct` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_product_image_idx` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (11,'biybbi','Cam01','rgmvtmip','M','verde',NULL,8,'k  kjk','In-sale',''),(12,'wergwme','Cam01','yibti','Ch','blanco',NULL,6,'jmkmmjk','Season',''),(13,'wergwme','reigcpwrimg','yibti','M','melon',NULL,45454,'545454','In-sale',''),(14,'cafetera3','Nestle','rgmvtmip','M','blanco',NULL,13,'jimii','Season',''),(15,'biybbi','reigcpwrimg','yibti','M','blanco',NULL,1,'iooo','Season',''),(19,'cafetera3','Cam01','Ni idea3','Ch','Red3',NULL,7,'.op,.p,.','In-sale',''),(20,'cafetera3','Cam01','Ni idea3','Ch','Red3',NULL,7,'.op,.p,.','In-sale',''),(21,'wergwme','Cam01','Ni idea3','Ch','verde',NULL,6,'mounmnu','In-sale',''),(22,'biybbi','reigcpwrimg','yibti','Ch','Red3',NULL,11,'omoio','In-sale',''),(23,'estoy enojado','De aqui3','yibti','Ch','verde',NULL,9,'oioumnu','Season',''),(24,'wergwme','Cam01','Ni idea3','M','Red3',NULL,1,',ijmmpo','In-sale',''),(25,'..vhoe.he',',rcwc',',wrowgc','M',',xgiorgc',NULL,135,'ewrcger','Season',''),(26,'ybub','Cam01','ubbu','Ch','verde',NULL,120,'yumnui','In-sale','Product1648192173851.jpg'),(27,'omvhrrem,','omiomim','oomiop','Ch','opmopi',NULL,8,'oopomn','In-sale','Product1648192381482.jpg'),(28,'Prueba mañanera...','Prada','Pull & Bear','M','Cafe',NULL,3000,'Prueba mañanera...','In-sale','Product1648228167592.jpg'),(29,'Prueba tarde1','Prueba tard1','Prueba tarde 1','M','Violeta',10,2022,'                                Prueba tarde...','In-sale','Product1648242518505.jpg');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sale`
--

DROP TABLE IF EXISTS `sale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sale` (
  `idSale` int NOT NULL,
  `price` double DEFAULT NULL,
  `discount` int DEFAULT NULL,
  `priceSold` double DEFAULT NULL,
  `dataTimeSale` datetime DEFAULT NULL,
  `idUser` int DEFAULT NULL,
  PRIMARY KEY (`idSale`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sale`
--

LOCK TABLES `sale` WRITE;
/*!40000 ALTER TABLE `sale` DISABLE KEYS */;
/*!40000 ALTER TABLE `sale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `saleproduct`
--

DROP TABLE IF EXISTS `saleproduct`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `saleproduct` (
  `idSaleProduct` int NOT NULL,
  `idProduct` int NOT NULL,
  `idSale` int NOT NULL,
  PRIMARY KEY (`idSaleProduct`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `saleproduct`
--

LOCK TABLES `saleproduct` WRITE;
/*!40000 ALTER TABLE `saleproduct` DISABLE KEYS */;
/*!40000 ALTER TABLE `saleproduct` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `lastName` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `userName` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `idImageUser` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Javier','Santoyo',NULL,NULL,'123',NULL,'Invalid date',NULL),(2,'Javier','Santoyo',NULL,'javier.santoyo@yahoo.com',NULL,NULL,'Invalid date','User1648260523318.jpg'),(3,'Javier','Santoyo','JavierSantoyo','javier.santoyo@yahoo.com','123','2014-01-01','Invalid date','User1648260687262.jpg');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'losroperosdb'
--

--
-- Dumping routines for database 'losroperosdb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-25 20:13:10
