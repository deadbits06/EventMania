-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 05, 2019 at 02:50 PM
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
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `fname` varchar(50) NOT NULL,
  `lname` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`fname`, `lname`, `password`, `email`) VALUES
('Pritesh', 'Satpute', '81dc9bdb52d04dc20036dbd8313ed055', 'pritesh@gmail.com');

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
('akash', 'hadwale', '81dc9bdb52d04dc20036dbd8313ed055', '7045816489', 'mumbai', 'akash@gmail.com'),
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
  `image` varchar(100) NOT NULL,
  PRIMARY KEY (`eventId`),
  KEY `organiserEmail` (`organiserEmail`)
) ENGINE=InnoDB AUTO_INCREMENT=1015 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `event_details`
--

INSERT INTO `event_details` (`eventId`, `eventName`, `organiserEmail`, `venue`, `startDate`, `endDate`, `startTime`, `endTime`, `noOfVolunteers`, `quotation`, `description`, `latitude`, `longitude`, `contactDetails`, `image`) VALUES
(1005, 'Blood Donation', 'nimbalkarnishant98@gmail.com', 'Mumbai', '2019-04-05', '2019-04-06', '03:00', '23:00', '10', 'nd;lkndfvl;ksndv', 'An event is organised to encourage people to donate blood for betterment of society and helping people.A blood donation occurs when a person voluntarily has blood drawn ', '19.00220000', '72.84160000', '9876543201', 'scaSCasc'),
(1006, 'Free Health checkup for poor people', 'nimbalkarnishant98@gmail.com', 'Mumbau', '2019-04-05', '2019-04-06', '03:00', '23:00', '15', 'sasac', 'for people to check up their health and avail free advices from expert doctors', '19.00220000', '72.84160000', '95875200516', 'ZXsac '),
(1007, 'Organ Donation', 'nimbalkarnishant98@gmail.com', 'Mumbai', '2019-04-05', '2019-04-06', '03:00', '23:00', '15', 'scsac', 'Camp to register as a donor for donating their body organs to  needy and deserving people.This event is organised to encourage people to donate bllood for betterment of society .', '19.00220000', '72.84160000', '654165416541', 'sacascasc'),
(1008, 'Volunteer Dance Instructor', 'nimbalkarnishant98@gmail.com', 'MUmbai', '2019-04-05', '2019-04-06', '03:00', '23:00', '15', 'asfsvsv', 'Bombay child welfare NGO\'s seeks dedicated volunteer dance instructor to train 20 middle school and teen participants with or without formal dance experience.', '19.00220000', '72.84160000', '7453543', 'cascasc'),
(1009, 'Dance mumbai dance with kids', 'nimbalkarnishant98@gmail.com', 'Mumbai', '2019-04-05', '2019-04-06', '03:00', '23:00', '15', 'sacasc', 'need dance instructors for kids age(5-10) to train for Bombay National competitions for youngsters', '19.00220000', '72.84160000', '32453', 'bcxcx'),
(1010, 'Fly-by-Night Dance Theater - Volunteer Grant Writer for Youth Dance Program', 'nimbalkarnishant98@gmail.com', 'Mumbai', '2019-04-05', '2019-04-06', '03:00', '23:00', '15', 'ascsac', 'Fly-by-Night is in need of a grant writer or fund-raising person to help with securing funds for their after-school dance program at the New School, Mumbai  Their program, free to participants , is focused on keeping students physically active as well as engaging them intellectually.', '19.00220000', '72.84160000', '63516351', 'xcvvc'),
(1011, 'Swach Bharat Yojana', 'nimbalkarnishant98@gmail.com', 'Mumbai', '2019-04-05', '2019-04-06', '23:00', '03:00', '15', 'ascs', 'An initiative launched to spread cleanliness', '19.00220000', '72.84160000', '35413541', 'bkjb'),
(1012, 'Beach Cleaning drive Mumbai', 'nimbalkarnishant98@gmail.com', 'Mumbai', '2019-04-05', '2019-04-06', '03:00', '23:00', '15', 'ascasc', 'Need smart,active volunteers for beach cleaning drive here in mumbai.To spread cleanliness around ourselves is very important and duty of every citizen.', '19.00200000', '72.84160000', '621321', 'sascasc'),
(1013, 'Clean Mumbai Clean!', 'nimbalkarnishant98@gmail.com', 'Mumbai', '2019-04-05', '2019-04-06', '03:00', '23:00', '15', 'ascasc', 'awareness for cleanliness around us! ', '19.00200000', '72.84160000', '45345', 'esfdfsdf'),
(1014, 'Health Care', 'vishal@gmail.com', 'Thane', '2019-04-06', '2019-04-07', '09:00', '10:00', '10', '192.168.43.19/EventMania/uploads/organiser/vishal@gmail.com/Health Care/quotation.pdf', '                            Health check up camp for everyone        ', '19.20000000', '72.97000000', '7775026761', '192.168.43.19/EventMania/uploads/organiser/vishal@gmail.com/Health Care/randomqr-256.png');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

