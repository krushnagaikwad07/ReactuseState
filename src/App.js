import React, { useState } from "react";
import './App.css';




function App() {
  // const [list, setList]= usestate(userList);
  const [name, setName] = useState("Amit");
  const [input, setInput] = useState(0);
  const[text,setText]=useState("");
  const[list,setList]=useState([]);
  
  function handleChange(event){
    setText(event.target.value)
  }

  const handleSubmit=(e)=>{
  e.preventDefault();
   console.log(text);
   
   setList([...list,text])
   setText(" ")
  }



  function increase() {
    setInput(input + 1)
  }
  function decrease() {
    setInput(input - 1)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
    < input type="text " placeholder="Text " value={text} onChange={handleChange} />
    <button>Add</button>
</form>
{
   <ul>
     {list.map((elem)=>{
       return(
         <li>{elem}</li>
       )
     })}
     </ul>
}

      <h1>My Name is {name}</h1>
      <button onClick={()=> setName("Rajan")}>Change Name</button>
      <h1>This is my first useState</h1>
      <button onClick={increase} > Increse Count </button>
      <button onClick={decrease}>Decrease Count</button>
      
      <p>This is ={input}</p>
    </>

  );
}

export default App;
