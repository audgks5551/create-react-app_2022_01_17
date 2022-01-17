import { useState, useEffect } from "react";


function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {
    setCounter((prev) => prev + 1);
  }
  const onChange = (event) => {
    setKeyword(event.target.value)
  }

  useEffect(() => {
    console.log("한번만 실행됨", keyword);
  }, []);
  useEffect(() => {
    console.log("클릭", counter);
  }, [counter]);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("검색", keyword);
    }
  }, [keyword]);

  return (
    <div>
      <div>
        <input value={keyword} onChange={onChange} type="text" />
      </div>
      <div>
        <span>{counter}</span>
      </div>
      <div>
        <button onClick={onClick}>클릭</button>
      </div>
    </div>
  );
}

export default App;
