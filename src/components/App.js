import React, {useEffect, useState} from "react";

import Fact from "./Fact";
import catJam from '../data/catJam.gif'

function App() {
  const [catFactsList, setCatFactsList] = useState(null);
  let counter = 0;
  
  useEffect(() => {
    fetch('https://catfact.ninja/facts')
      .then(resp => resp.json())
      .then(json => {
        setCatFactsList(json.data)
      })
      .catch(error => {
        console.log(`Error: ${error}`)
      })
  }, [])

  if (!catFactsList) {
    return <p>Loading...</p>
  }
  
  return (
    <div className="App">
      <h1>🐈 CAT FACTS 🐱</h1>
      <img src={catJam} alt="Vibing Cat"/>
      {catFactsList.map(item => {
        counter++
        return (
          <Fact key={item.fact} someFact={item.fact} counter={counter}/>
        )
      })}
      <iframe width="560" height="315" src="https://www.youtube.com/embed/QH2-TGUlwu4" title="YouTube video player" ></iframe>
    </div>
  );
}

export default App;