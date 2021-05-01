import React from "react"
import './App.css';
import myImage from "./image/img2.png"
function App() {
  return (
    <div className="App">

   <div style={{border:"solid 1px black" ,maxwidth:"100vw"}}>

<h1 className="title">Malina Free Fire</h1>
<div>
   <div className="imgge">
 <img src={myImage} alt ='myImage' />
  </div> 
<React.Fragment>
<img  src="/images/img1.png" alt="img1"/>
</React.Fragment>
</div>
</div>
<video width="320" height="240" controls>

 <source src="/malinaa.mp4" type="video/mp4" />

</video>
    </div>
  );
}

export default App;
