import Content from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";


function App() {
  const course = "Half full stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises:10
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises:14
  };
  
 

 
  return (
    <div>
    
      <Header course={course} />
      <Content part1={part1.name} part2={part2.name} part3={part3.name} exercises3={part3.exercises} exercises2={part2.exercises} exercises1={part1.exercises}/>
     
      <Total exercises1={part1.exercises } exercises2={part2.exercises} exercises3={part3.exercises} />
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