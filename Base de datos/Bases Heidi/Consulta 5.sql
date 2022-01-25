-- SELECT empresa, numpedido, importe, numclie FROM clientes right JOIN pedidos ON numclie = clie WHERE clie = '2103';

-- SELECT descripcion, precio, fechapedido FROM productos right JOIN pedidos ON idfab = fab and producto = idproducto;

/* Calcula la media de las tarifas, la maxima tarifa, la minima tarifa para los cursos del departamento cis con tarifa > 0 */

-- SELECT AVG(ctarifa) AS media, MAX(ctarifa) AS maximo, MIN(ctarifa) AS minimo FROM curso WHERE cdept = 'CIS' AND ctarifa > 0;

-- SELECT AVG(cuota) AS CuotaMedia, AVG(ventas) AS MediaVentas, AVG(100*(ventas/cuota)) AS Rendimiento FROM repventas;

-- SELECT SUM(cuota) AS SumaCuotas, SUM(ventas) AS SumaVentas, MIN(cuota) AS CuotaMinima, MAX(cuota) AS CuotaMaxima FROM repventas;

-- SELECT COUNT(*) AS numero_vendedores FROM repventas;

-- SELECT COUNT(*) FROM pedidos WHERE importe > 2000;

-- SELECT cdept AS departamento, SUM(cred) AS Creditos_totales FROM curso GROUP BY cdept;

-- SELECT clie AS cliente, SUM(importe) AS Importe_total FROM pedidos GROUP BY clie ORDER BY Importe_total Desc;

-- educaSELECT nombre, SUM(cant) AS Items_totales Into OUTFILE "C:\\XAMPP\\Datos.TXT" FROM repventas INNER JOIN pedidos ON rep=numempl GROUP BY rep; 

