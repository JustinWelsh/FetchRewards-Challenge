import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          className="absolute w-full"
          src={`${process.env.PUBLIC_URL}/images/layered-waves-haikei.svg`}
          alt="background"
        />
        <img
          className="absolute w-full"
          src={`${process.env.PUBLIC_URL}/images/star-scatter-haikei-yellow.svg`}
          alt="background"
        />
                <img
          className="absolute w-full"
          src={`${process.env.PUBLIC_URL}/images/star-scatter-haikei-purple.svg`}
          alt="background"
        />
        <Form />
      </header>
    </div>
  );
}

export default App;
