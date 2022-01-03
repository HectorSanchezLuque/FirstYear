CREATE DATABASE empleados CHARACTER SET utf8;
SET storage_engine=INNODB;
USE empleados;

CREATE TABLE vivienda
(Alojamiento		char(15) not null PRIMARY KEY,
Nombrecompleto		char(40),
Responsable		char(25),
Direccion		char(30)
);
CREATE TABLE oficio
(Oficio			char(25),
Descripcion		char(30),
CONSTRAINT oficio_Oficio_ PRIMARY KEY (oficio));

CREATE TABLE empleado
(Nombre			char(25) not null PRIMARY KEY,
Edad			numeric,
Alojamiento		char(15) not null,
CONSTRAINT Empleado_Alojamiento FOREIGN KEY (Alojamiento) REFERENCES vivienda(alojamiento));

CREATE TABLE oficioempleado
(Nombre char(25) not null,
Oficio char(25) not null,
calificacion 	char(15),
CONSTRAINT oficioempleado_Nombre PRIMARY KEY (Nombre,Oficio),
CONSTRAINT Empleado_Oficio FOREIGN KEY (oficio) REFERENCES oficio(oficio),
CONSTRAINT Empleado_Oficio_empleado FOREIGN KEY (Nombre) REFERENCES empleado(Nombre));

