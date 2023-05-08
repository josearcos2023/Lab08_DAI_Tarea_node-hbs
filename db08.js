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


db.usuarios.insertMany(
    [
        {nombre: 'Jaime', apellido: 'Farfan', email: 'jfarfan@abc.com', estado:'A', created_at: new Date('01/23/2020')},
        {nombre: 'Juan', apellido:"Salas", email:"jsalas@tecsup.edu.pe", estado:"A", created_at: new Date('12/04/2021')},
        {nombre: 'Ana', apellido:"Diaz", email:"adiaz@tecsup.edu.pe", estado:"A", created_at: new Date('08/20/2021')},
        {nombre: 'Pedro', apellido:"Campo", email:"pcampo@tecsup.edu.pe", estado:"I", created_at: new Date('01/15/2020')}
    ])
