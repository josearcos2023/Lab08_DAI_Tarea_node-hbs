conn = new Mongo();
db = conn.getDB("Lab08");

db.productos.insertMany(
    [
        {codigo: "P001",nombre: 'Lienzo', tipo:"arte", precio:80},
        {codigo: "P002",nombre: 'Estante', tipo:"escritorio", precio:600},
        {codigo: "P003",nombre: 'Set de pintura', tipo:"arte", precio:150}
   ]);

db.empleados.insertMany(
[
    {codigo: "E001",nombre: 'Juan', apellido:"Salas", correo:"jsalas@tecsup.edu.pe",celular:"999888777",estado:"A"},
    {codigo: "E002",nombre: 'Ana', apellido:"Diaz", correo:"adiaz@tecsup.edu.pe",celular:"956956321",estado:"A"},
    {codigo: "E003",nombre: 'Pedro', apellido:"Campo", correo:"pcampo@tecsup.edu.pe",celular:"985232414",estado:"I"}
]);