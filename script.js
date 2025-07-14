const materias = [
  // 1er año
  { id: "anatomia", nombre: "Anatomía" },
  { id: "biologia", nombre: "Biología" },
  { id: "citologia", nombre: "Citología, Histología y Embriología" },
  { id: "csociales", nombre: "Ciencias Sociales y Medicina" },
  { id: "infobasica", nombre: "Informática Básica" },

  // 2do año
  { id: "fisifibio", nombre: "Fisiología y Física Biológica", prereqs: ["anatomia","biologia","citologia"] },
  { id: "bioquim", nombre: "Bioquímica y Biología Molecular", prereqs: ["biologia"] },
  { id: "epid", nombre: "Epidemiología", prereqs: ["csociales"] },
  { id: "psicmed", nombre: "Psicología Médica", prereqs: ["anatomia"] },

  // 3er año
  { id: "farmaco", nombre: "Farmacología Básica", prereqs: ["fisifibio","bioquim"] },
  { id: "microbio", nombre: "Microbiología y Parasitología", prereqs: ["fisifibio","bioquim"] },
  { id: "patologia", nombre: "Patología", prereqs: ["anatomia","fisifibio","bioquim"] },
  { id: "semiologia", nombre: "Semiología", prereqs: ["anatomia","fisifibio","bioquim"] },

  // 4to año
  { id: "cirugia1", nombre: "Cirugía I", prereqs: ["farmaco","patologia","semiologia"] },
  { id: "medint1", nombre: "Medicina Interna I", prereqs: ["farmaco","microbio","patologia","semiologia"] },

  // 5to año
  { id: "cirugia2", nombre: "Cirugía II", prereqs: ["cirugia1"] },
  { id: "medint2", nombre: "Medicina Interna II", prereqs: ["medint1"] },

  // 6to año
  { id: "pfo", nombre: "Práctica Final Obligatoria", prereqs: ["medint2","cirugia2"] }
];

// Cargar progreso
const progreso = JSON.parse(localStorage.getItem("progresoMedicinaUNLP")) || {};

const grid = document.getElementById("grid");

// Crear elementos en el DOM
materias.forEach(materia => {
  const div = document.createElement("div");
  div.id = materia.id;
  div.textContent = materia.nombre;
  div.className = "subject";
  grid.appendChild(div);

  div.addEventListener("click", () => {
    if (!div.classList.contains("locked")) {
      const completado = div.classList.toggle("completed");
      progreso[materia.id] = completado;
      localStorage.setItem("progresoMedicinaUNLP", JSON.stringify(progreso));
      actualizarEstado();
    }
  });
});

// Actualizar estado según correlativas
function actualizarEstado() {
  materias.forEach(materia => {
    const div = document.getElementById(materia.id);
    const completado = progreso[materia.id];
    div.classList.toggle("completed", completado);

    const habilitada =
      !materia.prereqs || materia.prereqs.every(pr => progreso[pr]);
    if (completado || habilitada) {
      div.classList.remove("locked");
    } else {
      div.classList.add("locked");
    }
  });
}

actualizarEstado();