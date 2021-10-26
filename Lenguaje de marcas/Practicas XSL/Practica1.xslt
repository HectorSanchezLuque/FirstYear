<?xml version="1.0" encoding="UTF-8"?><!-- DWXMLSource="Practica1.xml" -->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<xsl:template match="/">
<html> 
<body>
	<h2>Notas de los alumnos</h2>
	<table border="1">
		<tr bgcolor="white">
			<th style="text-align:left">Nombre</th>
			<th style="text-align:left">Asignatura</th>
			<th style="text-align:left">Nota</th>
			<th style="text-align:left">Fecha</th>
		</tr>
		<xsl:for-each select="alumnos/alumno">
		<tr>
			<td><xsl:value-of select="nombre"/></td>
			<td><xsl:value-of select="asignatura"/></td>
			<td><xsl:value-of select="fecha"/></td>
			<td><xsl:value-of select="nota"/></td>
		</tr>
		</xsl:for-each>
	</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
