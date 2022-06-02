-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 02, 2022 at 09:36 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quiz-app`
--

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `question` varchar(255) NOT NULL,
  `a` varchar(255) NOT NULL,
  `b` varchar(255) NOT NULL,
  `c` varchar(255) NOT NULL,
  `d` varchar(255) NOT NULL,
  `ans` varchar(255) NOT NULL,
  `que_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`question`, `a`, `b`, `c`, `d`, `ans`, `que_id`) VALUES
('Who is Indian Cricket Team Captain?', 'Virat Kohli', 'Rohit Sharma', 'KL Rahul', 'Hardik Pandya', 'Rohit Sharma', 1),
('What is the name of this app?', 'quiz', 'app', 'quiz-app', 'nothing', 'quiz-app', 2),
('What is the scientific name of a butterfly?', 'Apis', 'Coleoptera', 'Formicidae', 'Rhopalocera', 'Formicidae', 3),
('What is the capital of Spain?', 'Berlin', 'Buenos Aires', 'Madrid', 'San Juan', 'Buenos Aires', 4),
('What is 70 degrees Fahrenheit in Celsius?', '20', '18', '30', '24', '20', 5),
('Where was Mahatma Gandhi born?', 'Gujarat', 'Maharashtra', 'Assam', 'Goa', 'Gujarat', 6),
('4 * 7 = ?', '28', '30', '32', '38', '28', 7),
('React is written by?', 'Google', 'AMD', 'Facebook', 'None', 'Facebook', 8),
('React is written in?', 'Python', 'C++', 'C', 'JS', 'JS', 9),
('In context with the Mahayana Buddhism faith, the future Buddha is ?', 'Krakuchanda', 'Maitreya', 'Krakuchanda', 'Krakuchanda', 'Maitreya', 10),
('24*7 = ?', 'Month', 'Week', 'Day', 'Year', 'Week', 11),
('1&1=?', '0', '1', 'Can\'t say', 'Error', '1', 12),
('1/0=?', 'Undefined', 'Infinity', '0', '1', 'Infinity', 13),
('Odd+Odd = ?', 'Even', 'Odd', 'Any', 'Any', 'Even', 14),
('Headquarters of Anushilan Samiti was located at?', 'Mumbai', 'Mumbai', 'Mumbai', 'Kolkata', 'Kolkata', 15),
('Ezra Cup is related to which of the following sports?', 'Polo', 'Tennis', 'Tennis', 'Tennis', 'Polo', 16),
('When was the Olympic flag created?', '1913', '1914', '1917', '1912', '1913', 17),
('Which day is celebrated as World Environment Day?', '5 June', '6 June', '4 June', '1 June', '5 June', 18),
('Longest Day?', '21 June', '19 June', '20 June', '22 June', '21 June', 19),
('1+1=?', '2', '0', '1', '3', '2', 20);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`que_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `que_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
