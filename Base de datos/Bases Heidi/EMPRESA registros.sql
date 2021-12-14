

INSERT INTO clientes (Numclie, Empresa, Limitecredito) VALUES (2101, 'Jones Mfg.', 65000);
INSERT INTO clientes (Numclie, Empresa, Limitecredito) VALUES (2102, 'Firsts. Corp.', 65000);
INSERT INTO clientes (Numclie, Empresa, Limitecredito) VALUES (2103, 'Acme Mfg.',  50000);
INSERT INTO clientes (Numclie, Empresa, Limitecredito) VALUES (2105, 'AAA Investments', 45000);
INSERT INTO clientes (Numclie, Empresa, Limitecredito) VALUES (2106, 'Fred Lewis Corp.',65000 );
INSERT INTO clientes (Numclie, Empresa, Limitecredito) VALUES (2108, 'Holm Landis',  55000);
INSERT INTO clientes (Numclie, Empresa, Limitecredito) VALUES (2109, 'Chen Associates', 25000);
INSERT INTO clientes (Numclie, Empresa, Limitecredito) VALUES (2111, 'JCP Inc.', 50000);
INSERT INTO clientes (Numclie, Empresa, Limitecredito) VALUES (2112, 'Zetacorp', 50000);
INSERT INTO clientes (Numclie, Empresa, Limitecredito) VALUES (2113, 'Ian Schmidt', 20000);
INSERT INTO clientes (Numclie, Empresa, Limitecredito) VALUES (2115, 'Smithson Corp.',  20000);
INSERT INTO clientes (Numclie, Empresa, Limitecredito) VALUES (2117, 'J.P. Sinclair', 35000);
INSERT INTO clientes (Numclie, Empresa, Limitecredito) VALUES (2118, 'Midwest Systems', 60000);
INSERT INTO clientes (Numclie, Empresa, Limitecredito) VALUES (2119, 'Solomon Inc.',  25000);
INSERT INTO clientes (Numclie, Empresa, Limitecredito) VALUES (2120, 'Rico Enterprises', 50000);
INSERT INTO clientes (Numclie, Empresa, Limitecredito) VALUES (2121, 'QMA Assoc.', 45000);
INSERT INTO clientes (Numclie, Empresa, Limitecredito) VALUES (2122, 'Three-Way Lines', 30000);
INSERT INTO clientes (Numclie, Empresa, Limitecredito) VALUES (2123, 'Carter Sons',  40000);
INSERT INTO clientes (Numclie, Empresa, Limitecredito) VALUES (2124, 'Peter Brothers', 40000);

INSERT INTO repventas (Numempl, Nombre, Edad, Titulo, Contrato, Cuota, Ventas) VALUES (101, 'Dan Roberts', 45, 'Rep Ventas', "1986-10-20", 30000, 305673);
INSERT INTO repventas (Numempl, Nombre, Edad, Titulo, Contrato, Cuota, Ventas) VALUES (102, 'Sue Smith', 48, 'Rep Ventas', "1986-12-12",  35000, 474050);
INSERT INTO repventas (Numempl, Nombre, Edad, Titulo, Contrato, Cuota, Ventas) VALUES (103, 'Paul Cruz', 29, 'Rep Ventas', "1987-03-01",  27500, 286775);
INSERT INTO repventas (Numempl, Nombre, Edad, Titulo, Contrato, Cuota, Ventas) VALUES (104, 'Bob Smith', 33, 'Dir Ventas', "1987-05-19",  20000, 142594);
INSERT INTO repventas (Numempl, Nombre, Edad, Titulo, Contrato, Cuota, Ventas) VALUES (105, 'Bill Adamns',37, 'Rep Ventas', "1988-02-12",  35000, 367911);
INSERT INTO repventas (Numempl, Nombre, Edad, Titulo, Contrato, Cuota, Ventas) VALUES (107, 'Nancy Angelli', 49, 'Rep Ventas', "1988-11-14", 30000, 186042);
INSERT INTO repventas (Numempl, Nombre, Edad, Titulo, Contrato, Cuota, Ventas) VALUES (108, 'Larry Fitch', 62, 'Dir Ventas', "1989-10-12", 35000, 361865);
INSERT INTO repventas (Numempl, Nombre, Edad, Titulo, Contrato, Cuota, Ventas) VALUES (109, 'Mary Jones', 31, 'Rep Ventas', "1999-10-12",  30000, 392725);

