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
    this.state = { isToggled: true };

    //Binding
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevSate => ({ isToggled: !prevSate.isToggled }));
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
    this.state = { isToggled: true };
  }

  handleClick = () => {
    this.setState(prevSate => ({ isToggled: !prevSate.isToggled }));
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
//CONDITIONAL RENDERING (según state)
function LoggedInMsg(props) {
  return <h3>Estás logueado!</h3>
}

function LoggedOutMsg(props) {
  return <h3>No estás logueado.</h3>
}

function MsgLoginControl(props) {
  const isLogged = props.isLogged;
  return (
    isLogged ? <LoggedInMsg /> : <LoggedOutMsg />
  );
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Loguearse
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Salir
    </button>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = { isLogged: false };
  }

  handleLogin() {
    this.setState({ isLogged: true });
  }

  handleLogout() {
    this.setState({ isLogged: false });
  }

  render() {
    const isLogged = this.state.isLogged;
    let button;
    if (isLogged) {
      button = <LogoutButton onClick={this.handleLogout} />;
    } else {
      button = <LoginButton onClick={this.handleLogin} />;
    }

    return (
      <div>
        <h2>Login Control</h2>
        <MsgLoginControl isLogged={isLogged} />
        {button}
      </div>

    );
  }

}

/***************************************************************** */
//LIST ITEMS
//todo data de ejemplo
const todos = [
  {
    id: 'qwerty',
    text: 'programar'
  },
  {
    id: 'asdfgh',
    text: 'lavar los platos'
  },
  {
    id: 'zxcvbn',
    text: 'regar las plantas'
  }
]

//un item
function ListItem(props) {
  return <li>{props.text}</li>;
}

//lista (usa id como key)
function TodoList(props) {
  const todoData = props.todoData;
  const listItems = todoData.map((todo) => {
    return <ListItem key={todo.id.toString()} text={todo.text} />
  });

  return (
    <ul>
      {listItems}
    </ul>
  )
}

/***************************************************************** */
/** CONTROLLED COMPONENTS */

// Formulario basico
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('El nombre ingresado es: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    )
  }
}

// Text area
class TextForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Escriba una anecdota en este campo.' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('El texto ingresado es: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Anecdota o historia graciosa:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    )
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

      <div>
        <LoginControl />
      </div>

      <div>
        <h3>ToDo (ejemplo de lista)</h3>
        <TodoList todoData={todos} />
      </div>

      <div>
        <h2>Controlled components</h2>
        <div>
          <h3>Formulario basico</h3>
          <NameForm />
        </div>
        <div>
          <h3>Textarea</h3>
          <TextForm />
        </div>


      </div>

    </div>
  );
}

export default App;
