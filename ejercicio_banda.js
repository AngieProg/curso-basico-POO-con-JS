  //Crear clase Integrante
  class Integrante {
    constructor({
      name,
      instrumento,
    }) {
      this.name = name;
      this.instrumento = instrumento; 0
    }
  }

  const mariaB = new Integrante({
    name: "Maria Bonita",
    instrumento: "Bateria",
  })

  const juanP = new Integrante({
    name: "Juantio Pérez",
    instrumento: "Guitarra",
  })

  const maxD = new Integrante({
    name:  "Maximiliano Díaz",
    instrumento: "Saxofón",
  }) 

  const bryanS = new Integrante({
    name: "Bryan Scoutt",
    instrumento: "Bateria",
  })

class Banda {
    constructor({
      nombre,
      generos = [],
      integrantes = [],
    }) {
      this.nombre = nombre;
      this.generos = generos;
      this.integrantes = integrantes;
    }
    agregarIntegrante(integranteNuevo) {
        if (integranteNuevo.instrumento == 'Bateria'){
            if (this.integrantes.every(i => i.instrumento !== 'Bateria')) {
                this.integrantes.push(integranteNuevo);
            }else{
                console.log ("Lo siento, solo puede haber un baterista");
            }
        }else{
            this.integrantes.push(integranteNuevo);
        }
    }
  }
  
  const kiss = new Banda({
    nombre:"Kiss",
    generos: [
        "Rock",
        "Metalica",
    ],
    integrantes: [
        juanP,
        maxD,
        bryanS,
    ]
  })

 /*Para probar los métodos en el navegador hay que utilizar esta sintaxis:
            kiss.agregarIntegrante(MariaB);  */
 