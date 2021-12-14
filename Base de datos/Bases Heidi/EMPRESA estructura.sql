CREATE DATABASE empresa;
USE empresa;

CREATE TABLE clientes
(Numclie	integer not null,
Empresa		char(20) not null,
Repclie	integer,
Limitecredito	numeric,
PRIMARY KEY (Numclie));

CREATE TABLE repventas
(Numempl	integer not null,
Nombre		char(15) not null,
Edad		integer,
Oficinarep	integer,
Titulo		char(10),
Contrato	date not null,
Director	integer,
Cuota		numeric,
Ventas		numeric not null,
PRIMARY KEY (Numempl),
FOREIGN KEY (Director) REFERENCES repventas (Numempl) ON DELETE SET NULL);

CREATE TABLE oficinas(
oficina		integer not null,
Ciudad		char(15) not null,
Region		char(10) not null,
Dir		integer,
Objetivo	numeric,
Ventas		numeric not null,
PRIMARY KEY (oficina),
FOREIGN KEY (Dir) REFERENCES repventas (Numempl) ON DELETE SET NULL);

CREATE TABLE productos (
Idfab		char(3) not null,
Idproducto	char(5) not null,
Descripcion	char(20) not null,
Precio		numeric not null,
Existencias	integer not null,
PRIMARY KEY (Idfab, Idproducto));

CREATE TABLE pedidos (
Numpedido	integer not null,
Fechapedido	date not null,
Clie		integer not null,
Rep		integer not null,
Fab		char(3) not null,
Producto	char(5) not null,
Cant		integer not null,
Importe		numeric not null,
PRIMARY KEY (Numpedido),
FOREIGN KEY (Clie) REFERENCES clientes (Numclie),
FOREIGN KEY (Rep) REFERENCES repventas (Numempl),
FOREIGN KEY (Fab,producto) REFERENCES productos (idfab, idproducto));

ALTER TABLE clientes
ADD CONSTRAINT c1 FOREIGN KEY (Repclie) REFERENCES repventas (Numempl) ON DELETE SET NULL;

ALTER TABLE repventas
ADD CONSTRAINT r1 FOREIGN KEY (oficinarep) REFERENCES oficinas (Oficina) ON DELETE SET NULL;

































