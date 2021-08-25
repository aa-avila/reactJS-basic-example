import './App.css';

function formatName(user){
  if (user) {
    return user.name + " " + user.lastname;
  }
}

function saludo(user){
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

const element = <p>Este elemento esta en una variable</p>;

function App() {
  return (
    <div className="App">
      {saludo(persona_1)}
      {saludo(persona_2)}
      {element}
    </div>
  );
}

export default App;