UPDATE repventas SET Director = 104 WHERE Numempl = 101;
UPDATE repventas SET Director = 108 WHERE Numempl = 102;
UPDATE repventas SET Director = 104 WHERE Numempl = 103;
UPDATE repventas SET Director = 107 WHERE Numempl = 104;
UPDATE repventas SET Director = 104 WHERE Numempl = 105;
UPDATE repventas SET Director = 108 WHERE Numempl = 107;
UPDATE repventas SET Director = 107 WHERE Numempl = 108;
UPDATE repventas SET Director = 107 WHERE Numempl = 109;

UPDATE clientes SET repclie = 107 WHERE Numclie = 2101;
UPDATE clientes SET repclie = 101 WHERE Numclie = 2102;
UPDATE clientes SET repclie = 105 WHERE Numclie = 2103;
UPDATE clientes SET repclie = 101 WHERE Numclie = 2105;
UPDATE clientes SET repclie = 102 WHERE Numclie = 2106;
UPDATE clientes SET repclie = 109 WHERE Numclie = 2108;
UPDATE clientes SET repclie = 103 WHERE Numclie = 2109;
UPDATE clientes SET repclie = 103 WHERE Numclie = 2111;
UPDATE clientes SET repclie = 108 WHERE Numclie = 2112;
UPDATE clientes SET repclie = 104 WHERE Numclie = 2113;
UPDATE clientes SET repclie = 101 WHERE Numclie = 2115;
UPDATE clientes SET repclie = 107 WHERE Numclie = 2117;
UPDATE clientes SET repclie = 108 WHERE Numclie = 2118;
UPDATE clientes SET repclie = 109 WHERE Numclie = 2119;
UPDATE clientes SET repclie = 102 WHERE Numclie = 2120;
UPDATE clientes SET repclie = 103 WHERE Numclie = 2121;
UPDATE clientes SET repclie = 105 WHERE Numclie = 2122;
UPDATE clientes SET repclie = 102 WHERE Numclie = 2123;
UPDATE clientes SET repclie = 107 WHERE Numclie = 2124;


INSERT INTO oficinas VALUES (12, 'Chicago', 'Este', 104, 800000, 735042);
INSERT INTO oficinas VALUES (13, 'Atlanta', 'Este', 105, 350000, 367911);
INSERT INTO oficinas VALUES (21, 'Los Angeles', 'Oeste', 108, 725000, 835915);
INSERT INTO oficinas VALUES (22, 'Denver', 'Oeste', 108, 300000, 186042);


UPDATE repventas SET Oficinarep = 12 WHERE Numempl = 101;
UPDATE repventas SET Oficinarep= 21 WHERE Numempl = 102;
UPDATE repventas SET Oficinarep= 12 WHERE Numempl = 103;
UPDATE repventas SET Oficinarep = 12 WHERE Numempl = 104;
UPDATE repventas SET Oficinarep = 13 WHERE Numempl = 105;
UPDATE repventas SET Oficinarep= 22 WHERE Numempl = 107;
UPDATE repventas SET Oficinarep= 21 WHERE Numempl = 108;
UPDATE repventas SET Oficinarep= 21 WHERE Numempl = 109;


INSERT INTO productos VALUES ('ACI', '41001', 'Articulo Tipo 1', 55, 277);
INSERT INTO productos VALUES ('ACI', '41002', 'Articulo Tipo 2', 76, 167);
INSERT INTO productos VALUES ('ACI', '41003', 'Articulo Tipo 3', 107, 207);
INSERT INTO productos VALUES ('ACI', '41004', 'Articulo Tipo 4', 117, 139);
INSERT INTO productos VALUES ('ACI', '4100X', 'Ajustador', 25, 37);
INSERT INTO productos VALUES ('ACI', '4100Y', 'Extractor', 2750, 25);
INSERT INTO productos VALUES ('ACI', '4100Z', 'Montador', 2500, 28);
INSERT INTO productos VALUES ('BIC', '41003', 'Manivela', 652, 3);
INSERT INTO productos VALUES ('BIC', '41089', 'Retn', 225, 78);
INSERT INTO productos VALUES ('BIC', '41672', 'Plate', 180, 0);
INSERT INTO productos VALUES ('FEA', '112', 'Cubierta', 148, 115);
INSERT INTO productos VALUES ('FEA', '114', 'Bancada Motor', 243, 15);
INSERT INTO productos VALUES ('IMM', '773C', 'Riostra 1/2 Tm', 975, 28);
INSERT INTO productos VALUES ('IMM', '775C', 'Riostra 1-Tm', 1425, 5);
INSERT INTO productos VALUES ('IMM', '779C', 'Riostra 2-Tm', 1875, 9);
INSERT INTO productos VALUES ('IMM', '878H', 'Soporte Riostra', 54, 223);
INSERT INTO productos VALUES ('IMM', '887P', 'Perno Riostra', 250, 24);
INSERT INTO productos VALUES ('IMM', '887X', 'Retenedor Riostra', 475, 32);
INSERT INTO productos VALUES ('QSA', 'XK47', 'Reductor', 355, 38);
INSERT INTO productos VALUES ('QSA', 'XK48', 'Reductor', 134, 203);
INSERT INTO productos VALUES ('QSA', 'XK48A', 'Reductor', 117, 37);
INSERT INTO productos VALUES ('REI', '2A44G', 'Pasador Bisagra', 350, 14);
INSERT INTO productos VALUES ('REI', '2A44L', 'Bisagra Izqda.',4500, 12);
INSERT INTO productos VALUES ('REI', '2A44R', 'Bisagra Dcha.', 4500, 12);
INSERT INTO productos VALUES ('REI', '2A45C', 'V Stago Trinquete', 79, 210);


