## Héctor Sánchez Luque (16/12/2021)

#Ejercicio 1

SELECT * FROM curso WHERE cdept NOT LIKE "CIS" OR ctarifa = 0 AND cred = 3;

#Ejercicio 2

SELECT * FROM curso WHERE cdept LIKE "THEO" AND cred = 3 AND ctarifa >=50 AND ctarifa <300
 OR cdept LIKE "CIS" AND cred = 3 AND ctarifa >=50 AND ctarifa <300 ORDER BY cnombre;

#Ejercicio 3

SELECT cnombre,ctarifa,cred, ctarifa/cred AS RelacionTC, ctarifa+25/cred AS RelacionTC25 FROM curso WHERE cdept LIKE "CIS";

#Ejercicio 5.1

SELECT Distinct cdept FROM curso;

#Ejercicio 5.2

SELECT DISTINCT cdept,cred FROM curso WHERE ctarifa <100;

#Ejercicio 5.3

SELECT cdept, cnombre FROM curso ORDER BY cdept AND cnombre;

#Ejercicio 6

SELECT * FROM curso WHERE cdept LIKE "PHIL" AND cred = 3 AND ctarifa >= 0 AND ctarifa <=100;

