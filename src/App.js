import "./App.css";
import UserCreationForm from "./components/form/UserCreationForm";
import BackgroundImg from "./components/BackgroundImg"
import { useState, useEffect } from "react"

function App() {

  // State for data to minimize api calls
  const [endpointData, setEndpointData] = useState(null)

  // synchronous call on component load by useEffect.
  // no dependencies needed.
  useEffect(() => {
    fetch(`https://frontend-take-home.fetchrewards.com/form`) //returns a `promise`
    .then(res => res.json()) //takes response and turns it to a json obj.
    .then(data => setEndpointData(data)) // setting the data to our state for our reference
          //<-- Could use a `.catch` here for error handling.
  }, [])

  return (
    <div>
      <header className="App-header">
        <BackgroundImg />
        <UserCreationForm endpointData={endpointData} />
      </header>
    </div>
  );
}

export default App;
