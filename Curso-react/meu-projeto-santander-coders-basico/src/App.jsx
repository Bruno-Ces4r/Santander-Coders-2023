import MyComponent from "./components/MyComponent" // importando o component
import MyCounter from "./components/MyCounter"
import MyList from "./components/MyList"
import GetExternalData from "./components/GetExternalDatas"


function App() {

  return (
   <div className="container">
    <h1>Hello world, React!</h1>
    <MyComponent />
    <MyButton content='Click here' /> {/* Aqui estou passando uma props para o MyButton */}

    <div>
      <MyCounter />
    </div>

    <div>
      <h1>Efeitos colaterais</h1>
      <MyList />
    </div>

    <div>
      <GetExternalData />
    </div>
   </div>
  )
}



function MyButton(props) {
  return (
    <button>{props.content}</button>
  )
}

export default App  // Exportando a função App, que vou importar no main.jsx
