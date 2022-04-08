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
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (28,'Prueba mañanera...','Prada','Pull & Bear','M','Cafe',NULL,3000,'Prueba mañanera...','In-sale','Product1648228167592.jpg'),(29,'Prueba tarde1','Prueba tard1','Prueba tarde 1','M','Violeta',10,2022,'                                Prueba tarde...','In-sale','Product1648242518505.jpg'),(31,'Prueba nocturna API 1','Prueba nocturna API 1','Prueba nocturna API 1','G','Azul',20,9000,'Prueba nocturna API...','Nueva temporada',''),(32,'Prueba nocturna API 2','Prueba nocturna API 2','Prueba nocturna API 2','ch','Azulado',10,1000,'Prueba nocturna API2...','In Sale',''),(33,'Prueba nocturna API 2','Prueba nocturna API 2','Prueba nocturna API 2','ch','Azulado',10,1000,'Prueba nocturna API2...','In Sale',''),(34,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,''),(36,'Prueba dominguera API 2','Prueba dominguera API 2','Prueba dominguera API 2','ch','Azulado',10,1000,'Prueba dominguera API2...','In Sale',''),(38,'Prueba dominguera API 2','Prueba dominguera API 2','Prueba dominguera API 2','ch','Azulado',10,1000,'Prueba dominguera API2...','In Sale',''),(41,'Pantalones Casuales Sueltos De Hip-hop Para Hombre','GX9918','Nan','Ch','Blanco',31,405,'Estimados clientes, estamos comprometidos a proporcionar productos de alta calidad y bajo costo, puede estar seguro de comprar, si no está satisfecho, apoyamos las devoluciones. Recordatorio: Si compras más de 299 pesos, puedes obtener el envío gratis, ','Season','Product1649367358280.jpg'),(42,'Pantalon De Trabajo Tipo Cargo Pant-cargo','	PANT-CARGO','Lica','M','Gris oscuro',0,599,'Color negro con gris oxford.\r\nCuenta con 6 bolsas delanteras plizadas multisusos,\r\nuna bolsa lateral con tela reforzada porta herramienta\r\ny 2 bolsas traseras plizadas con jaladeras reflejantes.','Season','Product1649367557622.jpg'),(43,'Pantalones De Trabajo Para Correr Casuales Para Hombres','Pantalones','Pantalones','Ch','Azul',0,250,'Excelente Jogger strech casual para hombre\r\nMuy cómodo ideal pasear, campismo, fiestas, ir al parque o sencillamente relajarse en casa.','In-sale','Product1649367714735.jpg'),(44,'Pantalón Táctico Militar Impermeable Y Cortavientos Ix9','Jogger,Lycra hombre,Pants hombre,Licras deportivas hombre','Esmeralda','G','Negro',0,378,'Estructura de tela de alta calidad: no decolora, resistente al desgarro, transpirable y liviana, brindando la mejor comodidad.','Season','Product1649368118833.jpg'),(45,'Jeans Skinny Stretch','Skinny','Indutex y Moda','M','Negro',0,350,'Es un pantalón Skinny tela mezclilla strech de calidad con destrucción.\r\nTen en cuenta que es un pantalón entubado de material Strech por lo que te quedara ajustado como se muestra en las imágenes.','In-sale','Product1649369229127.jpg'),(46,'Pantalones Tácticos Militares Impermeables, Ix7','pants para hombre pantalones cargo hombre Pantalones Tácticos Militares Impermeables','MUSU','M','Negro',0,390,'Pantalones Tácticos Militares Impermeables, Ix7\r\nNota: debido a problemas de luz, la imagen puede diferir ligeramente del producto real\r\n','Season','Product1649369342945.jpg'),(47,'Pantalones Impermeables Tácticos Militares Para Caballero','Ix7','Techalla','M','Gris oscuro',0,409,'Tejido:90,5% de fibra de poliéster + 9,5% de spandex.\r\nFunción: antiincrustante, transpirable, resistente al desgaste, absorbe la humedad.\r\nTemporada adecuada: primavera, otoño, verano.','Season','Product1649369426583.jpg'),(48,'Overol De Denim Holgado Simple Con Varios Bolsillos P/hombre','Men\'s jumpsuits','Generic','M','Azul',0,532,'(s) cintura: 84 cm, cadera: 102 cm, rodilla: 43, circunferencia del pie: 39 cm, entrepierna delantera: 25,5 cm, entrepierna trasera: 35,5 cm\r\n(m) cintura: 88 cm, cadera: 106 cm, rodilla 44, circunferencia del pie: 40 cm, entrepierna delantera: 26 cm, entr','In-sale','Product1649369500226.jpg'),(49,'Pants Jogger Deportes Cremallera Slim Colgar Toalla Hombr','	Pantalones deportivos Licra','JESUS','G','Negro',0,156,'Detalles de producto\r\n1. Tipo de pantalón: tipo suelto\r\n2. Longitud de los pantalones: pantalones de nueve puntos\r\n3. Tipo de cintura: cintura media\r\n4. Patrón: cuadrícula + color sólido\r\n5. Tejido: Fibra de poliéster (poliéster)\r\n6. Elasticidad: alta ela','In-sale','Product1649369578770.jpg'),(50,'Pantalón Jogger Camuflaje Militar Skinny De Gabardina Hombre','JOGGER CAMUFLAJE','	MONDANA','M','Azul',0,338,'Envío gratis a todo México. para cuidades cercanas o descuentos especiales en el cobro del envio para zonas lejanas, Importante tener seleccionado el servicio de envio estandar.\r\nCon entrega de 2 a 3 días habiles.\r\nLo mejor en precio y calidad del mercado','Season','Product1649369676385.jpg'),(51,'Pantalon Tactico Comando + Mochila De Regalo','	Pantac18','Uni','Ch','Negro',0,298,'TELA DE GABARDINA GRUESA, 65% Poliester 35% Algodon\r\n\r\nMOCHILA DE REGALO.!! La Mochila Puede llegar con otro estampado o sin estampar.','In-sale','Product1649369741632.jpg'),(52,'Hombre Casual Chaqueta Ligera Bomber Varsity Rompevientos','MJNONG','smouter03200825859_2201','M','Blanco',0,482,'Chaqueta retro shalalalalalalalal','In-sale','Product1649455062054.jpg');
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
  `idUser` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `lastName` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `userName` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `idImageUser` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (3,'Javier','Santoyo','JavierSantoyo','javier.santoyo@yahoo.com','123','2014-01-01','Invalid date','User1648260687262.jpg'),(4,'Karen','Reyes','qwerty','wergcew@sdfv.com','123','2020-02-20','Invalid date',NULL),(5,'Micky','Miau Miau','Tom Cat','wergcew@sdfv.com','123','2020-02-20','Invalid date',NULL),(6,'Fco.','Santoyo','Sam1689','javier.santoyo@yahoo.com','$2a$10$1h/Uz0NdluZleBI1S1BcDuDNZNXCHG0JNZEkHp51FEPSBxcuzHWTe','1989-03-16','Invalid date','User1648860088918.jpg'),(7,'Fco Javier','Santoyo Rios','JavierSantoyo89','javier.santoyo@yahoo.com','$2a$10$KQW/roSrbGJZoVY43vHQ6eHcYSpOlwdd2qUPORcjPIvFK8TT5CM/.','1989-12-03','xyz','1649047725102_img.jpg'),(8,'Francisco Javier','Santoyo Rios','Santoyo89','javiersantoyo505@gmail.com','$2a$10$vwvTnrl680WCBTlBV6S5beDrlDdyo4DqrUmlAnUSMnlwbvaUTAD6O','1989-03-16','xyz','1649429698393_img.jpg'),(9,'Javo','Rios','Javier','javier.santoyo2@yahoo.com','$2a$10$9PquQSDu3eyJs/MezTlqQ.qk2Fu1Tg6TXV5XpwJ6TYBYzJLUHqt6i','1989-12-03','uhunou','1649433319773_img.jpg');
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

-- Dump completed on 2022-04-08 17:15:29
