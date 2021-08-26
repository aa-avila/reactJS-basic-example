import './App.css';

function formatName(user) {
  if (user) {
    return user.name + " " + user.lastname;
  }
}

function saludo(user) {
  if (user) {
    return <p>Hola, {formatName(user)}!</p>;
  }
  return <p> Hola, sujeto desconocido</p>
}

const persona_1 = {
  name: "Pepito",
  lastname: "Lopez"
}

const persona_2 = {
  name: "Fulano",
  lastname: "Perez"
}

const elementSimple = <p>Este parrafo esta en una variable</p>;

const elementComplex = (
  <div>
    <h2>Elemento compuesto</h2>
    <p>Este elemento esta conformado por varias etiquetas dentro de un div</p>
    <p>Otro parrafo</p>
    <p>Oooootro parrafo</p>

  </div>
)

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
