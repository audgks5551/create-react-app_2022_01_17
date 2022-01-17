import { useState } from "react";


function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  
  const onChange = (event) => {
    console.log(event.target.value);
    setToDo(event.target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  }
  console.log(toDos);

  return (
    <div>
      <h2>할 일 리스트</h2>
      <form onSubmit={onSubmit}>
        <input 
          type="text"
          onChange={onChange}
          value={toDo}
        />
        <button>저장</button>
      </form>
      <ul>
        {toDos.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
