import React, {useState} from "react";


function showResult(x, y){
    return x+y
}

function workWithNull(){
    return null
}

function workWithArray(arr){
    return arr
}

function filterArray(arr){
    return arr.filter(val => !!val)
}

function groupBy(arr, prop){
    console.log(typeof prop)
   return arr.reduce((acc, index)=> {
       const key= typeof prop === 'function' ? prop(index) : index[prop]
       // const key= prop(index)
       if (!acc[key]){
           acc[key] = []
       }
       acc[key].push(index)
       return acc
   }, {})
}

function App() {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    const [res, setRes] = useState(0)
    const testArr = [2.1, 2.2, 4.9, 5.3]
    console.log(groupBy(testArr, Math.floor))
    console.log("three"["length"])
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

export {App ,showResult, workWithNull, workWithArray, filterArray, groupBy}
// module.exports = {showResult, workWithNull, workWithArray, filterArray}
// export {showResult}
// export default
export default App;
