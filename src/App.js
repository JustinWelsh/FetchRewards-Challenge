import "./App.css";
import UserCreationForm from "./components/form/UserCreationForm";
import BackgroundImg from "./components/BackgroundImg"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BackgroundImg />
        <UserCreationForm />
      </header>
    </div>
  );
}

export default App;