DROP TABLE IF EXISTS `feedback`;
CREATE TABLE IF NOT EXISTS `feedback` (
  `email` varchar(100) NOT NULL,
  `eventId` int(100) NOT NULL,
  `eventRate` varchar(50) NOT NULL,
  `helpful` varchar(50) NOT NULL,
  `similar` varchar(50) NOT NULL,
  `recommend` varchar(50) NOT NULL,
  `structured` varchar(50) NOT NULL,
  `responsibility` varchar(50) NOT NULL,
  `review` varchar(500) NOT NULL,
  KEY `email` (`email`),
  KEY `eventId` (`eventId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  `instituteName` varchar(100) NOT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `organiser`
--

INSERT INTO `organiser` (`fname`, `lname`, `password`, `contactNo`, `city`, `email`, `instituteName`) VALUES
('Nishant', 'Nimbalkar', 'd49586e09ea086914a5a9a939327d782', '7775026761', 'Badlapur', 'nimbalkarnishant98@gmail.com', ''),
('Siddhanth', 'Nimbalkar', 'd49586e09ea086914a5a9a939327d782', '8465454646', 'Thane', 'sidnimbalkar20@gmail.com', ''),
('Vishal', 'Choutele', '81dc9bdb52d04dc20036dbd8313ed055', '7045816489', 'Thane', 'vishal@gmail.com', 'DBIT');

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
('Siddhanth', 'Nimbalkar', '81dc9bdb52d04dc20036dbd8313ed055', '7894561233', 'Thane', 'nimbalkarnishant98@gmail.com', 'IT', 'Blockchain', '192.168.43.19/EventMania/uploads/volunteer/nimbalkarnishant98@gmail.com/51_nishant_3.pdf'),
('Ankit', 'Vishvakarma', '81dc9bdb52d04dc20036dbd8313ed055', '7894561230', 'mumbai', 'pawanabc59@gmail.com', 'BE', 'Web and android development', '192.168.43.19/EventMania/uploads/volunteer/pawanabc59@gmail.com/quotation.pdf'),
('pawan', 'maurya', '81dc9bdb52d04dc20036dbd8313ed055', '7768058908', 'mumbai', 'pawankm4587@gmail.com', 'BE', 'Web and android development', '192.168.43.19/EventMania/uploads/volunteer/pawankm4587@gmail.com/quotation.pdf');

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
-- Dumping data for table `volunteer_event_rel`
--

INSERT INTO `volunteer_event_rel` (`email`, `eventId`, `isPresent`, `isFeedbackFilled`) VALUES
('nimbalkarnishant98@gmail.com', 1009, 1, 0),
('pawanabc59@gmail.com', 1014, 1, 0);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `event_details`
--
ALTER TABLE `event_details`
  ADD CONSTRAINT `event_details_ibfk_1` FOREIGN KEY (`organiserEmail`) REFERENCES `organiser` (`email`) ON DELETE CASCADE;

--
-- Constraints for table `feedback`
--
ALTER TABLE `feedback`
  ADD CONSTRAINT `feedback_ibfk_1` FOREIGN KEY (`email`) REFERENCES `volunteer` (`email`) ON DELETE CASCADE,
  ADD CONSTRAINT `feedback_ibfk_2` FOREIGN KEY (`eventId`) REFERENCES `event_details` (`eventId`) ON DELETE CASCADE;

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
