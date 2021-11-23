CREATE database CLIENTES_T1 CHARACTER SET latin1 COLLATE latin1_spanish_ci ;
USE CLIENTES_T1 ;

/*-- -----------------------------------------------------
-- Table CLIENTES
-- ----------------------------------------------------- */

CREATE TABLE clientes (
  idCLIENTES INT NOT NULL ,
  Nacimiento DATE NOT NULL ,
  Pais VARCHAR(45) NULL ,
  CompraAnterior FLOAT NULL ,
  Ganancias FLOAT NULL ,
  Apellido VARCHAR(45) NULL ,
  NombreEmpresa VARCHAR(45) NULL ,
  PRIMARY KEY (idCLIENTES)) ;


INSERT INTO clientes VALUES (1, "1969-02-17", 'España', '60000', '90000', 'Giménez', 'Soft Ingenieros');
INSERT INTO clientes VALUES (2, "1967-04-12", 'Inglaterra', '62500', '93000', 'Pérez', 'Software interprise');
INSERT INTO clientes VALUES (3, "1972-04-12", 'Hungría', '32500', '193000', 'Liza', 'Pertor interprise');