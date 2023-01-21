

function ToyCard({name, image, likes, id, handleDelete, handleLike}) {



  const onDeleteClick = () =>{
    fetch(`http://localhost:3001/toys/${id}`, {
      method : "DELETE",
    })
    .then(res => res.json())
    .then(() => handleDelete(id))
  }

  const onUpdateClick = () => {

    fetch(`http://localhost:3001/toys/${id}`, {
      method : "PATCH",
      headers : {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({likes : likes + 1})
    })
    .then(res => res.json())
    .then(data => handleLike(data.likes))
  }
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={onUpdateClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={onDeleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
