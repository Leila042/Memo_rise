USE memo_rise;

-- Insertion d'utilisateurs de test
INSERT IGNORE INTO users (username, email, password_hash, role) VALUES 
('admin', 'admin@example.com', 'securehash', 'admin'),
('user1', 'user1@example.com', 'securehash', 'user');

-- Insertion de livres de test
INSERT INTO books (title, author, price, isbn, stock_quantity, description, thumbnail_url) VALUES 
('Learning SQL', 'Alan Beaulieu', 29.99, '9780596520830', 10, 'An introduction to SQL with practical examples and exercises.', 'url_to_thumbnail1'),
('Effective Java', 'Joshua Bloch', 45.50, '9780134685991', 5, 'A comprehensive guide to best practices in Java programming.', 'url_to_thumbnail2');

-- Insertion de commandes de test
INSERT INTO orders (user_id, total_price, status) VALUES 
(1, 75.49, 'completed');

-- Insertion de détails de commande de test
INSERT INTO order_details (order_id, book_id, quantity, price) VALUES 
(1, 1, 1, 29.99),
(1, 2, 1, 45.50);

-- Insertion d'avis de test
INSERT INTO reviews (book_id, user_id, rating, comment) VALUES 
(1, 2, 5, 'Very informative and easy to understand.'),
(2, 1, 4, 'Great for advanced Java developers.');
