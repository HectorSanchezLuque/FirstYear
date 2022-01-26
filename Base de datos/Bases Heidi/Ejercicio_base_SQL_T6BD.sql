/*Ejemplo 1 BASE DE DATOS DE PRUEBA*/

CREATE DATABASE prueba;
USE prueba;

/*Ejemplo CREACION DE TABLAS CON RESTRICCIONES DE INTEGRIDAD*/
CREATE TABLE dept /*departamentos*/
(
deptno NUMERIC(2),
dname CHAR(14),
loc CHAR(13),
CONSTRAINT pk_dept PRIMARY KEY (deptno)
);

CREATE TABLE emp  /*empleados*/
(
empno NUMERIC(4),
ename CHAR(10),
job CHAR(9),
mgr NUMERIC(4),
hiredate DATETIME,
sal NUMERIC(7,2),
comn NUMERIC(7),
deptno NUMERIC(2),
CONSTRAINT pk_emp PRIMARY KEY(empno),
CONSTRAINT fk_deptno FOREIGN KEY(deptno) REFERENCES dept(deptno)
);

CREATE TABLE bonus  /*bonificaciones*/
(
ename CHAR(10),
job CHAR(9),
sal NUMERIC,
comm NUMERIC

);
CREATE TABLE salgrade  /*nivel salarial*/
(
grade NUMERIC,
losal NUMERIC, 
hisal NUMERIC
);

/*Ejemplo CREACION DE TABLAS CON MAS RESTRICCIONES DE INTEGRIDAD usando CHECK que forma parte del SQL stándard pero que MySQL aunque lo interpreta sin causar ningún error lo ignora. La opción que nos quedaría es:
 1)validarlo desde el lenguaje de programación y por tanto no está integrado en la base de datos así que si usamos otro software nada nos limitará saltarnos esa restricción. 
 2)usar triggers y así lo tendremos integrado en la base de datos que es un gran punto a favor.*/

CREATE TABLE employees  
(
employee_id NUMERIC(6),
first_name  CHAR(20),
last_name CHAR(25) NOT NULL,
email CHAR(25) NOT NULL,
phone_number CHAR(20),
hire_date TIMESTAMP NOT NULL DEFAULT NOW(),
job_id CHAR(10) NOT NULL,
salary NUMERIC(8) NOT NULL,
comission_pct NUMERIC(2),
department_id NUMERIC(2),
dn CHAR(30),
CONSTRAINT emp_salary_min CHECK (salary>0),/*lo ignora MySQL */
CONSTRAINT emp_email_uk UNIQUE (email)  

);

