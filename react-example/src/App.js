import React from 'react';
import './App.css';

/***************************************************************** */
// Variable que contiene un unico elemento <p>
const elementSimple = <p>Elemento simple. Este parrafo esta en una variable</p>;

// variable que contiene varios elementos dentro de un unico elemento <div>
const elementComplex = (
  <div>
    <h3>Elemento compuesto</h3>
    <p>Este elemento esta conformado por varias etiquetas dentro de un div</p>
    <p>Otro parrafo</p>
    <p>Oooootro parrafo</p>
  </div>
);

/***************************************************************** */
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

/***************************************************************** */
// Componente (funcion)
function Animal(props) {
  return (
    <div className="componente">
      <h3>Componente (funcion)</h3>
      <p>Tu animal favorito es: {props.animal}</p>
    </div>
  );
}

/***************************************************************** */
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

/***************************************************************** */
// CLOCK (componente Class con State y Lifecycle methods)
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  // crea intervalo al montar componente, el cual ejecuta funcion tick() cada 1 segundo
  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000);
  }

  // al desmontar componente elimina el intervalo mediante el timerID
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // funcion "tick" que actualiza el state "date"
  tick = () => {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="componente">
        <h2>Hora local</h2>
        <h3>Son las {this.state.date.toLocaleTimeString()}.</h3>
      </div>
    );
  }
}

/***************************************************************** */
//TOGGLE ON/OFF (Class component, con state & prevState)
class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggled: true};

    //Binding
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState( prevSate =>  ({ isToggled: !prevSate.isToggled }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggled ? 'ON' : 'OFF'}
      </button>
    );
  }
}

/***************************************************************** */
//TOGGLE ON/OFF ("sin bind")
class ToggleBtnNoBind extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggled: true};
  }

  handleClick = () => {
    this.setState( prevSate =>  ({ isToggled: !prevSate.isToggled }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggled ? 'ON' : 'OFF'}
      </button>
    );
  }
}





/***************************************************************** */
// APP A RENDERIZAR
function App() {
  return (
    <div className="App">

      <div>
        {elementSimple}
        {elementComplex}
      </div>

      <div>
        {saludo(persona_1)}
        {saludo(persona_2)}
        {saludo()}
      </div>

      <div>
        <Animal animal="perro" />
        <Comida comida="milanesa" />
      </div>

      <div>
        <Clock />
      </div>

      <div>
        <h3>Toggle (con this.handleClick.bind)</h3>
        <ToggleButton />
        <ToggleButton />
        <ToggleButton />
      </div>

      <div>
      <h3>Toggle (sin this.handleClick.bind)</h3>
        <ToggleBtnNoBind />
        <ToggleBtnNoBind />
        <ToggleBtnNoBind />
      </div>

    </div>
  );
}

export default App;
