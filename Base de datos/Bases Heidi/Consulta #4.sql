#SELECT p.numpedido, p.importe, c.empresa, c.limitecredito
#educaFROM pedidos p INNER JOIN clientes c ON p.clie = c.Numclie;

#SELECT ciudad, nombre, titulo FROM oficinas INNER JOIN repventas ON oficinas.dir = repventas.Numempl WHERE oficinas.objetivo <600000;

#SELECT numpedido,importe, descripcion FROM productos INNER JOIN pedidos ON productos.Idfab = pedidos.Fab AND pedidos.Producto = productos.Idproducto;

#SELECT numpedido,importe,empresa,nombre FROM pedidos INNER JOIN clientes INNER JOIN repventas ON pedidos.clie = clientes.Numclie AND clientes.Repclie = repventas.Numempl WHERE importe > 25000;

#SELECT numpedido, importe, fechapedido,contrato, nombre FROM pedidos INNER JOIN repventas ON repventas.Contrato = pedidos.Fechapedido;