//Creando un objeto literal

const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso definitivo de HTML y CSS",
        "Curso practico de HTML y CSS",
    ],

    /* Forma 1 para crear métodos
    aprobarCurso: function () {
    }*/

    //Forma 2 para crear métodos

    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
    
};

//Hacer que Natalia apruebe otro curso
// natalia.cursosAprobados.push("Curso de responsive design");

//Creando un prototipo 
function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    //Forma 1 de guardar un método
    /*this.aprobarCurso = function(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    }*/
}

//Forma 2 de guardar un método
Student.prototype.aprobarCurso = function(nuevoCursito){
    this.cursosAprobados.push(nuevoCursito);
}

const juanita = new Student(
    "Juanita Alejandra", 
    15,
    [
        "Curso de Introduccion a la producción de videojuegos",
        "Curso de creación de personajes",
    ],
);  

//Prototipos con la sintaxis de clases  
class Student2 {
    /*constructor(name, age, cursosAprobados){
        
    }*/

    constructor({
        name,
        age,
        cursosAprobados = [],
        email,
    }){
        this.name = name;
        this.email = email;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    }
}

/*const miguelito = new Student2(
    "Miguel",
    28,
    [
        "Curso Análisis de Negocios para Ciencias de Datos",
        "Cursos de Principios de Visualización de Datos para BI",
    ], 
);*/

const miguelita = new Student2({
    email: "miguelita@gmail.com",
    age: 23,
    name: "Miguelita",
});






