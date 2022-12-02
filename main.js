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