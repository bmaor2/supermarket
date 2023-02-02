CREATE DATABASE  IF NOT EXISTS `rom_market` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `rom_market`;
-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: localhost    Database: rom_market
-- ------------------------------------------------------
-- Server version	8.0.32-0buntu0.22.04.1

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
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(25) NOT NULL,
  `img_url` varchar(255) DEFAULT '/home/hilma/study/Class_projects/supermarket/server/images/default/default.webp',
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Fruit','/home/hilma/study/Class_projects/supermarket/server/images/Categories/fruits.png'),(2,'Vegtables','/home/hilma/study/Class_projects/supermarket/server/images/Categories/veg.png'),(3,'Snacks','/home/hilma/study/Class_projects/supermarket/server/images/Categories/snack.png'),(4,'Baking','/home/hilma/study/Class_projects/supermarket/server/images/Categories/baking.png'),(5,'Sauces','/home/hilma/study/Class_projects/supermarket/server/images/Categories/Sauces.png'),(6,'Alcohol','/home/hilma/study/Class_projects/supermarket/server/images/Categories/alchohol.png'),(7,'Drinks','/home/hilma/study/Class_projects/supermarket/server/images/Categories/drinks.png'),(8,'Fish','/home/hilma/study/Class_projects/supermarket/server/images/Categories/fish.png'),(9,'Meat','/home/hilma/study/Class_projects/supermarket/server/images/Categories/meat.png'),(10,'Bakery','/home/hilma/study/Class_projects/supermarket/server/images/Categories/backery.png'),(11,'Chease','/home/hilma/study/Class_projects/supermarket/server/images/Categories/chease.png'),(12,'spices','/home/hilma/study/Class_projects/supermarket/server/images/Categories/spices.png');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_info`
--