INSERT INTO pedidos VALUES (112963, '1989-12-17', 2103, 105, 'ACI', '41004', 28, 3276);
INSERT INTO pedidos VALUES (112968, '1989-10-12', 2102, 101, 'ACI', '41004', 34, 3978);
INSERT INTO pedidos VALUES (112975, '1989-10-12', 2111, 103, 'REI', '2A44G',6, 2100);
INSERT INTO pedidos VALUES (112979, '1989-10-12', 2118, 102, 'ACI', '4100Z',6, 15000);
INSERT INTO pedidos VALUES (112983, '1989-12-27', 2103, 105, 'ACI', '41004',6, 702);
INSERT INTO pedidos VALUES (112987, '1989-12-31', 2103, 105, 'ACI', '4100Y',11, 27500);
INSERT INTO pedidos VALUES (112992, '1989-11-04', 2118, 108, 'ACI', '41002',10, 760);
INSERT INTO pedidos VALUES (112993, '1989-01-04', 2106, 102, 'REI', '2A45C',24, 1896);
INSERT INTO pedidos VALUES (112997, '1990-01-08', 2124, 107, 'BIC','41003', 1, 652);
INSERT INTO pedidos VALUES (113003, '1990-01-25', 2108, 109, 'IMM', '779C',3, 5625);
INSERT INTO pedidos VALUES (113007, '1990-01-08', 2112, 108, 'IMM','773C', 3, 2925);
INSERT INTO pedidos VALUES (113012, '1990-01-11', 2111, 105, 'ACI', '41003',35, 3745);
INSERT INTO pedidos VALUES (113013, '1990-01-14', 2118, 108, 'BIC', '41003',1, 652);
INSERT INTO pedidos VALUES (113024, '1990-01-20', 2118, 108, 'QSA', 'XK47',20, 7100);
INSERT INTO pedidos VALUES (113027, '1990-01-22', 2103, 105, 'ACI', '41002',54, 4104);
INSERT INTO pedidos VALUES (113042, '1990-02-02', 2113, 101, 'REI', '2A44R',5, 22500);
INSERT INTO pedidos VALUES (113045, '1990-02-02', 2112, 108, 'REI', '2A44R',10, 45000);
INSERT INTO pedidos VALUES (113048, '1990-02-10', 2120, 102, 'IMM', '779C',2, 3750);
INSERT INTO pedidos VALUES (113049, '1990-02-10', 2118, 108, 'QSA', 'XK47', 6, 2130);
INSERT INTO pedidos VALUES (113051, '1990-02-10', 2118, 108, 'QSA', 'XK47',4, 1420);
INSERT INTO pedidos VALUES (113055, '1990-02-15', 2108, 101, 'ACI', '4100X',6, 150);
INSERT INTO pedidos VALUES (113057, '1990-02-18', 2111, 103, 'ACI', '4100X',24, 600);
INSERT INTO pedidos VALUES (113058, '1990-02-23', 2108, 109, 'FEA', '112',10, 1480);
INSERT INTO pedidos VALUES (113062, '1990-02-24', 2124, 107, 'FEA', '114', 10, 2430);
INSERT INTO pedidos VALUES (113065, '1990-02-27', 2106, 102, 'QSA', 'XK47',6, 2130);
INSERT INTO pedidos VALUES (113069, '1990-02-02', 2109, 107, 'IMM', '775C',22, 31350);





































