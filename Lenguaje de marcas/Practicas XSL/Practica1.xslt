<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<body>
	<h2>Notas de los alumnos</h2>
	<table border="1">
		<tr bgcolor="black">
			<th style="text-align:left">Nombre</th>
			<th style="text-align:left">Asignatura</th>
			<th style="text-align:left">Nota</th>
			<th style="text-align:left">Fecha</th>
		</tr>
		<xsl:for-each select="alumnos/alumno">
		<tr>
			<td><xsl:value-of select="alumnos/alumno/nombre"/></td>
			<td><xsl:value-of select="alumnos/alumno/asignatura"/></td>
			<td><xsl:value-of select="alumnos/alumno/fecha"/></td>
			<td><xsl:value-of select="alumnos/alumno/nota"/></td>
		</tr>
		</xsl:for-each>
	</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