DROP TABLE IF EXISTS `order_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_info` (
  `order_id` int NOT NULL,
  `product_id` int NOT NULL,
  `price` int NOT NULL,
  `quantity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_info`
--

LOCK TABLES `order_info` WRITE;
/*!40000 ALTER TABLE `order_info` DISABLE KEYS */;
INSERT INTO `order_info` VALUES (1,7,44,1),(1,8,33,3),(1,5,4,3),(2,5,4,4),(2,6,3,5),(3,5,4,4),(3,6,3,5),(4,5,4,4),(4,6,3,5),(5,7,44,4),(5,8,33,2),(6,7,44,4),(6,8,33,2),(7,7,44,4),(7,8,33,2),(8,5,4,3),(8,6,3,3),(9,5,4,3),(9,6,3,3),(10,5,4,3),(10,6,3,3),(11,5,4,3),(11,6,3,3),(12,5,4,3),(12,6,3,3),(13,5,4,3),(13,6,3,5),(14,5,4,2),(14,6,3,3),(15,7,44,3),(15,8,33,2),(16,9,10,1),(16,1,6,3),(17,5,4,4),(17,6,3,3),(18,1,6,4),(18,10,5,5),(18,5,4,2),(18,6,3,2),(18,9,10,5),(18,15,5,3),(19,1,6,4),(19,16,27,2);
/*!40000 ALTER TABLE `order_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(45) NOT NULL,
  `category_id` int DEFAULT NULL,
  `price` int NOT NULL,
  `img_url` varchar(255) DEFAULT '/home/hilma/study/Class_projects/supermarket/server/images/default/default.webp',
  `description` text,
  PRIMARY KEY (`product_id`),
  UNIQUE KEY `product_name_UNIQUE` (`product_name`),
  KEY `product_ibfk_1` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'קרטון חלב% 3',11,6,'/home/hilma/study/Class_projects/supermarket/server/images/products/חלב.webp','חלב תנובה'),(2,'גבינה צהובה',11,7,'/home/hilma/study/Class_projects/supermarket/server/images/products/גבינה צהובה.webp','28% שומן '),(3,'בולגרית',11,12,'/home/hilma/study/Class_projects/supermarket/server/images/products/בולגרית.webp',NULL),(4,'קוטג\' 5%',11,5,'/home/hilma/study/Class_projects/supermarket/server/images/products/קוטג\'.webp',NULL),(5,'אבטיח',1,4,'/home/hilma/study/Class_projects/supermarket/server/images/default/default.webp',NULL),(6,'מלון',1,3,'/home/hilma/study/Class_projects/supermarket/server/images/default/default.webp',NULL),(7,'עגבניות',2,44,'/home/hilma/study/Class_projects/supermarket/server/images/default/default.webp',NULL),(8,'חסה',2,33,'/home/hilma/study/Class_projects/supermarket/server/images/default/default.webp',NULL),(9,'במבה',3,10,'/home/hilma/study/Class_projects/supermarket/server/images/default/default.webp',NULL),(10,'מולר אפרסק',11,5,'/home/hilma/study/Class_projects/supermarket/server/images/products/מולר.webp','יוגורט קציפת אפרסק+פסיפלורה'),(11,'דנונה פרו',11,6,'/home/hilma/study/Class_projects/supermarket/server/images/products/דנונה פרו.webp','דנונה פרו 20 בטעם פירות יער'),(12,'מולר מיקס',11,6,'/home/hilma/study/Class_projects/supermarket/server/images/products/מולר מיקס.webp','מולר מיקס קורנפלקס מצופה'),(13,'אריזת אקטימל',11,30,'/home/hilma/study/Class_projects/supermarket/server/images/products/אריזת אקטימל.webp','אקטימל לבן מארז 14 יח\''),(14,'אקטיביה אפרסק',11,5,'/home/hilma/study/Class_projects/supermarket/server/images/products/אקטיביה אפרסק.webp','משקה אקטיביה אפרסק'),(15,'גבינה סקי',11,5,'/home/hilma/study/Class_projects/supermarket/server/images/products/גבינה סקי.webp','גבינה לבנה סקי 5%'),(16,'מוצרלה גד',11,27,'/home/hilma/study/Class_projects/supermarket/server/images/products/מוצרלה.webp','גבינת מוצרלה מגורדת 22%'),(17,'אצבעות גבינה',11,17,'/home/hilma/study/Class_projects/supermarket/server/images/products/אצבעות גבינה.webp','אצבעות עמק חטיף גבינה ');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(15) DEFAULT NULL,
  `first_name` varchar(15) NOT NULL,
  `last_name` varchar(15) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `phone_number` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `phone_number_UNIQUE` (`phone_number`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Rom147','Rom','Tarrab','romtarrab147@gmail.com','0545291296');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_info`
--

DROP TABLE IF EXISTS `user_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_info` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(15) NOT NULL,
  `user_type` varchar(45) NOT NULL DEFAULT 'customer',
  PRIMARY KEY (`user_id`),
  CONSTRAINT `user_info_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_info`
--

LOCK TABLES `user_info` WRITE;
/*!40000 ALTER TABLE `user_info` DISABLE KEYS */;
INSERT INTO `user_info` VALUES (1,'1234','customer');
/*!40000 ALTER TABLE `user_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_order`
--

DROP TABLE IF EXISTS `user_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_order` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `total_price` int NOT NULL,
  `date_ordered` datetime NOT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_order`
--

LOCK TABLES `user_order` WRITE;
/*!40000 ALTER TABLE `user_order` DISABLE KEYS */;
INSERT INTO `user_order` VALUES (1,1,155,'2023-01-03 20:31:58'),(2,1,31,'2023-01-03 20:42:51'),(3,1,31,'2023-01-03 20:43:14'),(4,1,31,'2023-01-03 20:43:32'),(5,1,242,'2023-01-03 20:44:04'),(6,1,242,'2023-01-03 20:44:52'),(7,1,242,'2023-01-03 20:46:04'),(8,1,21,'2023-01-03 20:47:52'),(9,1,21,'2023-01-03 20:48:27'),(10,1,21,'2023-01-03 20:49:16'),(11,1,21,'2023-01-03 20:50:30'),(12,1,21,'2023-01-03 20:51:51'),(13,1,27,'2023-01-03 20:53:32'),(14,1,17,'2023-01-03 20:54:32'),(15,1,198,'2023-01-03 20:58:11'),(16,1,28,'2023-01-03 20:59:57'),(17,1,25,'2023-01-03 21:01:50'),(18,1,128,'2023-01-03 21:18:08'),(19,1,78,'2023-01-03 21:53:02');
/*!40000 ALTER TABLE `user_order` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-01 22:21:25