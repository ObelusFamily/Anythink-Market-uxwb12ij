import React, { useState} from "react";
import { useHistory } from "react-router-dom";


// let onsubmit = async(event) => {
//     console.log(event.target.value)
   
//  let key = event.target.value;
//  let result =await fetch(`http://localhost:3001/search/${key}`);
//  result=await result.json()
//  if (result) {
//     console.log(result)
    
//  }

// }


 const search = () =>  { 
    
 const [search, setSearch] = useState("");
 const history = useHistory();
  return (
    <div>
       
        <input className="form-control me-2" type="search" onChange={(e) => {setSearch(e.target.value)}} placeholder="Search" aria-label="Search" />
        <button onClick={() => history.push(`/search?query=${search}`)} >Search</button>
   
    </div>
  )
}
export default search; 