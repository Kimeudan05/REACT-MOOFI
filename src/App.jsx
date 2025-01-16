import Content from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";


function App() {
  const course = "Half full stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
 
  return (
    <div>
    
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} exercises3={exercises3} exercises2={exercises2} exercises1={exercises1}/>
     
      <Total exercises1={exercises1 } exercises2={exercises2} exercises3={exercises3} />
    </div>
  );
  
}

export default App;
// return (
//     <div>
//       <Header course={course} />
//       {/* <h1>{course}</h1> */}
//       {/* <Content part1={part1} excercises1={excercises1} />
//       <Content part2={part2} excercises1={excercises2} />
//       <Content part3={part1} excercises1={excercises3} /> */}

//       {/* <Total
//         excercises1={excercises1}
//         excercises2={excercises3}
//         excercises3={excercises3}
//       ></Total> */}
//     </div>
//   );