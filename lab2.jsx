import { useState } from 'react';
function App(){
  const [l,setl] = useState("");
  const [b,setb] = useState("");
  const [area,setarea] = useState("");
  return (
    <div>
      <input type="text" value={l} onChange={(e)=>setl(e.target.value)} placeholder="Enter length"/>
      <input type="text" value={b} onChange={(e)=>setb(e.target.value)} placeholder="Enter breadth"/>
      <p>length:{l}</p>
      <p>breadth:{b}</p>
      <button onClick={()=>setarea(l*b)}>Calculate Area</button>
      <h1>Area: {area}</h1>
    </div>
  );
}
export default App;