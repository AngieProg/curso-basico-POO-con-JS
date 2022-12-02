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

// CLASE 7: COMPARANDO OBJETOS LITERALES, PROTOTIPOS, PROTOTIPOS CON SINTAXIS DE CLASES E INSTANCIAS DE PROTOTIPOS
//Creando objeto literal
const juanLiteral = {
    name: "JuanDC",
    username: "juandc",
    points: 100,
    //Podemos guardar objetos dentro de objetos como es el caso de socialMedia
    socialMedia : {
        twitter: "fjuandc",
        instaram: "fjuandc",
        facebook: undefined,
    },
    //Guardamos esta lista en un array
    approvedCourses: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
    ],
    //Creamos un array de objetos
    learningPaths: [
        {
            name: "Escuela de desarrollo Web",
            courses: [
                "Curso Definitivo de HTML y CSS",
                "Curso Práctico de HTML y CSS",
                "Curso de Responsive Design"
            ]
        },
        {
            name: "Escuela de Videojuegos",
            courses: [
                "Curso Introducción a la Producción de Videojuegos",
                "Curso de Unreal Engine",
                "Curso de Unioty 3D",
            ]   
        },
    ],
}

//Creando objeto literal
const miguelitoLiteral = {
    name: "Miguelito",
    username: "miguelitofeliz",
    points: 1000,
    //Podemos guardar objetos dentro de objetos como es el caso de socialMedia
    socialMedia : {
        twitter: "miguelitofeliz",
        instaram: "miguelito_feliz",
        facebook: undefined,
    },
    //Guardamos esta lista en un array
    approvedCourses: [
        "Curso DataBusiness",
        "Curso DataViz",
    ],
    //Creamos un array de objetos
    learningPaths: [
        {
            name: "Escuela de desarrollo Web",
            courses: [
                "Curso Definitivo de HTML y CSS",
                "Curso Práctico de HTML y CSS",
                "Curso de Responsive Design"
            ]
        },
        {
            name: "Escuela de DataScience",
            courses: [
                "Curso DataBusiness",
                "Curso DataViz",
                "Curso Tableau",
            ]   
        },
    ],
}

class StudentClass {
    constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
}){
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
        twitter:twitter,
        //twitter  -> JS nos permite este tipo de sintaxis para abreviar la de arriba
        instagram,
        facebook,
    };
    this.approvedCourses =approvedCourses;
    this.learningPaths = learningPaths;
    }
}

const JuanProto = new StudentClass({
    name: "Juan DC",
    username: "juandc",
    email: "juanito@gmail.com",
    twitter: "fjuandc",
    learningPaths: [
        escuelaWeb,
        escuelaVgs,
    ]
});

const MiguelitoProto = new StudentClass({
    name: "Miguelito",
    username: "miguelito_felix",
    email: "miguelito@gmail.com",
    instagram: "miguelitofeliz",
    learningPaths: [
        escuelaWeb,
        escuelaDataScience,
    ]
});

class LearningPath {
    constructor({
        name,
        courses = [],
    }){
        this.name = name;
        this.courses = courses;
        }
}

const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses:[
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
        "Curso de Responsive Design",
    ]
});
const escuelaDataScience = new LearningPath({
    name: "Escuela de Data Science",
    courses:[
        "Curso DataBusiness",
        "Curso DataViz",
        "Curso Tableau",
    ]
});
const escuelaVgs = new LearningPath({
    name: "Escuela de Videojuegos",
    courses:[
        "Curso Introducción a la Producción de Videojuegos",
        "Curso de Unreal Engine",
        "Curso de Unioty 3D",
    ]
});