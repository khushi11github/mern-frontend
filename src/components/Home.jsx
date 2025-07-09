// function Home({age}){
//   if(age >10) return <h2> Welcome</h2>
//   else return <h2> You are not allowed</h2>
// }

// export default Home;
// function Home({age}){
//   return age > 10 ? <h2>Welcome</h2> : <h2>You are not allowed</h2>;
// }
// export default Home;

// export default function Home({age}) {
//   const handleClick = ()=>{
//     alert('hello');
//   }


//    const handleSubmit = (name)=>{
//    alert(`hello ${name}`);
//   }
//   return (
//     <>
//       <h1>Hello world</h1>
//       <button onClick={handleClick}>click</button>
//       <button onClick={()=>handleSubmit('John')}>Submit</button>
//     </>
//   );
// }
import { useState } from "react";

// export default function Home({age}) {

//   const [score,setscore] = useState(0);

//   const handleIncrement = () => {
//     setscore((prev) => prev + 1);  
//   }
// const decrement = () => {
//     setscore((prev) => prev - 1);
//   };

//   return (
//     <>
//       <p>{score}</p>
//       <button onClick={handleIncrement}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </>
//   );
// }


export default function Home() {

  const [runs,setrun]=useState(0);
  const[wicket,setwicket]=useState(0);
  const [message, setMessage] = useState("");


  const handleRun = () => {
    if(wicket<10) {
    setrun((prev) => prev + 1);}
    setMessage("Well Done!");  
  }
const handlewicket = () => {
  if (wicket <10) {
    setwicket((prev) => prev + 1);
    setMessage("better luck next time");
    
  }else{
    setMessage("game over");
  }
  };

  return (
    <>
  
      <button onClick={handleRun}>Run</button><br></br>

      <p>{runs}</p>
      <button onClick={handlewicket}>Wicket</button>
      <p>{wicket}</p>

      <div>{message}</div>

  

    </>
  );
}
