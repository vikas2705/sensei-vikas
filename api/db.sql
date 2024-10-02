/*
SQLyog Community v13.1.6 (64 bit)
MySQL - 10.4.28-MariaDB : Database - salesensei
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`salesensei` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;

USE `salesensei`;

/*Table structure for table `employees` */

DROP TABLE IF EXISTS `employees`;

CREATE TABLE `employees` (
  `No` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` char(100) DEFAULT NULL,
  `last_name` char(100) DEFAULT NULL,
  `email` char(100) DEFAULT NULL,
  `password` char(100) DEFAULT NULL,
  `job` char(100) DEFAULT NULL,
  `country` char(100) DEFAULT NULL,
  `companysize` int(100) DEFAULT NULL,
  `describe` char(100) DEFAULT NULL,
  `challenge` char(100) DEFAULT NULL,
  PRIMARY KEY (`No`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `employees` */

insert  into `employees`(`No`,`first_name`,`last_name`,`email`,`password`,`job`,`country`,`companysize`,`describe`,`challenge`) values 
(2,NULL,NULL,'metaknowya@gmail.com','erwerew','1','2',0,'fwewe',''),
(3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(4,NULL,NULL,'anatolikonan@mail.io','ewrwr','1','2',2,'sfsdffewrw','1');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
