##INNER join: 

SELECT * FROM `users` as u INNER join products as p INNER join orders as o WHERE o.user_id=u.id and o.product_id=p.id;

SELECT u.name, u.email, p.name, p.price, o.quantity,o.order_date FROM `users` as u INNER join products as p INNER join orders as o WHERE o.user_id=u.id and o.product_id=p.id;

SELECT CONCAT(u.name, ' ',u.age ) as Full_name, u.email, p.name, p.price, o.quantity,o.order_date FROM `users` as u INNER join products as p INNER join orders as o WHERE o.user_id=u.id and o.product_id=p.id;

SELECT CONCAT(u.name, ' ',u.age ) as Full_name, u.email, p.name, p.price, o.quantity,o.order_date, (o.quantity * p.price) as Total FROM `users` as u INNER join products as p INNER join orders as o WHERE o.user_id=u.id and o.product_id=p.id;

SELECT CONCAT(u.name, ' ',u.age ) as Full_name, u.email, p.name, p.price, o.quantity, DATE_FORMAT(o.order_date, '%W %e %M %Y') AS Date, (o.quantity * p.price) as Total FROM `users` as u INNER join products as p INNER join orders as o WHERE o.user_id=u.id and o.product_id=p.id;

##Add

insert into users ( `name`, `email`, `age`, `city`, `surname`) VALUES ('Arka', 'abc@d.com', '27', 'kolkata','De');

##Left Join

SELECT u.name, o.order_date, p.name FROM `users` as u LEFT JOIN orders as o on u.id=o.user_id LEFT JOIN products as p ON o.product_id=p.id;

##Group by

select city, COUNT(name) FROM users group BY city;

##HAVING, is NOT null

select city, COUNT(name) as Total_User FROM users WHERE city is NOT null group BY city HAVING Total_User>1;

##Like

$$ Starts with a

SELECT * FROM `users` WHERE name LIKE 'A%';

$$ Ends with a

SELECT * FROM `users` WHERE name LIKE '%A';

$$ Match with Arka

SELECT * FROM `users` WHERE name LIKE 'Arka';

$$ containing ka
SELECT * FROM `users` WHERE name LIKE '%ka%';

$$ Ends with a and name length 4
SELECT * FROM `users` WHERE name LIKE '___a';
$$ containing  a at 4th position
SELECT * FROM `users` WHERE name LIKE '___a%';

$$Finds any values that start with "a" and are at least 2 characters in length
SELECT * FROM `users` WHERE name LIKE 'a_%';
$$Finds any values that 2nd letter with "a" and are at least 3 characters in length
SELECT * FROM `users` WHERE name LIKE '_a_%';
$$Finds any values that start with "a" and ends with "a"
SELECT * FROM `users` WHERE name LIKE 'a%a';

##In

SELECT * FROM users WHERE city IN ('Delhi', 'Kolkata','Mumbai');

##Min
SELECT * FROM users where age=(select MIN(age) from users);


ALTER TABLE `users` ADD `status` BOOLEAN NOT NULL DEFAULT TRUE AFTER `surname`;

## Duplicate key in Insert
INSERT INTO `users`( `name`, `email`, `age`, `city`, `surname`, `status`) VALUES('Meera','meera@mail.com',20,'kolkata','xyz',1)
on Duplicate KEY UPDATE status = 1, age=20, city='kolkata', surname='xyz'

SELECT * FROM `products` where price >2000;

SELECT * FROM `orders` WHERE order_date >=CURRENT_DATE -INTERVAL 30 DAY;

SELECT CONCAT_WS(' ', u.name, u.surname) AS full_name, o.*,p.* FROM `orders` as `o` INNER JOIN users AS `u` on o.user_id= u.id INNER JOIN products AS `p` on o.product_id=p.id;