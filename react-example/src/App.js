import React from 'react';
import './App.css';

// Funcion que devuelve nombre + apellido a partir de un objeto
function formatName(user) {
    return user.name + " " + user.lastname;
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

// Componente (funcion)
function Animal(props) {
  return (
    <div className="componente">
      <h3>Componente (funcion)</h3>
      <p>Tu animal favorito es: {props.animal}</p>
    </div>
  )
}

//Componente (clase)
class Comida extends React.Component {
  render() {
    return (
      <div className="componente">
        <h3>Componente (clase)</h3>
        <p>Tu comida favorita es: {this.props.comida}</p>
      </div>
    )
  }
}


// APP
function App() {
  return (
    <div className="App">
      <div>
        {saludo(persona_1)}
        {saludo(persona_2)}
        {saludo()}
      </div>

      {elementSimple}
      {elementComplex}

    <div>
      <Animal animal="perro" />
      <Comida comida="milanesa" />

    </div>

    </div>
  );
}

export default App;
