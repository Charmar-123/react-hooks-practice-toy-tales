import {useState} from "react";

function ToyForm({handleSubmit}) {


  const [name, setName] = useState("")
  const [image, setImage] = useState("")

  const onSubmitClick = (e) =>{
    e.preventDefault();
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers:
        { "Content-Type": "application/json" },

      body: JSON.stringify(formObj)



    })
      .then(res => res.json())
      .then((updatedList) => {
        handleSubmit(updatedList);
      })
      .then(() => {
        setName("");
        setImage("");
      })
    
  }

  const formObj ={
    name: name,
    image: image,
  }
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={onSubmitClick}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
