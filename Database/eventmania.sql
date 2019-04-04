-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 04, 2019 at 06:11 AM
-- Server version: 5.7.21
-- PHP Version: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eventmania`
--

-- --------------------------------------------------------

--
-- Table structure for table `donar`
--

DROP TABLE IF EXISTS `donar`;
CREATE TABLE IF NOT EXISTS `donar` (
  `fname` varchar(50) NOT NULL,
  `lname` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `contactNo` varchar(50) NOT NULL,
  `city` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `donar`
--

INSERT INTO `donar` (`fname`, `lname`, `password`, `contactNo`, `city`, `email`) VALUES
('Siddhanth', 'Nimbalkar', '81dc9bdb52d04dc20036dbd8313ed055', '8465454646', 'Thane', 'nimbalkarnishant98@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `event_details`
--

DROP TABLE IF EXISTS `event_details`;
CREATE TABLE IF NOT EXISTS `event_details` (
  `eventId` int(100) NOT NULL AUTO_INCREMENT,
  `eventName` varchar(100) NOT NULL,
  `organiserEmail` varchar(100) NOT NULL,
  `venue` varchar(100) NOT NULL,
  `startDate` varchar(50) DEFAULT NULL,
  `endDate` varchar(50) DEFAULT NULL,
  `startTime` varchar(50) DEFAULT NULL,
  `endTime` varchar(50) DEFAULT NULL,
  `noOfVolunteers` varchar(100) NOT NULL,
  `quotation` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `latitude` decimal(10,8) NOT NULL,
  `longitude` decimal(11,8) NOT NULL,
  `contactDetails` varchar(100) NOT NULL,
  PRIMARY KEY (`eventId`),
  KEY `organiserEmail` (`organiserEmail`)
) ENGINE=InnoDB AUTO_INCREMENT=1005 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `event_details`
--

INSERT INTO `event_details` (`eventId`, `eventName`, `organiserEmail`, `venue`, `startDate`, `endDate`, `startTime`, `endTime`, `noOfVolunteers`, `quotation`, `description`, `latitude`, `longitude`, `contactDetails`) VALUES
(1002, 'blood', 'nimbalkarnishant98@gmail.com', 'badla', '2019-04-07', '2019-04-16', '03:02', '23:01', '132', '192.168.43.19/EventMania/uploads/organiser/nimbalkarnishant98@gmail.com/blood/quotation.pdf', '         bloodddd                           ', '43.78567000', '-101.90394000', '7775026761'),
(1003, 'blood', 'nimbalkarnishant98@gmail.com', 'badla', '2019-04-07', '2019-04-16', '03:02', '23:01', '132', '192.168.43.19/EventMania/uploads/organiser/nimbalkarnishant98@gmail.com/blood/quotation.pdf', '         bloodddd                           ', '43.78567000', '-101.90394000', '7775026761'),
(1004, 'blood', 'nimbalkarnishant98@gmail.com', 'badla', '2019-04-07', '2019-04-16', '03:02', '23:01', '132', '192.168.43.19/EventMania/uploads/organiser/nimbalkarnishant98@gmail.com/blood/quotation.pdf', '         bloodddd                           ', '43.78567000', '-101.90394000', '7775026761');

-- --------------------------------------------------------

--
-- Table structure for table `organiser`
--

DROP TABLE IF EXISTS `organiser`;
CREATE TABLE IF NOT EXISTS `organiser` (
  `fname` varchar(50) NOT NULL,
  `lname` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `contactNo` varchar(50) NOT NULL,
  `city` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `organiser`
--

INSERT INTO `organiser` (`fname`, `lname`, `password`, `contactNo`, `city`, `email`) VALUES
('Nishant', 'Nimbalkar', 'd49586e09ea086914a5a9a939327d782', '7775026761', 'Badlapur', 'nimbalkarnishant98@gmail.com'),
('Siddhanth', 'Nimbalkar', 'd49586e09ea086914a5a9a939327d782', '8465454646', 'Thane', 'sidnimbalkar20@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `paymentdone`
--

DROP TABLE IF EXISTS `paymentdone`;
CREATE TABLE IF NOT EXISTS `paymentdone` (
  `email` varchar(100) NOT NULL,
  `eventId` int(100) NOT NULL,
  `transactionId` varchar(150) NOT NULL,
  KEY `eventId` (`eventId`),
  KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `volunteer`
--

DROP TABLE IF EXISTS `volunteer`;
CREATE TABLE IF NOT EXISTS `volunteer` (
  `fname` varchar(50) NOT NULL,
  `lname` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `contactNo` varchar(50) NOT NULL,
  `city` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `qualification` varchar(100) NOT NULL,
  `fieldOfInterest` varchar(100) NOT NULL,
  `resume` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `volunteer`
--

INSERT INTO `volunteer` (`fname`, `lname`, `password`, `contactNo`, `city`, `email`, `qualification`, `fieldOfInterest`, `resume`) VALUES
('Siddhanth', 'Nimbalkar', '81dc9bdb52d04dc20036dbd8313ed055', '7894561233', 'Thane', 'nimbalkarnishant98@gmail.com', 'IT', 'Blockchain', '192.168.43.19/EventMania/uploads/volunteer/nimbalkarnishant98@gmail.com/51_nishant_3.pdf');

-- --------------------------------------------------------

--
-- Table structure for table `volunteer_event_rel`
--

DROP TABLE IF EXISTS `volunteer_event_rel`;
CREATE TABLE IF NOT EXISTS `volunteer_event_rel` (
  `email` varchar(100) NOT NULL,
  `eventId` int(100) NOT NULL,
  `isPresent` int(50) NOT NULL DEFAULT '0',
  `isFeedbackFilled` int(50) NOT NULL DEFAULT '0',
  KEY `eventId` (`eventId`),
  KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `event_details`
--
ALTER TABLE `event_details`
  ADD CONSTRAINT `event_details_ibfk_1` FOREIGN KEY (`organiserEmail`) REFERENCES `organiser` (`email`) ON DELETE CASCADE;

--
-- Constraints for table `paymentdone`
--
ALTER TABLE `paymentdone`
  ADD CONSTRAINT `paymentdone_ibfk_1` FOREIGN KEY (`eventId`) REFERENCES `event_details` (`eventId`) ON DELETE CASCADE,
  ADD CONSTRAINT `paymentdone_ibfk_2` FOREIGN KEY (`email`) REFERENCES `donar` (`email`) ON DELETE CASCADE;

--
-- Constraints for table `volunteer_event_rel`
--
ALTER TABLE `volunteer_event_rel`
  ADD CONSTRAINT `volunteer_event_rel_ibfk_1` FOREIGN KEY (`eventId`) REFERENCES `event_details` (`eventId`) ON DELETE CASCADE,
  ADD CONSTRAINT `volunteer_event_rel_ibfk_2` FOREIGN KEY (`email`) REFERENCES `volunteer` (`email`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
