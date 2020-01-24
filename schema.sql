DROP DATABASE IF EXISTS bamazon_db;
-- creates the database
CREATE database bamazon_db;
USE bamazon_db;

-- creates the products table
CREATE TABLE products (

		itemid INTEGER AUTO_INCREMENT NOT NULL,
		productname VARCHAR(45) NULL,
		departmentname VARCHAR(45) NULL,
		price DECIMAL(10,2) NULL,
		stockquantity INT NULL,	
		PRIMARY KEY (itemid)
);

-- These rows will insert data into the Products table
INSERT INTO products (productname, departmentname, price, stockquantity)
VALUES ('NHL 2019', 'Video Games', '49.99', '11');

INSERT INTO products (productname, departmentname, price, stockquantity)
VALUES ('Titans Jersey - Eddie George', 'Apparel', '120.00', '13');

INSERT INTO products (productname, departmentname, price, stockquantity)
VALUES ('How to spot lying politicians', 'Audio Books', '5.99', '200');

INSERT INTO products (productname, departmentname, price, stockquantity)
VALUES ('Ramen Mushroom Flavor 24 pack', 'Food', '8.99', '119');

INSERT INTO products (productname, departmentname, price, stockquantity)
VALUES ('Microwave Oven', 'Appliances', '69.99', '28');


INSERT INTO products (productname, departmentname, price, stockquantity)
VALUES ('Yamaha Acoustic Guitar', 'Music Equipment', '399.00', '17');

INSERT INTO products (productname, departmentname, price, stockquantity)
VALUES ('Purina Dog Food 5lb bag', 'Pet Supplies', '3.99', '56');

INSERT INTO products (productname, departmentname, price, stockquantity)
VALUES ('Lipstick by Shannen', 'Beauty', '1.99', '132');


INSERT INTO products (productname, departmentname, price, stockquantity)
VALUES ('Nashville Predators Hat - Female', 'Apparel', '29.99', '59');

INSERT INTO products (productname, departmentname, price, stockquantity)
VALUES ('100 Watt bulbs 4 pack', 'Home Improvement', '2.99', '62');


