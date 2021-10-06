//Variables númericas

let salarioBruto = 1200;
let porcenImpuesto = 0.31;

let cantImpuestos, salarioNeto

cantImpuestos = salarioBruto * porcenImpuesto;
salarioNeto = salarioBruto - cantImpuestos;

console.log("Salario Bruto::", salarioBruto, "Porcentaje de impuestos: ", porcenImpuesto * 100, "%", "Importe de impuestos: ", cantImpuestos, "Salario Neto: ", salarioNeto);
