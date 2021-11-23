<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<body>
	<h2>Reparaciones del Taller</h2>
	
	<table border="1">

  		<tr bgcolor="white">
  			<th style="text-align:left">Matrícula</th>
			<th style="text-align:left">Modelo</th>
			<th style="text-align:left">Marca</th>
			<th style="text-align:left">Importe de Reparación</th>
		</tr>

		<xsl:for-each select="taller/coche">
		<xsl:sort select="importeReparacion"/>
			<tr>
				<td><xsl:value-of select="matricula"/></td>
				<td><xsl:value-of select="modelo"/></td>
				<td><xsl:value-of select="marca"/></td>
				<td><xsl:value-of select="importeReparacion"/></td>
			</tr>
		</xsl:for-each>

	</table>

</body>
</html>
</xsl:template>
</xsl:stylesheet>
