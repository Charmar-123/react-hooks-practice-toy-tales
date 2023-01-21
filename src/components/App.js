import React, { useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [updatedList, setUpdatedList] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  const handleSubmit = (updatedList) => {
    setUpdatedList(updatedList)
  }


  return (
    <>
      <Header />
      {showForm ? <ToyForm handleSubmit={handleSubmit}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer updatedList={updatedList}/>
    </>
  );
}

export default App;
