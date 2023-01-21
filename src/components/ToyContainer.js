import {useState, useEffect} from "react";
import ToyCard from "./ToyCard";

function ToyContainer({updatedList}) {

  const [list, setList] = useState([])
  const [deletedItemID, setDeletedItemID] = useState()
  const [updatedLikes, setUpdatedLikes] = useState()

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(res => res.json())
    .then(toyData => setList(toyData))
  }, [updatedList, updatedLikes])

  const handleDelete = (id) => {
    setDeletedItemID(id)
  }

  const handleLike = (likes) => {
    setUpdatedLikes(likes)
    console.log(likes);
  }

  const filteredList = list.filter(item => item.id !== deletedItemID)

  const toyCards = filteredList.map(({id, name, image, likes})=>
    <ToyCard key={id} id={id} name={name} image={image} likes={likes} handleDelete={handleDelete} handleLike={handleLike}/>
  )
  return (
    <div id="toy-collection">{toyCards}</div>
  );
}

export default ToyContainer;
