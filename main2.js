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


///////////////////////////////DEFICION DE CLASE "CLASE"
class PlatziClass{
    constructor({
        name,
        instructor,
        level,
    }){
        this.name = name;
        this.instructor = instructor;
        this._level = level;
    } 
    get level(){
        return this._level;
    }

    set level(nuevoNombre){
        this._level = nuevoNombre;
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
    }){
        this._name = name;
        this.classes = classes;
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
    classes: [planteamientoProyecto, ajusteDeDetalles]
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

const Juan = new Student({
    name: "Juan DC",
    username: "juandc",
    email: "juanito@gmail.com",
    twitter: "fjuandc",
    learningPaths: [
        escuelaWeb,
        escuelaVgs,
    ]
});

const Miguelito = new Student({
    name: "Miguelito",
    username: "miguelito_felix",
    email: "miguelito@gmail.com",
    instagram: "miguelitofeliz",
    learningPaths: [
        escuelaWeb,
        escuelaDataScience,
    ]
});

class Course2 {
    constructor({
      name,
      classes = [],
    }) {
      this._name = name;
      this.classes = classes;
    }
  
    get name() {
      return this._name;
    }
  
    set name(nuevoNombrecito) {
        if(typeof nuevoNombrecito !== "string"){
            console.error ("El nombre tiene que ser un string");
        }else{
            const Mayuscula = nuevoNombrecito[0].toUpperCase() + nuevoNombrecito.slice(1);
            this._name = Mayuscula;
        }
    }
  }

  const cursoPrueba = new Course2({
    name: "curso de prueba con mayusculas",
    classes: [
        "Matemáticas",
        "Física",
        "INgles",
    ]
  })

