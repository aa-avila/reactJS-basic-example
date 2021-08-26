import './App.css';

// Funcion que devuelve nombre + apellido a partir de un objeto
function formatName(user) {
  if (user) {
    return user.name + " " + user.lastname;
  }
}

// Funcion que retorna un <p> con saludo usando formatName
function saludo(user) {
  if (user) {
    return <p>Hola, {formatName(user)}!</p>;
  }
  return <p> Hola, sujeto desconocido</p>
}

// Ejemplo de usuario 1
const persona_1 = {
  name: "Pepito",
  lastname: "Lopez"
}

// Ejemplo de usuario 2
const persona_2 = {
  name: "Fulano",
  lastname: "Perez"
}

// Variable que contiene un unico elemento <p>
const elementSimple = <p>Este parrafo esta en una variable</p>;

// variable que contiene varios elementos dentro de un unico elemento <div>
const elementComplex = (
  <div>
    <h2>Elemento compuesto</h2>
    <p>Este elemento esta conformado por varias etiquetas dentro de un div</p>
    <p>Otro parrafo</p>
    <p>Oooootro parrafo</p>
  </div>
)

// APP
function App() {
  return (
    <div className="App">
      <div>
        {saludo(persona_1)}
        {saludo(persona_2)}
      </div>
      {elementSimple}
      {elementComplex}

    </div>
  );
}

export default App;
