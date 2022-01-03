
-- SELECT nombre, edad FROM empleado ORDER BY edad ASC;

-- SELECT DISTINCT alojamiento FROM empleado;

-- SELECT nombre,edad,alojamiento FROM empleado GROUP BY alojamiento;

-- SELECT * FROM curso WHERE ctarifa>"racionalismo"

-- SELECT * FROM oficinas WHERE ventas>objetivo;

-- SELECT nombre,ventas,cuota FROM repventas WHERE numempl=105;

-- SELECT ciudad, region, ventas FROM oficinas ORDER BY region, ciudad;

-- SELECT ciudad,region,objetivo-ventas AS restante FROM oficinas ORDER BY 3; 

-- SELECT descripcion, precio * existencias AS total FROM productos WHERE precio * existencias > 15000 ORDER BY 2 DESC;

-- SELECT nombre,cuota,cuota*1.05 AS nueva_cuota FROM repventas;

-- SELECT nombre FROM repventas WHERE contrato < "1988-01-01";

-- SELECT nombre FROM repventas WHERE contrato>"1988-1-1" && contrato <"1988-12-31";
-- SELECT nombre FROM repventas WHERE contrato BETWEEN '1988-1-1' AND '1988-12-31';

-- SELECT cnombre, cdescp FROM curso WHERE ctarifa IN (50,100,200);

-- SELECT cnombre, cdescp FROM curso WHERE cdescp LIKE "para %";
-- SELECT cnombre, cdescp FROM curso WHERE cdescp NOT LIKE "para %";

-- EJ 7
#SELECT * FROM curso WHERE cnombre LIKE "introd%";

-- EJ 8
#SELECT * FROM curso WHERE cnombre LIKE "%sc%";

-- EJ 9
#SELECT * FROM curso WHERE cnombre NOT LIKE "_A%_" AND cnombre NOT LIKE "_E%_" AND cnombre NOT LIKE  "_I%_" AND cnombre NOT LIKE  "_O%_" AND cnombre NOT LIKE "_U%_";

-- EJ 10
#SELECT cnombre, ctarifa+25 as tarifaFinal FROM curso WHERE cdept LIKE "cis";

-- SELECT esueldo sueldos FROM personal UNION #ALL# SELECT fsueldo FROM claustro;

-- SELECT idfab, idproducto FROM productos WHERE precio >2000 UNION select DISTINCT fab, producto FROM PEDIDOS where IMPORTE >3000;