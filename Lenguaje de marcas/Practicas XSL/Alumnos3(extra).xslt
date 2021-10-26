<?xml version="1.0" encoding="UTF-8"?><!-- DWXMLSource="Practica2.xml" -->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<xsl:template match="/">
<html> 
<body>
  <h2>Alumnos del colegio</h2>
  <table border="1">
  	<tr bgcolor="white">
		<th style="text-align:left">Nombre</th>
		<th style="text-align:left">Población</th>
		<th style="text-align:left">Teléfono</th>
		<th style="text-align:left">Fecha de nacimiento</th>
	</tr>
	<xsl:for-each select="colegio/alumno">
	<xsl:sort select="nombre"/>
	<xsl:sort select="poblacion"/>
		<tr>
			<td><xsl:value-of select="nombre"/></td>
			<td><xsl:value-of select="poblacion"/></td>
			<td><xsl:value-of select="telf"/></td>
			<td><xsl:value-of select="fechaNacimiento"/></td>
		</tr>
	</xsl:for-each>
	</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>