//DEFINIENDO CLASE COMMMENT
class Comment {
    constructor({
        content,
        studentName,
        studenRole = 'estudiante',
    }){
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studenRole;
        this.likes = 0;
    }

    publicar(){
        console.log (this.studentName + "("+ this.studentRole + ")");
        console.log(this.likes + " likes");
        console.log(this.content);
    }
}
class Student {
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
    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        });
        comment.publicar(); 
    }
}

//CLASES HEREDADAS 
class FreeStudent extends Student {
    constructor (props) {
        super(props);
    }

    approvedCourse(newCourse) {
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        }else{
            console.warn("lo sentimos" + this.name + ", solo puedes tomar cursos abiertos");
        }
    }
}

class BasicStudent extends Student{
    constructor (props) {
        super(props);
    }
    approvedCourse(newCourse) {
        if (newCourse.lang !== "english") {
            this.approvedCourses.push(newCourse);
        }else{
            console.warn("lo sentimos" + this.name + ", no puedes tomar cursos en ingles");
        }
    }
}

class ExpertStudent extends Student{
    constructor (props) {
        super(props);
    }
    approvedCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}

class TeacherStudent  extends Student{
    constructor (props) {
        super(props);
    }
    approvedCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studenRole: "profesor",
        });
        return comment.publicar(); 
    }
}
 
////////////////////////DEFINICIÓN DE LA CLASE INSTRUCTOR
class Instructor{
    constructor({
        name,
        username,
        email,
        yearsOfinstruction,
    }){
        this.name = name;
        this.username = username;
        this.email = email;
        this.yearsOfinstruction = yearsOfinstruction;
    }
}

const freddyVega = new Instructor({
    name: "Freddy Vega",
    username: "Freddier",
    email: "elgranfreddyv@gmail.com",
    yearsOfinstruction: 12,
});

const diegoDGranda = new Instructor({
    name: "Diego De Granda",
    username: "DDGranda",
    email: "DDGranda7898@gmail.com",
    yearsOfinstruction: 6,
});
//////////////////////////////ENCAPSUALMIENTO DE LOS ARCHIVOS VIDEO
function videoPlay(id){
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Se esta produciendo desde la url " + urlSecreta);
}

function videoStop(id){
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Pausamos la url " + urlSecreta);
}


///////////////////////////////DEFICION DE CLASE "CLASE"
class PlatziClass{
    constructor({
        name,
        instructor,
        level,
        videoID,
    }){
        this.name = name;
        this.instructor = instructor;
        this._level = level;
        this.videoID = videoID;
    } 
    get level(){
        return this._level;
    }

    set level(nuevoNombre){
        this._level = nuevoNombre;
    }

    reproducir(){
        videoPlay(this.videoID);
    }

    pausar(){
        videoStop(this.videoID);
    }
};

/*Comandos para verificar que el encapsulamiento fue correcto: 
    introProg
    introProg.level = "Medio"   */

const introProg = new PlatziClass({
    name: "¿Qué es la programación?",
    instructor: freddyVega,
    level: "Basic"
});
const asincroProg = new PlatziClass({
    name: "Asínscronismo en la programación",
    instructor: freddyVega,
    level: "Advanced"
});
const queEsHTML = new PlatziClass({
    name: "¿Qué es HTML",
    instructor: diegoDGranda,
    level: "Basico"
});
const semanticaHTML = new PlatziClass({
    name: "Código semántico",
    instructor: diegoDGranda,
    level: "Advanced"
});
const planteamientoProyecto = new PlatziClass({
    name: "¿Qué vamos a hacer en este curso práctico?",
    instructor: diegoDGranda,
    level: "Basico"
});
const ajusteDeDetalles = new PlatziClass({
    name: "Últimos detalles a nuestro proyecto",
    instructor: diegoDGranda,
    level: "Advanced"
});


//DEFINICIÓN DE LOS CURSOS
class Course {
    constructor({
        name,
        classes = [],
        isFree = false,
        lang = "spanish",
    }){
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name(){
        return this._name;
    }

    set name(nuevoNombrecito){
        if(nuevoNombrecito === "Curso Malito de Programación Básica"){
            console.error("Weeey... no");
        }else{
            this._name = nuevoNombrecito;
        }
    }
}

const cursoProgBasica = new Course({
    name: "Curso grátis de programación básica",
    classes: [introProg, asincroProg],
    isFree: true,
})

//cursoProgBasica.name = "Curso con un nuevo nombre"

/*Que pasa si queremos modificar el nombre: 
    Método1: cursoProgBasica.name = "otroNombre";
    Método2: Agregar un método en la clase:
    changeName(nuevoNombrecito){
        this._name = nuevoNombrecito;
    }
    cursoProgBasica.changeName("Matemáticas");  */

const cursoDefinitivoHTML = new Course({
    name: "Curso definitivo de HTML y CSS",
    classes: [queEsHTML, semanticaHTML]
})
const cursoPracticoHTML = new Course({
    name: "Curso práctico de HTML y CSS",
    classes: [planteamientoProyecto, ajusteDeDetalles],
    lang: "english",
})
const cursoDataViz = new Course({
    name: "Curso DataViz",
    classes: [queEsHTML, ajusteDeDetalles]
})
const cursoTableau = new Course({
    name: "Curso Tableau",
    classes: [introProg, asincroProg],
})

const cursoProdVideo = new Course({
    name: "Curso Introducción a la Producción de Videojuegos",
    classes: [introProg, asincroProg],
})

const cursoUnreal = new Course({
    name: "Curso de Unreal Engine",
    classes: [introProg, asincroProg],
})






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
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
    ]
});
const escuelaDataScience = new LearningPath({
    name: "Escuela de Data Science",
    courses:[
        cursoProgBasica,
        cursoDataViz,
        cursoTableau,
    ]
});
const escuelaVgs = new LearningPath({
    name: "Escuela de Videojuegos",
    courses:[
        cursoProgBasica,
        cursoProdVideo,
        cursoUnreal,
    ]
});

const juan = new FreeStudent({
    name: "Juan DC",
    username: "juandc",
    email: "juanito@gmail.com",
    twitter: "fjuandc",
    learningPaths: [
        escuelaWeb,
        escuelaVgs,
    ]
});

const miguelito = new BasicStudent({
    name: "Miguelito",
    username: "miguelito_felix",
    email: "miguelito@gmail.com",
    instagram: "miguelitofeliz",
    learningPaths: [
        escuelaWeb,
        escuelaDataScience,
    ]
});

const freddy = new TeacherStudent({
    name: "Freddy Vega",
    username: "freddy_vega",
    email: "freddy@gmail.com",
    instagram: "freddyfeliz",
});

/*const skills = ["js", "python", "mongodb"];
const props = {
    name: "Erik Ochoa",
    username: "elyager"
};

const profesor = new TeacherStudent(props, skills);
profesor.publicarComentario('Mi primer comentario');*/