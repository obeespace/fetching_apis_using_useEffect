import React from "react"
import "./index.css"

export default function App() {
  var [count, setCount] = React.useState(1)
  const [stardata, setStardata] = React.useState({})

  function grow(){
    setCount(function(prev){
      return prev + 1
    })
  }
  React.useEffect(function(){
    fetch("https://swapi.dev/api/people/"+ count)
    .then(res => res.json())
    .then(data => setStardata(data))
  }, [count])

  return (
    <div className="App">
      <button onClick={grow}>Get Next Character</button>
      <pre>{JSON.stringify(stardata, null, 2)}</pre>
    </div>
  );
}