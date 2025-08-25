import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { useState } from "react";
import Table from "./components/Table";
function App() {
  // initial state is an object with default values
  // we can have 4 separate state variables but it's harder to manage, repetitive, but easier for beginners
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 500,
    expectedReturn: 5,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleInput(inputIdentifier, newValue) {
    //inputIdentifier is the key in the object you want to change (like "initialInvestment")
    //newValue is the new value the user typed
    //prevInput is the previous state
    //...prevInput copies all the existing values
    //[inputIdentifier]: newValue replaces only the value you want to update
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleInput} userInput={userInput} />
      {inputIsValid ? (
        <Table input={userInput} />
      ) : (
        <p className="center">Enter a duration longer than 0</p>
      )}
    </>
  );
}

export default App;
