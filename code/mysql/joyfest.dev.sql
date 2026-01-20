-- les commandes sql sont en capitales pour les différencier des autres commandes
-- supprimer la base de données si elle existe
-- ATTENTION, ne pas faire en production
DROP DATABASE IF EXISTS joyfest_dev;

-- créer la base de données 
CREATE DATABASE joyfest_dev;

-- créer les tables

-- ROLE
CREATE TABLE joyfest_dev.role(
    id TINYINT(1) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(15) NOT NULL UNIQUE
);

-- USER

CREATE TABLE joyfest_dev.user(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(150) NOT NULL,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    adress VARCHAR(150) NOT NULL,
    role_id TINYINT(1) UNSIGNED NOT NULL,
    FOREIGN KEY (role_id) REFERENCES joyfest_dev.role(id), 
    INDEX(email)
);

-- NEWSLETTER
CREATE TABLE joyfest_dev.newsletter(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

-- PROGRAMMATION
CREATE TABLE joyfest_dev.programmation(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    hours TIME NOT NULL UNIQUE,
    date DATE NOT NULL 
);

-- ARTISTS
CREATE TABLE joyfest_dev.artist(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    bio TEXT NOT NULL,
    image VARCHAR(150) NOT NULL,
    video VARCHAR(150) NOT NULL
);

--TICKET
CREATE TABLE joyfest_dev.ticket(
    id TINYINT(1)  UNSIGNED AUTO_INCREMENT,
    name VARCHAR(15) NOT NULL UNIQUE,
    price DECIMAL(5,2) NOT NULL 
);

-- TABLES DE JOINTURES : 
-- programmation_artist
CREATE TABLE joyfest_dev.programmation_artist(
    programmation_id SMALLINT UNSIGNED NOT NULL,
    artist_id SMALLINT UNSIGNED NOT NULL,
    FOREIGN KEY (programmation_id) REFERENCES joyfest_dev.programmation(id),
    FOREIGN KEY (artist_id) REFERENCES joyfest_dev.artist(id),
    PRIMARY KEY (programmation_id, artist_id)
);

-- user_ticket
CREATE TABLE joyfest_dev.user_ticket(
    user_id SMALLINT UNSIGNED NOT NULL,
    ticket_id SMALLINT UNSIGNED NOT NULL,
    FOREIGN KEY (user_id) REFERENCES joyfest_dev.user(id),
    FOREIGN KEY (ticket_id) REFERENCES joyfest_dev.ticket(id),
    PRIMARY KEY (user_id, ticket_id)
);
-- -----------------------------------------------------------------------------------------------------------------
-- INSERTION DE DONNEES

INSERT INTO joyfest_dev.artist (name, bio, image, video) VALUES
(
    'Sunrise Echo',
    'Groupe indie pop français mêlant synthés et guitares aériennes. Sunrise Echo est connu pour ses concerts énergiques et ses refrains fédérateurs.',
    'sunrise_echo.jpg',
    'https://www.youtube.com/watch?v=sunrise_echo_live'
),
(
    'DJ Luna',
    'DJ électro originaire de Berlin, DJ Luna propose des sets deep house et techno mélodique, parfaits pour les fins de soirée.',
    'dj_luna.jpg',
    'https://www.youtube.com/watch?v=dj_luna_set'
),
(
    'The Joy Riders',
    'The Joy Riders est un groupe de rock alternatif qui puise ses influences dans les années 90 avec une touche moderne.',
    'the_joy_riders.jpg',
    'https://www.youtube.com/watch?v=joy_riders_clip'
),
(
    'Maya Bloom',
    'Chanteuse folk-pop à la voix douce et puissante, Maya Bloom séduit par des textes intimistes et des mélodies lumineuses.',
    'maya_bloom.jpg',
    'https://www.youtube.com/watch?v=maya_bloom_live'
),
(
    'Bassline Factory',
    'Collectif électro-funk connu pour ses basses lourdes et son groove irrésistible, Bassline Factory transforme chaque scène en dancefloor.',
    'bassline_factory.jpg',
    'https://www.youtube.com/watch?v=bassline_factory_show'
);

INSERT INTO joyfest_dev.programmation (hours, date) VALUES
('18:00:00', '2026-07-10'),
('20:00:00', '2026-07-10'),
('22:00:00', '2026-07-10'),

('17:30:00', '2026-07-11'),
('19:30:00', '2026-07-11'),
('21:30:00', '2026-07-11'),

('16:00:00', '2026-07-12'),
('18:30:00', '2026-07-12'),
('21:00:00', '2026-07-12');


