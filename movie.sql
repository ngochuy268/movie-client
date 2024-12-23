-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 23, 2024 at 08:00 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `movie`
--

-- --------------------------------------------------------

--
-- Table structure for table `film`
--

CREATE TABLE `film` (
  `filmID` varchar(100) NOT NULL,
  `name` varchar(255) NOT NULL,
  `genre` varchar(100) NOT NULL,
  `releaseDate` varchar(100) NOT NULL,
  `longTime` varchar(100) NOT NULL,
  `description` longtext NOT NULL,
  `rate` varchar(100) NOT NULL,
  `poster` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `film`
--

INSERT INTO `film` (`filmID`, `name`, `genre`, `releaseDate`, `longTime`, `description`, `rate`, `poster`) VALUES
('F01', '2012', 'Sci-Fi', '2009', '158', '\"2012\" is a 2009 American science fiction disaster film directed by Roland Emmerich. Set against the backdrop of an impending global apocalypse, the movie follows a struggling writer, Jackson Curtis, who discovers that the Earth is facing catastrophic natural disasters due to the alignment of the planets and the destabilization of the Earth\'s core. As earthquakes, tsunamis, and volcanic eruptions ravage the world, Jackson and his family must embark on a perilous journey to survive. Along the way, they join a group of survivors who race to board massive arks built by world governments to escape the devastation. Filled with breathtaking special effects and intense action sequences, \"2012\" explores themes of survival, human resilience, and the fragility of life on Earth.', '7', 'movie-2012.jpg'),
('F02', 'Doraemon: Nobita And The Birth of Japan', 'Anime', '2016', '104', 'Doraemon: Nobita and the Birth of Japan 2016 (Doraemon the Movie: Nobita no Nihon Tanjo) is the 36th movie in the Doraemon series, released in 2016. The film is a remake of the 1989 movie Doraemon: Nobita and the Birth of Japan, with updated animation and a few new twists.\r\n\r\nIn this movie, Nobita and his friends—Shizuka, Gian, Suneo, and Doraemon—find themselves traveling back in time to the era of ancient Japan. They are tasked with helping to create a peaceful and prosperous Japan, but things quickly get complicated when they meet a young man named Jidai, who has big dreams of uniting the country.\r\n\r\nAs they navigate through historical events and conflicts, the group works to bring about the birth of Japan in the way we know it today, all while overcoming challenges, learning about the past, and deepening their bond of friendship. Along the way, they use various gadgets from the future to help shape history, but they must be careful not to disrupt the timeline.\r\n\r\nThis film blends action, history, and humor, offering an entertaining and educational experience. It celebrates the values of friendship, determination, and the importance of understanding and preserving history for future generations.', '9', 'doraemon-36.jpg'),
('F03', 'Doraemon: Nobita\'s Chronicle of the Moon Exploration', 'Anime', '2019', '111', 'Doraemon: Nobita\'s Lunar Exploration (Doraemon the Movie: Nobita no Getsumen Tansaki) is the 39th movie in the Doraemon series. The film follows Nobita and his friends on an adventurous journey to explore the moon with the help of Doraemon’s time machine.\r\n\r\nIn the story, Doraemon takes Nobita, Shizuka, Gian, and Suneo to the moon, where they encounter strange creatures and uncover the secrets of the celestial body. However, their journey takes a dangerous turn when a mysterious force from space threatens the Earth. The group must work together to overcome challenges and protect their planet.\r\n\r\nThe movie combines thrilling action with heartwarming moments, highlighting themes of friendship, bravery, and the spirit of exploration. It’s a story full of adventure and inspiration, teaching the importance of teamwork and standing up to protect what’s precious.', '9', 'Doraemon-39.jpg'),
('F04', 'Fast And Furious 9', 'Sci-Fi', '2021', '145', 'Fast & Furious 9 (2021), also known as F9, is the ninth installment in the Fast & Furious franchise, directed by Justin Lin. The film continues the high-octane action, intense car chases, and family drama that have become the hallmark of the series.\r\n\r\nThe plot centers around Dominic Toretto (Vin Diesel) and his crew as they face a new threat: Dominic\'s estranged brother, Jakob Toretto (John Cena), who is a skilled assassin and engineer working with a powerful criminal organization. Jakob has teamed up with Cipher (Charlize Theron), the cyberterrorist antagonist from The Fate of the Furious, to obtain a dangerous weapon that could potentially disrupt the global balance of power. This brings Dom and his family back into the action as they work to stop Jakob’s plan and protect the world from destruction.\r\n\r\nAs with previous films in the franchise, F9 is filled with over-the-top stunts, including cars launching off cliffs, high-speed chases, and gravity-defying action. The film also explores the themes of family and loyalty, key elements of the Fast & Furious series. In addition to the action, there are emotional moments, especially as Dom confronts his past and reconnects with his family, including his long-lost brother Jakob.\r\n\r\nThe movie is also notable for its focus on the return of some beloved characters from previous films, including Roman Pearce (Tyrese Gibson), Tej Parker (Ludacris), Letty Ortiz (Michelle Rodriguez), and Mia Toretto (Jordana Brewster). The film also features a number of cameos and action-packed sequences that push the boundaries of realism.\r\n\r\nF9 received mixed reviews but was generally praised for its fun, action-packed entertainment and its continuation of the Fast & Furious saga, delivering exactly what fans expect—fast cars, intense action, and thrilling stunts. It also set the stage for the final two films of the franchise, which will conclude the epic story.', '5', 'fast-furious-9.jpg'),
('F05', 'Saw 4', 'Horror', '2007', '92', 'Saw IV (2007) is the fourth installment in the Saw horror franchise, directed by Darren Lynn Bousman. This film continues the story of John Kramer, the notorious Jigsaw killer, and delves deeper into the twisted legacy of his violent and psychological traps.\r\n\r\nThe movie begins with the aftermath of Detective Kerry\'s death, and the investigation into Jigsaw\'s crimes intensifies. Meanwhile, two FBI agents, Agent Strahm (Scott Patterson) and Agent Perez (Athena Karkanis), are tasked with solving the case. They uncover a grisly series of traps, all of which seem to be part of a larger and more complex game. As the investigation unfolds, they begin to question how Jigsaw can still be alive, given that he was thought to have died in the previous film.\r\n\r\nParallel to this investigation, the film introduces new victims who must face Jigsaw’s deadly games. In typical Saw fashion, the traps become increasingly intricate and brutal, forcing the victims to confront their darkest fears and past mistakes. The film also reveals more about John Kramer\'s life, showing flashbacks to events that led him to become the infamous Jigsaw killer.\r\n\r\nSaw IV is known for its intense gore, shocking plot twists, and its exploration of themes like guilt, redemption, and the consequences of one\'s actions. The film is also notable for deepening the mythology of the Jigsaw killer, revealing more about his motivations and personal history. While it received mixed reviews for its violence and complexity, it remains a key part of the series, contributing significantly to the overarching storyline and the dark legacy of Jigsaw.', '6', 'saw-4.jpg'),
('F06', 'Final Destination 5', 'Horror', '2011', '92', 'Final Destination 5 (2011) is the fifth installment in the Final Destination horror series, directed by Steven Quale. The film follows the familiar formula of the franchise, where a group of people survives a horrific accident only to find that Death is not so easily cheated.\r\n\r\nThe story begins with a catastrophic bridge collapse. Sam Lawton (played by Nicholas D\'Agosto) has a premonition of the disaster before it happens, and, in a panic, he manages to save several people from the impending catastrophe. However, as in previous films, Death’s plan cannot be avoided. The survivors begin to die in increasingly bizarre and fatal accidents, seemingly in the order they would have perished in the original disaster.\r\n\r\nThe movie is filled with suspense, shocking death scenes, and intricate setups leading to the eventual demise of each character. Final Destination 5 is notable for its creative and gruesome death scenes, which have become a hallmark of the series. It also features a twist ending that ties the events of the film to the first movie, making it an exciting entry for long-time fans.\r\n\r\nThe film is known for its gruesome, visually intense set-pieces, and it continues the franchise’s theme of fate, survival, and the inevitability of death. While not critically acclaimed, Final Destination 5 offers a satisfying blend of horror and thrills for fans of the series. It is often considered one of the better entries in the franchise, largely due to its surprising twist and the high-quality death scenes.', '5', 'final-destination.jpg'),
('F07', 'Detective Conan: The Million Dollar Pentagram', 'Anime', '2024', '110', 'The Detective Conan movie franchise continues with its 27th installment, Detective Conan Movie 27: The Million-Dollar Pentagram. This time, the story takes place in Hakodate, Hokkaido, where Kaito Kid announces his intention to steal a valuable Japanese sword with historical significance, linked to Toshizo Hijikata of the Shinsengumi. As Conan races against time to stop Kid, he must unravel the mysteries surrounding the sword and its connection to the past. This film promises the classic blend of mystery, action, and suspense that fans have come to expect from the Detective Conan series.', '8', 'conan-27.jpg'),
('F08', 'Mirror ', 'Horror', '2008', '111', 'Mirror (2008), also known as Mirrors, is a psychological horror film directed by Alexandre Aja. The movie stars Kiefer Sutherland as Ben Carson, a former police officer who is struggling with personal and professional turmoil following a traumatic incident. Ben is hired to work as a night security guard at a dilapidated department store that has been abandoned after a mysterious fire.\r\n\r\nWhile on the job, he discovers that the mirrors in the store reflect disturbing and sinister images—images that are not present in the real world. As the supernatural events intensify, Ben realizes that the mirrors are linked to a series of violent deaths, and that they may be connected to his own troubled past. The more he investigates, the deeper he becomes entangled in the dark and terrifying forces that seem to have control over the mirrors.\r\n\r\nThe film is built around tense and atmospheric horror, focusing on the unsettling nature of reflections and the idea that mirrors can reveal things that are hidden from the naked eye. Mirror (2008) combines supernatural elements with psychological terror, creating a chilling experience for the audience. As Ben uncovers the mystery, he is forced to confront his past while battling the deadly power that the mirrors seem to hold over him and his family.\r\n\r\nWhile Mirrors received mixed reviews, it is notable for its eerie premise, unsettling imagery, and the strong performance by Kiefer Sutherland. It remains a disturbing and suspenseful film for fans of supernatural horror.', '6', 'mirror-1.jpg'),
('F09', 'The Wandering Earth 2', 'Sci-Fi', '2023', '173', 'The Wandering Earth 2 (2023) is the highly anticipated prequel to the 2019 Chinese sci-fi blockbuster The Wandering Earth. Directed by Frant Gwo, this film expands the universe created in the first movie, diving deeper into the backstory and events that led to humanity’s desperate plan to save Earth.\r\n\r\nSet in the near future, the film explores the ongoing efforts to move the Earth out of its orbit and toward a safer region of space, away from the dying sun. This monumental task requires the construction of massive \"Earth Engines\" to propel the planet, a project that spans decades. However, tensions arise between various factions, and political intrigue escalates as humanity faces not only external threats from space but also internal divisions.\r\n\r\nThe story centers around a group of engineers, scientists, and government officials who are grappling with the immense challenges and moral dilemmas posed by such a monumental undertaking. Along the way, they must confront technological failures, sabotage, and the emotional toll of sacrificing everything to ensure the survival of the human race.\r\n\r\nThe Wandering Earth 2 offers stunning visual effects, large-scale action sequences, and a focus on human resilience and sacrifice in the face of existential threats. Like its predecessor, it explores themes of survival, unity, and the lengths humanity will go to in order to protect their home planet, making it a thrilling and thought-provoking addition to the Wandering Earth saga.', '9', 'earth-wandering-2.jpg'),
('F10', 'Wrong Turn 4: Bloody Beginnings', 'Horror', '2011', '93', 'Wrong Turn 4: Bloody Beginnings (2011) is the fourth installment in the Wrong Turn horror series, directed by Declan O\'Brien. This film serves as a prequel to the previous entries, exploring the origins of the deformed cannibalistic killers from the earlier movies.\r\n\r\nSet in an abandoned sanatorium in the mountains, a group of friends travel to the remote location for a winter getaway. However, they quickly discover that the sanatorium was once home to a group of mentally ill patients who were subjected to cruel experiments and brutal treatments. Among them were three disfigured brothers, who later become the cannibalistic killers that haunt the Wrong Turn series.\r\n\r\nAs the friends explore the eerie sanatorium, they become trapped and hunted by the murderous brothers. The film is filled with graphic violence, suspenseful moments, and brutal killings, typical of the Wrong Turn franchise. Wrong Turn 4: Bloody Beginnings focuses heavily on gore and tension, offering fans of the series a deeper look into the backstory of the twisted antagonists. It\'s a chilling and gruesome entry for those who enjoy survival horror films with a focus on horrific, slasher-style kills.', '5', 'wrong-turn-4.jpg'),
('F11', 'Saw 10', 'Horror', '2011', '118', 'Saw X (2023) is the tenth installment in the iconic Saw horror franchise, directed by Kevin Greutert. Set between the events of the first and second Saw films, the story follows John Kramer, the infamous Jigsaw killer, who is portrayed by Tobin Bell. In this film, John travels to Mexico for a risky and experimental medical procedure in an attempt to cure his terminal cancer. However, upon discovering that he has been conned by the very people he trusted, John seeks revenge in his signature, twisted style.\r\n\r\nJohn targets a group of people involved in the scam, using his brutal and creative traps to expose their sins and force them to confront their guilt. As with previous films in the series, the movie mixes psychological horror with physical tension, as victims must make life-or-death decisions in order to survive the increasingly complex and deadly traps set by Jigsaw.\r\n\r\nSaw X continues the franchise\'s tradition of shocking twists, graphic violence, and a deep dive into the mind of its central antagonist. The film is filled with suspense, as fans of the series are treated to a darker, more personal chapter in the Jigsaw saga, expanding on his motivations and providing a fresh angle to the established mythos.', '7', 'saw-10.png'),
('F12', 'Detective Conan: The Fist of Blue Sapphire', 'Anime', '2019', '109', 'Detective Conan: The Fist of Blue Sapphire (Movie 23) is an action-packed and thrilling film from the Detective Conan anime series. The story follows the famous teenage detective, Shinichi Kudo (also known as Conan Edogawa), as he travels to Singapore to investigate a high-profile case. The plot centers around the legendary Blue Sapphire, a rare and powerful gemstone that is believed to have a history filled with mystery and intrigue.\r\n\r\nWhen a series of murders and dangerous events occur around the gemstone, Conan and his friends are thrust into a race against time to uncover the truth behind the blue sapphire\'s dark past. As the investigation progresses, they encounter a host of dangerous adversaries, including an unexpected new foe with ties to the mysterious gem.\r\n\r\nSet against the vibrant backdrop of Singapore, this film showcases breathtaking action sequences, intricate puzzles, and the signature suspense that fans of Detective Conan have come to love. With twists, turns, and the always-unpredictable Conan solving the case, The Fist of Blue Sapphire delivers a thrilling cinematic experience full of mystery, action, and clever deductions.', '9', 'conan-23.jpg'),
('F13', 'The Core', 'Sci-Fi', '2003', '135', 'The Core (2003) is a sci-fi disaster thriller directed by Jon Amiel. The story revolves around a catastrophic event: the Earth\'s core has stopped rotating, which disrupts the planet\'s magnetic field and threatens global survival. Without the protective shield provided by the magnetic field, dangerous radiation begins to increase, causing widespread environmental disasters.\r\n\r\nTo prevent a global catastrophe, a team of scientists, led by Dr. Josh Keyes (played by Aaron Eckhart), is assembled to embark on a daring mission. They must travel to the center of the Earth to restart the core using a specially designed device. This perilous journey involves navigating the extreme and hostile conditions deep within the planet, facing natural disasters, technical failures, and deadly threats.\r\n\r\nThe film is filled with intense action, thrilling sequences, and moments of tension as the team races against time to save the world. Though the movie received mixed reviews for its scientific inaccuracies, it remains a classic of the early 2000s disaster genre, offering audiences a blend of high-stakes drama, visual effects, and a sense of adventure.', '8', 'the-core.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `film_person`
--

CREATE TABLE `film_person` (
  `filmID` varchar(100) NOT NULL,
  `actorID` varchar(100) NOT NULL,
  `roleid` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `film_person`
--

INSERT INTO `film_person` (`filmID`, `actorID`, `roleid`) VALUES
('F01', 'A01', 1),
('F01', 'A02', 2),
('F01', 'A03', 3),
('F01', 'A04', 3),
('F01', 'A05', 3),
('F01', 'A06', 3),
('F01', 'A07', 3),
('F01', 'A08', 3),
('F02', 'A09', 1),
('F02', 'A10', 2),
('F02', 'A11', 3),
('F02', 'A11', 3),
('F02', 'A12', 3),
('F02', 'A13', 3),
('F02', 'A14', 3),
('F02', 'A15', 3),
('F03', 'A16', 2),
('F03', 'A09', 1),
('F03', 'A11', 3),
('F03', 'A12', 3),
('F03', 'A13', 3),
('F03', 'A14', 3),
('F03', 'A15', 3),
('F04', 'A23', 1),
('F04', 'A23', 2),
('F04', 'A17', 3),
('F04', 'A18', 3),
('F04', 'A19', 3),
('F04', 'A20', 3),
('F04', 'A21', 3),
('F04', 'A22', 3),
('F05', 'A24', 3),
('F05', 'A25', 3),
('F05', 'A26', 3),
('F05', 'A27', 3),
('F05', 'A28', 3),
('F05', 'A29', 1),
('F05', 'A30', 2),
('F06', 'A31', 1),
('F06', 'A32', 2),
('F06', 'A33', 3),
('F06', 'A34', 3),
('F06', 'A34', 3),
('F06', 'A35', 3),
('F06', 'A36', 3),
('F06', 'A37', 3),
('F07', 'A38', 1),
('F07', 'A39', 2),
('F07', 'A40', 3),
('F07', 'A41', 3),
('F07', 'A42', 3),
('F07', 'A43', 3),
('F07', 'A44', 3),
('F07', 'A45', 3),
('F08', 'A46', 1),
('F08', 'A47', 2),
('F08', 'A48', 3),
('F08', 'A49', 3),
('F08', 'A50', 3),
('F08', 'A51', 3),
('F08', 'A52', 3),
('F09', 'A53', 1),
('F09', 'A54', 2),
('F09', 'A55', 3),
('F09', 'A56', 3),
('F09', 'A57', 3),
('F09', 'A58', 3),
('F10', 'A59', 1),
('F10', 'A59', 2),
('F10', 'A60', 3),
('F10', 'A61', 3),
('F10', 'A62', 3),
('F10', 'A63', 3),
('F11', 'A64', 1),
('F11', 'A65', 2),
('F11', 'A66', 3),
('F11', 'A67', 3),
('F11', 'A68', 3),
('F11', 'A24', 3),
('F12', 'A38', 1),
('F12', 'A39', 2),
('F12', 'A40', 3),
('F12', 'A41', 3),
('F12', 'A42', 3),
('F12', 'A43', 3),
('F12', 'A69', 3),
('F12', 'A70', 3),
('F12', 'A71', 3),
('F13', 'A72', 1),
('F13', 'A73', 2),
('F13', 'A74', 3),
('F13', 'A75', 3),
('F13', 'A76', 3),
('F13', 'A77', 3),
('F13', 'A78', 3),
('F13', 'A79', 3),
('F13', 'A80', 3);

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `newsID` int(100) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` longtext NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`newsID`, `title`, `content`, `image`) VALUES
(1, 'Doraemon: Nobita and the Birth of Japan, A Timeless Adventure Returns to Captivate Audiences', 'The beloved robotic cat Doraemon and his human friends are back with a breathtaking adventure in the movie Doraemon: Nobita and the Birth of Japan. This film revisits one of the most iconic stories from the Doraemon universe, delivering both nostalgic charm for long-time fans and an engaging narrative for new viewers.\r\n\r\nPlot Overview\r\n\r\nIn this thrilling tale, Nobita finds himself overwhelmed by the pressures of school and family life. Along with Doraemon, Shizuka, Gian, and Suneo, he decides to escape to ancient Japan, a land untouched by modern civilization. Armed with Doraemon’s futuristic gadgets, the group embarks on a journey to establish a new life in the distant past.\r\n\r\nTheir peaceful exploration takes a dramatic turn when they encounter Kukuru, a young boy from a primitive tribe who is facing grave threats from a powerful enemy. Determined to help, the group joins forces with Kukuru to confront this menace, resulting in a heart-pounding battle that blends the fantastical elements of Doraemon’s gadgets with the raw courage of ancient tribes.\r\n\r\nThemes and Highlights\r\n\r\nThe movie beautifully weaves themes of friendship, bravery, and the importance of protecting one’s heritage. Through humorous escapades and emotional moments, it highlights the bonds that hold Nobita and his friends together. The stunning visuals, combined with a compelling soundtrack, bring the prehistoric setting to life, immersing audiences in a world that feels both magical and real.\r\n\r\nA Fan Favorite Reimagined\r\n\r\nOriginally released in 1989 as part of the Doraemon film series, Nobita and the Birth of Japan has been reimagined with updated animation and refined storytelling to captivate today’s audiences. This version retains the essence of the original while incorporating modern cinematic techniques, making it a must-watch for both seasoned fans and newcomers to the franchise.\r\n\r\nGlobal Appeal\r\n\r\nThe enduring popularity of Doraemon ensures that this movie resonates with audiences across the globe. Its universal themes, coupled with the lovable characters and innovative gadgets, continue to charm viewers of all ages.\r\n\r\nWhether you’re a fan of the original series or simply looking for a delightful family movie, Doraemon: Nobita and the Birth of Japan promises an unforgettable journey through time and friendship. Don’t miss this heartwarming adventure that proves once again why Doraemon remains a cultural icon.', 'doraemon-36-news.jpg'),
(2, '\"2012\": A Cinematic Disaster Epic That Captivated Audiences', 'Released in 2009, 2012, directed by Roland Emmerich, stands as one of the most iconic disaster films of its time. With its jaw-dropping visual effects and high-stakes storytelling, the film captured the imaginations of millions, solidifying its place in Hollywood\'s blockbuster history.\r\n\r\nPlot Overview\r\nThe film explores a speculative doomsday scenario inspired by the Mayan calendar\'s prediction of the world\'s end. As catastrophic natural disasters wreak havoc across the globe, humanity faces an existential crisis. The story follows Jackson Curtis, played by John Cusack, a struggling writer who must protect his family amidst the chaos. The narrative shifts between personal survival and humanity\'s desperate efforts to preserve civilization.\r\n\r\nStunning Visuals and Action\r\nOne of the film\'s biggest draws was its groundbreaking use of special effects. From massive earthquakes splitting cities in half to tidal waves engulfing entire continents, the film delivered an apocalyptic spectacle. Scenes like the destruction of Los Angeles and the massive tsunami engulfing the Himalayas remain unforgettable highlights.\r\n\r\nCast and Performances\r\nThe star-studded cast included John Cusack, Amanda Peet, Chiwetel Ejiofor, and Woody Harrelson. While the plot leaned heavily on action and spectacle, the cast brought depth to their characters, balancing personal drama with the overarching narrative of global disaster.\r\n\r\nMixed Reception\r\nWhile 2012 was a box office success, grossing over $790 million worldwide, it received mixed reviews from critics. Some praised its ambitious scale and thrilling visuals, while others criticized its reliance on clichés and lack of character development. Nonetheless, it has become a cultural touchstone for fans of the disaster genre.\r\n\r\nLegacy\r\n2012 remains a testament to Hollywood\'s fascination with apocalyptic storytelling. Its themes of survival, family, and the fragility of humanity continue to resonate. For audiences who enjoy edge-of-the-seat thrills paired with stunning visuals, 2012 is a must-watch.\r\n\r\nOver a decade later, the film still sparks discussions about humanity’s preparedness for real-world disasters and the enduring allure of cinematic escapism.', '2012-news.jpg'),
(3, '\"Doraemon: Nobita\'s Chronicle of the Moon Exploration\" A Journey Beyond Imagination', 'Doraemon: Nobita\'s Chronicle of the Moon Exploration (Eiga Doraemon: Nobita no Getsumen Tansaki), released in 2019, is the 39th film in the beloved Doraemon series. Directed by Shinnosuke Yakuwa and written by Mizuki Tsujimura, this heartwarming sci-fi adventure captures the essence of friendship, courage, and the limitless possibilities of the imagination.\r\n\r\nPlot Summary\r\nThe story begins when Nobita claims to see a rabbit on the moon, which his classmates dismiss as a joke. However, with Doraemon\'s help and his \"History Exploratory Club Badge,\" Nobita creates an atmosphere on the moon where rabbits thrive. Meanwhile, a mysterious new student named Luka transfers to Nobita\'s school, hiding secrets tied to the moon’s enigmatic past.\r\n\r\nAs events unfold, Nobita and his friends embark on an unforgettable journey to the \"Lunar Super Region,\" a place hidden on the far side of the moon. They encounter the Espals, lunar inhabitants with unique abilities, and uncover a conflict that threatens the moon\'s harmony. The group must work together to protect their newfound friends and restore peace.\r\n\r\nThemes and Messages\r\nThe film touches on themes of acceptance, bravery, and the power of unity. Luka\'s story of being an outsider resonates deeply, reminding viewers of the importance of understanding and empathy. It also delves into the idea of exploration—not just of new worlds but also of the heart.\r\n\r\nVisuals and Music\r\nThe movie’s animation beautifully brings the moon\'s mysterious landscapes to life, blending fantasy with science fiction. The score by Takayuki Hattori complements the film’s emotional and adventurous moments, adding depth to its narrative.\r\n\r\nReception and Legacy\r\nDoraemon: Nobita\'s Chronicle of the Moon Exploration was a commercial and critical success, grossing over ¥5 billion in Japan and earning accolades for its heartfelt story and visual charm. It continues the series’ tradition of creating family-friendly entertainment with meaningful lessons.\r\n\r\nFor fans of Doraemon and newcomers alike, this film offers a touching adventure that celebrates imagination, friendship, and the enduring spirit of exploration.', 'doraemon-39-news.jpg'),
(4, 'Fast and Furious 9: The Ultimate Ride of Family and Fury', 'Fast and Furious 9 (F9: The Fast Saga), released in 2021, is the ninth main installment in the high-octane Fast & Furious franchise. Directed by Justin Lin, the film continues the story of Dominic Toretto and his crew as they face their most personal and dangerous challenge yet.\r\n\r\nPlot Summary\r\nDominic Toretto (Vin Diesel) is living a quiet life off the grid with his son Brian and wife Letty (Michelle Rodriguez). However, peace is short-lived when they are confronted by Jakob (John Cena), Dom’s estranged brother, who is working with a cyberterrorist named Cipher (Charlize Theron).\r\n\r\nJakob seeks to harness a dangerous weapon capable of global devastation, and it’s up to Dom and his team to stop him. The mission takes them across the globe—from the streets of London to a jungle in Central America and even into outer space—pushing their skills and loyalty to the limits.\r\n\r\nKey Highlights\r\nFamily Dynamics: The film explores the deeply rooted sibling rivalry between Dom and Jakob, adding emotional depth to the action-packed narrative.\r\nOutlandish Stunts: True to the franchise’s reputation, F9 delivers over-the-top action sequences, including a magnet-powered car chase and a jaw-dropping rocket car scene in space.\r\nReturning Characters: Fan favorites like Han (Sung Kang) make a surprising comeback, adding intrigue and nostalgia for long-time fans of the series.\r\nCast and Performances\r\nThe ensemble cast includes franchise veterans Vin Diesel, Michelle Rodriguez, Tyrese Gibson, Ludacris, and Nathalie Emmanuel. Newcomers John Cena and Michael Rooker add fresh energy to the saga. The performances strike a balance between humor, drama, and the high-stakes action the series is known for.\r\n\r\nReception\r\nF9 was a box office success, grossing over $720 million globally despite the challenges of the COVID-19 pandemic. Critics and fans praised its action sequences and character-driven moments, though some pointed out its increasingly implausible stunts.\r\n\r\nLegacy\r\nFast and Furious 9 is a testament to the franchise’s evolution from street racing to a globe-trotting action juggernaut. With its mix of family-centered drama and jaw-dropping action, it sets the stage for the series’ upcoming final chapters.\r\n\r\nWhether you’re a long-time fan or new to the saga, F9 offers an adrenaline-fueled experience that stays true to the franchise’s mantra: “Family first.”', 'fast-furious-9-news.jpg'),
(5, 'Saw IV: The Terrifying Continuation of the Jigsaw Legacy', 'Saw IV, released in 2007, is the fourth installment in the infamous Saw horror franchise created by James Wan and Leigh Whannell. Directed by Darren Lynn Bousman, this film takes the story of the sadistic serial killer, Jigsaw, to darker and more intricate levels, pushing the boundaries of psychological horror.\r\n\r\nPlot Summary\r\nThe film opens with the aftermath of Detective Kerry’s death, and the police are investigating the identity of the notorious killer known as Jigsaw (John Kramer). Meanwhile, two officers, Rigg (Lyriq Bent) and Hoffman (Costas Mandylor), are caught in a deadly game orchestrated by Jigsaw. They are forced to play a twisted game of their own, with each new step revealing more about the killer\'s past and motivations.\r\n\r\nSimultaneously, the movie dives deeper into the backstory of John Kramer, revealing his transformation into the ruthless Jigsaw and the events that led him to create his infamous \"games.\" The narrative unfolds with multiple interwoven plots, including the struggles of Rigg as he navigates a series of violent traps and struggles to save his colleagues.\r\n\r\nKey Themes and Elements\r\nPsychological Horror: Like its predecessors, Saw IV continues to focus on the psychological torment of its characters, who are forced to make horrifying decisions for their survival.\r\nComplex Storytelling: The film\'s intricate plot weaves between the present and flashbacks, offering deeper insight into Jigsaw\'s past and the reasoning behind his twisted methods.\r\nTwists and Turns: The Saw series is known for its shocking twists, and Saw IV is no exception. The final moments leave the audience questioning everything, setting the stage for the next installment.\r\nCast and Performances\r\nThe cast of Saw IV includes returning characters like Costas Mandylor as Mark Hoffman and Tobin Bell as Jigsaw. New additions, such as Lyriq Bent and Scott Patterson, bring fresh intensity to the series. Bell\'s portrayal of the methodical and chilling Jigsaw continues to be the standout, with his calm demeanor contrasting his horrific actions.\r\n\r\nReception\r\nCritics and audiences were divided on Saw IV. While some appreciated the film\'s deeper exploration of Jigsaw’s backstory and its continued commitment to shocking violence and twists, others criticized it for becoming overly convoluted and reliant on gore. Nonetheless, it was a box-office success, grossing over $139 million worldwide.\r\n\r\nLegacy\r\nSaw IV continued the Saw franchise’s legacy as one of the most influential horror series of the 2000s. Its impact on the genre is undeniable, influencing a wave of horror films with similarly intricate plots and gruesome content. With its shocking finale and dark storytelling, Saw IV remains a key piece in the larger Saw saga, further cementing Jigsaw’s place in horror history.', 'saw-4-news.jpg'),
(6, 'Final Destination 5: A Thrilling Return to Death\'s Deadly Designs', 'Final Destination 5, released in 2011, is the fifth installment in the popular horror franchise that follows a group of people trying to cheat death after a premonition saves them from a fatal accident. Directed by Steven Quale, this chapter in the Final Destination series brings the trademark suspense, intricate death sequences, and the ever-looming threat of fate catching up with the characters.\r\n\r\nPlot Summary\r\nThe film begins with a deadly bridge collapse that claims the lives of several passengers on a bus. The protagonist, Sam Lawton (Nicholas D\'Agosto), has a premonition of the disaster just moments before it happens, saving himself and his colleagues from certain death. However, as in the previous films, death doesn\'t take kindly to being cheated.\r\n\r\nSam and his friends quickly realize that they are being stalked by Death itself, with each of them dying in increasingly brutal and creative ways. As they try to outrun their fates, they discover that the only way to escape death’s design might involve a shocking connection to the events that saved them in the first place.\r\n\r\nKey Themes and Elements\r\nThe Inevitable Force of Death: Like the other films in the series, Final Destination 5 emphasizes that death is an unstoppable, inevitable force, and no matter how hard the characters try to avoid it, they cannot escape their fate.\r\nGory and Ingenious Deaths: The film is known for its creative and graphic death scenes, with various characters meeting their end in ways that are both shocking and meticulously crafted. The bridge collapse itself is a particularly intense and terrifying sequence that sets the tone for the rest of the film.\r\nTwists and Suspense: True to the Final Destination series, the film is packed with tension and suspense, keeping the audience on edge as characters try to figure out how to survive. The narrative also plays with the idea of fate being inescapable, with a final twist that ties the movie back to the very first Final Destination film.\r\nCast and Performances\r\nThe cast of Final Destination 5 includes Nicholas D\'Agosto, Emma Bell, Miles Fisher, and Tony Todd reprising his role as the enigmatic coroner, William Bludworth. The performances are generally centered around creating emotional tension, as the characters grapple with fear and desperation while trying to make sense of the chaos surrounding them. D\'Agosto and Bell deliver strong performances as the leads, adding an emotional layer to their fight for survival.\r\n\r\nReception\r\nFinal Destination 5 was well-received by both critics and fans, with many praising it for being a return to form for the series. The movie’s death sequences were lauded for being inventive and gory, while the story was appreciated for its darker tone and emotional depth compared to previous installments. The film grossed over $157 million worldwide, making it one of the more successful films in the franchise.\r\n\r\nLegacy\r\nFinal Destination 5 serves as a fitting entry in the series, offering fans the thrills and scares they’ve come to expect while also providing a satisfying conclusion to the story arc that connects the five films. The twist ending, which ties the events of the movie back to the original Final Destination, adds an extra layer of intrigue for fans of the franchise.\r\n\r\nOverall, Final Destination 5 stands out for its effective combination of suspense, death-defying scenarios, and the franchise\'s signature grim humor. It remains a fan favorite and a fitting end to the Final Destination saga.', 'final-destination-news.jpg'),
(7, 'Detective Conan: The Million Dollar Pentagram', 'Detective Conan: The Million Dollar Pentagram (Meitantei Conan: Jinsei Game no Sōzō) is a 2006 film in the Detective Conan series, based on Gosho Aoyama\'s popular manga. Directed by Kenji Kodama, the movie features a high-stakes mystery that combines detective work, psychological manipulation, and a series of mind-bending puzzles.\r\n\r\nPlot Summary\r\nThe story begins when a wealthy businessman named Sōichi Kuroda invites Conan Edogawa and his friends to a luxurious mansion for a game, offering a million-dollar prize to anyone who can solve a series of puzzles. However, the game takes a dark turn when one of the participants is found dead, and it becomes clear that the challenge isn\'t just a game—it\'s a deadly trap.\r\n\r\nConan, with his sharp detective skills, must navigate the complexities of the pentagram-shaped puzzle, uncovering the truth behind the murder. As the investigation progresses, Conan and his friends uncover secrets from the past, revealing hidden motives and a connection to an infamous incident involving a secret treasure. The tension rises as they race against time to stop more killings and catch the elusive killer.\r\n\r\nKey Themes and Elements\r\nPsychological Puzzles: The film’s central concept revolves around a series of mind games and riddles, which Conan and his friends must solve to prevent more deaths. The puzzles are intricately designed, keeping the audience guessing as the mystery unfolds.\r\nTense Atmosphere: As with most Detective Conan films, The Million Dollar Pentagram keeps the audience on edge with its blend of suspense, mystery, and thrilling twists. The stakes are high, and every moment counts as Conan strives to piece together the puzzle before it\'s too late.\r\nDetective Work and Deduction: The movie stays true to the essence of Detective Conan, with Conan relying on his sharp powers of deduction to solve the case. His ability to solve complex puzzles and find hidden connections between seemingly unrelated clues drives the narrative forward.\r\nCast and Performances\r\nThe film features a familiar voice cast from the Detective Conan anime, including Kappei Yamaguchi as Conan Edogawa, Minami Takayama as Ran Mouri, and Rikiya Koyama as Kogoro Mouri. The voice actors once again bring life to their characters, especially Yamaguchi, whose portrayal of Conan is both energetic and serious when the stakes are high.\r\n\r\nReception\r\nDetective Conan: The Million Dollar Pentagram was generally well-received by fans of the series. Critics and audiences praised its clever plot, thrilling suspense, and the strong, well-executed mystery at the heart of the film. The high level of intrigue and the psychological aspects of the story made it stand out from other entries in the Detective Conan film series.\r\n\r\nLegacy\r\nAs a part of the Detective Conan franchise, The Million Dollar Pentagram continues the series\' tradition of blending classic detective stories with modern-day intrigue. The film is a fan favorite, especially for those who enjoy intricate puzzles and mind games, making it a memorable entry in the Detective Conan movie lineup.\r\n\r\nWith its intelligent plot, intricate mysteries, and tense atmosphere, Detective Conan: The Million Dollar Pentagram remains a standout example of the franchise\'s ability to keep viewers on the edge of their seats, proving once again why Detective Conan is one of Japan’s most beloved anime and manga series.', 'conan-27-news.jpg'),
(8, 'Mirror (2008): A Chilling Exploration of Perception and Reality', 'Mirror is a 2008 psychological horror film directed by Pavel Lundgren. The movie delves into themes of perception, reality, and the supernatural through a series of eerie and unsettling events centered around a mysterious mirror. Known for its haunting atmosphere and complex narrative, Mirror is a unique addition to the horror genre.\r\n\r\nPlot Summary\r\nThe story of Mirror follows a man who moves into a new apartment and discovers a strange antique mirror that seems to have a life of its own. The mirror appears to reflect things that are not quite right, showing scenes of people long past and visions that blur the lines between the present and the past. As the man becomes more obsessed with the mirror, he begins to experience a series of unsettling visions, including ghosts, shadows, and visions of past tragedies.\r\n\r\nThe narrative shifts between various timelines, exploring the history of the mirror and the people who have been affected by its supernatural influence. The protagonist’s quest for answers becomes a descent into a dark and mysterious world, where past events and supernatural forces begin to collide in increasingly frightening and inexplicable ways. As he tries to understand the truth, he finds himself caught in a web of deception and horror.\r\n\r\nKey Themes and Elements\r\nPerception vs. Reality: The film blurs the line between perception and reality, constantly questioning what is real and what is imagined. This theme is at the core of the narrative, as characters struggle to make sense of their surroundings.\r\nHaunting Atmosphere: Mirror builds tension through its use of sound, visuals, and a slow-burning pace. The haunting and eerie atmosphere is crucial in establishing the film’s unsettling mood.\r\nSupernatural and History: The film explores the connection between the supernatural and the past. Through flashbacks and visions, Mirror reveals layers of history that are intimately tied to the present and to the eerie occurrences in the mirror.\r\nCast and Performances\r\nThe film features a talented cast, although the focus is more on the atmosphere and the unfolding mystery rather than individual performances. Actors like Ivan Okhlobystin help build a sense of dread and curiosity as the story progresses. Their performances contribute to the film’s chilling tone, helping convey the sense of unease that permeates every scene.\r\n\r\nReception\r\nMirror received mixed to positive reviews from critics. Its ability to create a haunting atmosphere and its complex narrative structure were widely praised. Viewers appreciated the film’s exploration of perception and its effective use of the horror genre to evoke a sense of mystery and fear. However, some criticized the film for its slow pace and ambiguous storytelling, finding it too abstract at times.\r\n\r\nLegacy\r\nMirror has gained a cult following among horror enthusiasts for its innovative approach to the genre. Its exploration of psychological horror and supernatural elements has influenced other films that deal with similar themes. The movie’s ability to maintain a sense of dread and ambiguity makes it a memorable experience for those who appreciate a slower, more atmospheric style of horror.\r\n\r\nMirror is a compelling and thought-provoking horror film that challenges viewers to reconsider their understanding of reality. With its haunting narrative and eerie visuals, it is a must-watch for fans of psychological horror.', 'mirror-1-news.jpg'),
(9, 'The Wandering Earth 2: A Prequel to the Epic Sci-Fi Saga', 'The Wandering Earth 2, released in 2023, is the highly anticipated prequel to the 2019 hit The Wandering Earth, based on the novella by Liu Cixin. Directed by Frant Gwo, the film expands on the universe introduced in the first movie, offering deeper insights into the global efforts to save humanity from the dying sun and the construction of the massive planetary engines that will move Earth to a new star system.\r\n\r\nPlot Summary\r\nSet years before the events of the first film, The Wandering Earth 2 explores the challenges faced by humanity as they devise a plan to save Earth. The sun is rapidly expanding, and Earth is facing imminent destruction. In response, world governments unite to build colossal \"planetary engines\" that will push Earth out of its orbit and send it on a centuries-long journey to a new star system. However, the process is far from smooth, and humanity faces not only external threats but also internal divisions and political struggles.\r\n\r\nThe film centers around the character of Liu Peiqiang (played by Wu Jing), a prominent scientist who is part of the project to build these planetary engines. Alongside him, the film introduces new characters, including engineers and astronauts, whose lives are intertwined with the fate of the Earth. As the team works on the planetary engines, they face natural disasters, sabotage, and the realization that even the most advanced technology might not be enough to ensure humanity\'s survival.\r\n\r\nKey Themes and Elements\r\nGlobal Cooperation and Sacrifice: A major theme in The Wandering Earth 2 is the idea of global unity in the face of existential threat. The film showcases the cooperation of nations and the sacrifices that individuals and countries must make for the greater good of all humanity.\r\nTechnological Innovation: The film focuses heavily on the technological marvels that are being developed to save Earth, with massive planetary engines and space exploration missions. It highlights humanity\'s drive to survive and adapt in the face of unprecedented challenges.\r\nPolitical and Human Struggles: The characters in the film deal with internal conflicts, personal relationships, and the moral dilemmas of working on a project that could cost billions of lives if it fails. The pressure of such a monumental task creates tension and drama as the story unfolds.\r\nCast and Performances\r\nThe Wandering Earth 2 features a strong ensemble cast, with returning stars like Wu Jing and new additions such as Andy Lau and Li Xuejian. Wu Jing, who also starred in the first film, delivers a compelling performance as Liu Peiqiang, a scientist and leader dedicated to the survival of humanity. The cast’s performances are solid, with each actor bringing emotional depth to their roles in this high-stakes environment.\r\n\r\nReception\r\nThe Wandering Earth 2 was well-received by both critics and audiences, praised for its visually stunning special effects, grand scale, and emotional storytelling. The film managed to build on the success of its predecessor while introducing new themes and expanding the universe. While some critics noted that the pacing could be slow at times, the film\'s ambition and scope were widely appreciated.\r\n\r\nLegacy\r\nAs the prequel to The Wandering Earth, the film sets up the events of the first movie, adding depth to the characters and the global crisis that leads to Earth\'s migration. The Wandering Earth 2 is an important chapter in China’s growing sci-fi cinematic presence, alongside other successful films like The Battle at Lake Changjin. It demonstrates China’s increasing ability to produce large-scale, high-quality science fiction films that can compete on a global level.\r\n\r\nWith its rich world-building, emotional stakes, and spectacular visuals, The Wandering Earth 2 stands out as a sci-fi epic that explores both humanity\'s greatest potential and its darkest challenges. It is a must-watch for fans of space exploration, disaster films, and thought-provoking science fiction.', 'wandering-earth-2-news.jpg'),
(10, 'Wrong Turn 4: Bloody Beginnings (2011)', 'Wrong Turn 4: Bloody Beginnings is the fourth installment in the Wrong Turn horror franchise, directed by Declan O\'Brien. Released in 2011, the film is a prequel to the previous Wrong Turn movies, exploring the origins of the cannibalistic, inbred family that terrorizes anyone unlucky enough to cross their path in the remote wilderness of West Virginia. Known for its gruesome violence, disturbing atmosphere, and bloody kills, the film continues the series’ tradition of delivering horror and gore in equal measure.\r\n\r\nPlot Summary\r\nThe story is set in 1974 and follows a group of college students who travel to a remote, abandoned sanatorium in the mountains for a weekend getaway. However, the seemingly peaceful location has a dark past. Years earlier, the sanatorium was the home of three grotesque, cannibalistic brothers—Three Finger, One Eye, and Saw Tooth—who were left to rot after being abandoned by their family.\r\n\r\nAfter discovering the disturbing remains of the brothers’ past, the students’ weekend turns into a nightmare. The group soon realizes that the brothers are still alive and still brutally killing anyone who comes near. The students are trapped inside the sanatorium and must try to survive as the deadly cannibals hunt them down one by one.\r\n\r\nKey Themes and Elements\r\nGore and Horror: As with the previous Wrong Turn films, Bloody Beginnings is characterized by its brutal and graphic violence. The film is filled with disturbing death scenes, dismemberments, and intense gore that horror fans expect from the franchise.\r\nIsolation and Survival: The students\' isolation in the abandoned sanatorium plays a key role in the film\'s suspense. The atmosphere of being trapped in an unfamiliar, hostile environment heightens the tension as they are hunted by the cannibalistic family.\r\nOrigins of the Villains: Unlike the previous films, which focus on the victims’ experiences, Bloody Beginnings delves into the backstory of the inbred cannibal brothers. It reveals how they became the terrifying killers that haunt the woods in later films, providing a disturbing look into their twisted origins.\r\nCast and Performances\r\nThe film stars actors such as Terra Vnesa, Janet Montgomery, and Tenille Houston, who portray the group of students caught in the horror. The performances are mostly centered around survival and fear as the characters try to escape the relentless pursuit of the cannibal brothers. While the film’s main focus is on horror and gore, the cast does what is necessary to convey the terror and desperation of their situations.\r\n\r\nReception\r\nWrong Turn 4: Bloody Beginnings received mostly negative reviews from critics, who criticized it for relying too heavily on gore and shock value, while lacking the suspense and atmosphere that made the original Wrong Turn film more effective. Fans of the series, however, found the movie to be a satisfying addition, especially for those who enjoy the slasher and gory elements of the franchise. The film’s backstory and exploration of the cannibal family’s origins was seen as a notable addition for fans of the series.\r\n\r\nLegacy\r\nWhile Wrong Turn 4: Bloody Beginnings didn’t do much to elevate the franchise, it contributed to the growing mythology of the Wrong Turn series. The movie\'s focus on the origins of the killers gives more context to the brutal events of the previous films, enriching the lore for fans of the series. The movie is an essential watch for those who enjoy extreme horror, gory kills, and twisted, disturbing characters.\r\n\r\nOverall, Wrong Turn 4: Bloody Beginnings delivers on what fans of the franchise expect: gruesome deaths, a remote location filled with terror, and the unraveling of the origins of the iconic cannibal family. While it may not offer much in terms of plot or character development, it’s a fitting installment for those who love horror films with a heavy emphasis on gore and violence.', 'wrong-turn-4-news.jpg'),
(11, 'Saw X (2023): A Bloody Return to the Franchise\'s Roots', 'Saw X (2023), directed by Kevin Greutert, marks the tenth installment in the iconic Saw horror franchise. It serves as both a continuation and a return to the roots of the series, offering fans of the franchise a deeper dive into the twisted world of John Kramer (aka Jigsaw). Set between the events of Saw (2004) and Saw II (2005), Saw X offers more insight into Jigsaw’s methods and motivations, all while delivering the brutal, mind-bending traps and psychological terror that the series is known for.\r\n\r\nPlot Summary\r\nThe film follows John Kramer (Tobin Bell), who is diagnosed with terminal cancer. Desperate to find a cure, he travels to Mexico for an experimental medical procedure that promises to save his life. However, when he arrives at the clinic, he discovers that he has been scammed by a group of con artists who are running a fraudulent operation. Furious at being deceived, John decides to take matters into his own hands.\r\n\r\nUsing his unique set of skills, John creates a series of deadly traps for the people responsible for the scam. In typical Saw fashion, the victims must make life-or-death decisions as they try to escape the twisted games he has set up for them. The movie explores John’s emotions and motivations in more depth than previous films, showing his transition from a man seeking revenge to the creation of his infamous \"Jigsaw\" persona.\r\n\r\nKey Themes and Elements\r\nRevenge and Justice: A central theme of Saw X is revenge, as John Kramer seeks to punish those who wronged him. The film delves into his personal feelings of betrayal and his desire to make those who hurt him suffer. This revenge plot adds a new layer of emotional depth to the character.\r\nMoral Dilemmas and Consequences: As with every Saw film, Saw X focuses on the moral choices forced upon its victims. Each trap is designed to make the person choose between survival and suffering, pushing the boundaries of morality. The film examines themes of guilt, redemption, and justice.\r\nElaborate Traps and Gory Deaths: The franchise’s signature traps return in full force, with increasingly complex and gruesome designs. The film includes both traditional Saw traps—such as the classic \"reverse bear trap\"—as well as new, more creative methods of punishment. These traps are as much about psychological manipulation as they are about physical danger.\r\nCast and Performances\r\nTobin Bell returns as John Kramer, and his performance remains as chilling and intense as ever. He brings a sense of gravitas to the role, portraying a man who is both vengeful and calculating, but also deeply human in his pain. The supporting cast includes Shawnee Smith, who reprises her role as Amanda Young, and new characters who are victims of Kramer\'s traps. The cast successfully brings the terror of the Saw universe to life, especially as their characters face their own personal demons while navigating Kramer\'s deadly games.\r\n\r\nReception\r\nSaw X was generally well-received by critics and fans alike, with many praising the film for returning to the series\' roots. The focus on John Kramer’s backstory and the deeper exploration of his motivations was a welcomed addition, allowing for more character development and emotional depth. Fans of the franchise appreciated the return to the brutal, psychological horror elements that made the first films so iconic.\r\n\r\nWhile the film’s reliance on gore and violence might not be for everyone, Saw X delivers the visceral horror and suspense that fans of the series expect. Some critics noted that while the film does a great job of diving deeper into John Kramer\'s character, it might feel familiar to long-time fans who have seen similar traps and setups before.\r\n\r\nLegacy\r\nSaw X stands as a significant chapter in the Saw franchise, not only due to its exploration of John Kramer\'s origins but also for reinvigorating the series after several sequels and spin-offs. The film provides closure and deepens the mythology of Jigsaw, making it a crucial installment for fans of the franchise. It also opens up the possibility for future Saw films to further explore Kramer’s twisted sense of justice and morality.\r\n\r\nOverall, Saw X is a satisfying addition to the Saw saga, delivering the twisted traps, shocking twists, and psychological terror that fans have come to expect. It proves that even after a decade, the Saw franchise still has the ability to unsettle and shock its audience with its disturbing blend of horror and moral complexity.', 'saw-10.jpg'),
(12, 'Detective Conan: The Fist of Blue Sapphire (2019)', 'Detective Conan: The Fist of Blue Sapphire is the 23rd film in the Detective Conan (or Case Closed) franchise, released in 2019. Directed by Tomoka Nagaoka, the film follows the famous teenage detective Shinichi Kudo, who is trapped in the body of a child due to a poison, as he investigates a complex case involving a legendary gemstone, high-profile heists, and dangerous criminals. The movie was well-received for its thrilling action, intricate plot, and the iconic mystery-solving abilities of Conan Edogawa.\r\n\r\nPlot Summary\r\nThe story takes place in Singapore, where a grand event surrounding the \"Fist of Blue Sapphire,\" a rare and highly valuable blue diamond, is set to take place. The diamond is believed to have a dark history, and its legacy of theft and murder has left a trail of mystery. The famous thief, Kaito Kuroba (aka Kaito Kid), also known as the \"Phantom Thief,\" is planning to steal the diamond during the event.\r\n\r\nConan Edogawa, along with his friends and the FBI, is drawn into the case when the precious diamond is targeted. However, things take a darker turn when the legendary thief’s heist is just the tip of the iceberg. The plot thickens with an unexpected twist, as a series of violent incidents and deaths linked to the diamond occur. As Conan unravels the case, he uncovers shocking secrets about the diamond\'s origins, its true significance, and the dangerous criminals involved.\r\n\r\nKey Themes and Elements\r\nHigh-Stakes Heist: Much like the earlier films in the franchise, The Fist of Blue Sapphire centers around a daring heist. The tension is amplified by the presence of Kaito Kid, a notorious thief who challenges Conan’s detective skills.\r\nMystery and Puzzle-Solving: As with all Detective Conan stories, the focus is on solving a complex mystery. Conan uses his intellect to piece together clues, making use of his keen observational skills, logic, and deductions to untangle the mystery surrounding the blue sapphire.\r\nAction and Adventure: This film features a lot of thrilling action sequences, including high-speed chases, explosive confrontations, and daring escapes. It’s an exciting ride for viewers who enjoy both mystery and action elements.\r\nIconic Characters: The film brings together a variety of familiar characters from the Detective Conan series, including Ran Mouri, Kogoro Mouri, and the rest of the Detective Boys. Their interactions and unique personalities help drive the film forward, adding emotional depth to the story.\r\nCast and Performances\r\nThe voice cast for The Fist of Blue Sapphire includes familiar voices from the Detective Conan anime series, with Minami Takayama voicing Conan Edogawa, Kappei Yamaguchi voicing Shinichi Kudo, and Wakana Yamazaki voicing Ran Mouri. Their performances help maintain the series’ charm, as the characters are brought to life with their distinct personalities, wit, and emotional depth.\r\n\r\nReception\r\nDetective Conan: The Fist of Blue Sapphire received positive reviews from both fans and critics. The movie was praised for its compelling storyline, exciting action sequences, and its clever, engaging mystery. Fans of the series appreciated how the film incorporated both the iconic elements of Detective Conan—such as Conan\'s deduction skills and the ongoing Kaito Kid rivalry—while also introducing new exciting elements. The movie’s setting in Singapore added an international flair that refreshed the usual setting of Japan.\r\n\r\nIt was also successful at the box office, grossing over ¥9.8 billion ($90 million USD), making it one of the highest-grossing films in the Detective Conan franchise.\r\n\r\nLegacy\r\nAs one of the top-performing films in the Detective Conan franchise, The Fist of Blue Sapphire helped to solidify the series’ place in the hearts of fans worldwide. It also demonstrated the continued popularity and appeal of the Detective Conan franchise, which has been running since 1996, both as an anime series and as a series of films.\r\n\r\nOverall, The Fist of Blue Sapphire is a thrilling, action-packed installment in the Detective Conan film series. Its combination of high-stakes heists, exciting action, and classic mystery-solving will appeal to long-time fans of the series as well as newcomers to the franchise.', 'conan-23-news.jpg'),
(13, 'The Core (2003): A Sci-Fi Disaster Movie', 'The Core (2003), directed by Jon Amiel, is a science fiction disaster film that blends high-stakes action with scientific concepts in a dramatic story of survival. While the film’s scientific accuracy has been widely criticized, it remains a cult classic for its thrilling premise, tense atmosphere, and memorable ensemble cast. With its premise of a world-threatening catastrophe, The Core delivers a fast-paced, if occasionally implausible, tale of heroic efforts to save the Earth.\r\n\r\nPlot Summary\r\nThe story of The Core begins when scientists discover that the Earth’s core has stopped rotating, leading to a collapse of the planet’s magnetic field. As a result, the Earth is gradually becoming more vulnerable to solar radiation, with potentially catastrophic consequences for all life on the planet. As the magnetic field weakens, the effects are felt around the world, with increasingly violent storms, electrical disruptions, and strange natural phenomena.\r\n\r\nIn a desperate bid to prevent global disaster, a team of scientists and engineers are assembled to journey to the center of the Earth. Their mission is to detonate a series of nuclear bombs in the core to restart its rotation and restore the Earth’s magnetic field. However, the journey is fraught with peril. The team must navigate extreme heat, crushing pressure, and unforeseen dangers as they travel deeper into the Earth’s core. Along the way, they encounter a series of obstacles that test their resolve and force them to make life-or-death decisions.\r\n\r\nKey Themes and Elements\r\nScientific Exploration and Survival: The film centers on the idea of human perseverance and ingenuity in the face of impossible odds. The characters must work together to solve complex scientific problems while battling environmental hazards deep within the Earth.\r\nHeroism and Sacrifice: The team faces numerous challenges, and some members make significant sacrifices for the success of the mission. Themes of selflessness and bravery are at the heart of the film, as the characters are willing to risk their lives for the survival of humanity.\r\nGlobal Catastrophe: The Core taps into the popular disaster genre, where the fate of the entire planet hangs in the balance. The film presents a world on the brink of annihilation, with the protagonists acting as the last line of defense against an Earth-threatening crisis.\r\nScience Fiction and Implausible Concepts: The scientific premise of The Core—that nuclear bombs can restart the Earth’s rotation—has been widely criticized for its lack of realism. However, the film embraces its speculative nature, offering a thrilling adventure more focused on the action and drama than scientific plausibility.\r\nCast and Performances\r\nThe film boasts an ensemble cast led by Aaron Eckhart, who plays Dr. Josh Keyes, the brilliant but reluctant scientist leading the mission. Other key members of the cast include Hilary Swank as Major Rebecca Childs, a skilled astronaut who helps guide the team, and Stanley Tucci as Dr. Edward Brazzelton, the eccentric and sometimes abrasive geophysicist. The film also stars Delroy Lindo, DJ Qualls, and Tchéky Karyo.\r\n\r\nThe performances are generally solid, with the cast conveying the urgency and danger of their situation. However, the film’s melodramatic dialogue and over-the-top characterizations sometimes detract from the seriousness of the scenario, leaning into a more action-adventure tone rather than a deep emotional or intellectual exploration.\r\n\r\nReception\r\nThe Core received mixed to negative reviews from critics. While it was praised for its visual effects and fast-paced action, the film’s scientific inaccuracies and predictable plot were widely criticized. The portrayal of Earth’s core and the absurdity of the proposed solution—nuclear explosions to restart the planet’s rotation—left many viewers skeptical. Despite these flaws, the film has garnered a cult following, especially among fans of disaster and sci-fi thrillers, who enjoy its high-concept premise and popcorn entertainment.\r\n\r\nThe film’s reception at the box office was also lukewarm. While it did make back its budget, it did not become a major hit. However, over time, The Core has become a guilty pleasure for many, with its entertaining spectacle overshadowing its lack of scientific realism.\r\n\r\nLegacy\r\nThe Core is remembered as a fun, if scientifically dubious, disaster movie that doesn’t take itself too seriously. It remains a part of early 2000s disaster cinema, alongside films like Deep Impact and The Day After Tomorrow. The film’s blend of action, suspense, and outlandish science fiction has made it a guilty pleasure for many viewers.\r\n\r\nDespite its flaws, The Core serves as a reminder of the imaginative potential of science fiction, where dramatic, world-saving adventures take precedence over realism. It continues to be enjoyed by fans for its thrilling plot, engaging performances, and memorable moments, making it a classic example of early 21st-century disaster filmmaking.', 'the-core-news.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `person`
--

CREATE TABLE `person` (
  `actorID` varchar(100) NOT NULL,
  `name` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `person`
--

INSERT INTO `person` (`actorID`, `name`, `avatar`) VALUES
('A01', 'Roland Emmerich', ''),
('A02', 'Harald Kloser', ''),
('A03', 'John Cusack', 'john-cusack-2012.jpg'),
('A04', 'Chiwetel Ejiofor', 'cast-2012.jpg'),
('A05', 'Woody Harrelson', 'cast-2012-2.jpg'),
('A06', 'Morgan Lily', 'cast-2012-3.jpg'),
('A07', 'Amanda Peet', 'cast-2012-4.jpg'),
('A08', 'Thandie Newton', 'cast-2012-5.jpg'),
('A09', 'Yakuwa Shinnosuke', ''),
('A10', 'Yakuwa Shinnosuke', ''),
('A11', 'Mizuta Wasabi', ''),
('A12', 'Ohara Megumi', ''),
('A13', 'Kakazu Yumi', ''),
('A14', 'Kimura Subaru', ''),
('A15', 'Seki Tomokazu', ''),
('A16', 'Tsujimura Mizuki', ''),
('A17', 'Vin Diesel', 'cast-f9-1.jpg'),
('A18', 'Michelle Rodriguez', 'cast-f9-2.jpg'),
('A19', 'Jordana Brewster', 'cast-f9-3.jpg'),
('A20', 'John Cena', 'cast-f9-4.jpg'),
('A21', 'Tyrese Gibson', 'cast-f9-5.jpg'),
('A22', 'Sung Kang', 'cast-f9-6.jpg'),
('A23', 'Justin Lin', ''),
('A24', 'Tobin Bell', 'cast-saw4.jpg'),
('A25', 'Scott Patterson', 'cast-saw4-2.jpg'),
('A26', 'Athena Karkanis', 'cast-saw4-3.jpg'),
('A27', 'Betsy Russell', 'cast-saw4-4.jpg'),
('A28', 'Devon Bostick', 'cast-saw4-5.jpg'),
('A29', 'Darren Lynn Bousman', ''),
('A30', 'Gregg Hoffman', ''),
('A31', 'Steven Quale', ''),
('A32', 'Eric Heisserer', ''),
('A33', 'Jacqueline MacInnes Wood', 'cast-fd-1.jpg'),
('A34', 'Emma Bell', 'cast-fd-2.jpg'),
('A35', 'Miles Fisher', 'cast-fd-3.jpg'),
('A36', 'Tony Todd', 'cast-fd-4.jpg'),
('A37', 'Nicholas D\'Agosto', 'cast-fd-5.jpg'),
('A38', 'Chika Nagaoka', ''),
('A39', 'Takahiro Okura', ''),
('A40', 'Minami Takayama', ''),
('A41', 'Kappei Yamaguchi', ''),
('A42', 'Wakana Yamazaki', ''),
('A43', 'Rikiya Koyama', ''),
('A44', 'Ryō Horikawa', ''),
('A45', 'Yuko Miyamura', ''),
('A46', 'Alexandre Aja', ''),
('A47', 'Alexandra Milchan', ''),
('A48', 'Kiefer Sutherland', 'cast-mirror-1.jpg'),
('A49', 'Paula Patton', 'cast-mirror-2.jpg'),
('A50', 'Cameron Boyce', 'cast-mirror-3.jpg'),
('A51', 'Erica Gluck', 'cast-mirror-4.jpg'),
('A52', 'Amy Smart', 'cast-mirror-5.jpg'),
('A53', 'Frant Gwo', ''),
('A54', 'Liu Cixin', ''),
('A55', 'Wu Jing', 'cast-twe2.jpg'),
('A56', 'Annie Yi', 'cast-twe2-2.jpg'),
('A57', 'Clara', 'cast-twe2-3.jpg'),
('A58', 'Andy Lau', 'cast-twe2-4.jpg'),
('A59', 'Declan O\'Brien', ''),
('A60', 'Tenika Davis', 'cast-wt4-1.jpg'),
('A61', 'Sean Skene', 'cast-wt4-2.jpg'),
('A62', 'Jennifer Pudavick', 'cast-wt4-3.jpg'),
('A63', 'Kaitlyn Leeb', 'cast-wt4-4.jpg'),
('A64', 'Kevin Greutert', ''),
('A65', 'Peter Goldfinger', ''),
('A66', 'Shawnee Smith', 'cast-saw10-1.jpg'),
('A67', 'Synnøve Macody Lund', 'cast-saw10-2.jpg'),
('A68', 'Renata Vaca', 'cast-saw10-3.jpg'),
('A69', 'Megumi Hayashibara', ''),
('A70', 'Naoko Matsui', ''),
('A71', 'Nobuyuki Hiyama', ''),
('A72', 'Jon Amiel', ''),
('A73', 'Cooper Layne', ''),
('A74', 'Aaron Eckhart', 'cast-tc-1.jpg'),
('A75', 'Hilary Swank', 'cast-tc-2.jpg'),
('A76', 'DJ Qualls', 'cast-tc-3.jpg'),
('A77', 'Stanley Tucci', 'cast-tc-4.jpg'),
('A78', 'Tchéky Karyo', 'cast-tc-5.jpg'),
('A79', 'Bruce Greenwood', 'cast-tc-6.jpg'),
('A80', 'Delroy Lindo', 'cast-tc-7.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `roleid` int(100) NOT NULL,
  `rolename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`roleid`, `rolename`) VALUES
(1, 'director'),
(2, 'writter'),
(3, 'star');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `film`
--
ALTER TABLE `film`
  ADD PRIMARY KEY (`filmID`);

--
-- Indexes for table `film_person`
--
ALTER TABLE `film_person`
  ADD KEY `fk_film_id` (`filmID`),
  ADD KEY `fk_actor_id` (`actorID`),
  ADD KEY `fk_r` (`roleid`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`newsID`);

--
-- Indexes for table `person`
--
ALTER TABLE `person`
  ADD PRIMARY KEY (`actorID`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`roleid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `newsID` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `roleid` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `film_person`
--
ALTER TABLE `film_person`
  ADD CONSTRAINT `fk_actor_id` FOREIGN KEY (`actorID`) REFERENCES `person` (`actorID`),
  ADD CONSTRAINT `fk_film` FOREIGN KEY (`filmID`) REFERENCES `film` (`filmID`),
  ADD CONSTRAINT `fk_film_id` FOREIGN KEY (`filmID`) REFERENCES `film` (`filmID`),
  ADD CONSTRAINT `fk_r` FOREIGN KEY (`roleid`) REFERENCES `role` (`roleid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
