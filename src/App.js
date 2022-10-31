import React, {useState} from "react";


function showResult(x, y){
    return x+y
}

function App() {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    const [res, setRes] = useState(0)

  return (
    <div className="App">
        <h1>First unit tests with js</h1>
        <input
            type={"number"}
            placeholder={"A"}
            onChange={(e)=>{setA(Number(e.target.value))}}
        />
        <input
            type={"number"}
            placeholder={"B"}
            onChange={(e)=>{setB(Number(e.target.value))}}
        />
        <button
            onClick={()=>{setRes(showResult(a,b))}}
        >=</button>
        <p>{res}</p>
    </div>
  );
}

module.exports = {showResult}
export default App;
