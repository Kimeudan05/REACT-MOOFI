import Content from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";


function App() {
  const course = "Half full stack application development";
  const parts = [
{
    name: "Fundamentals of React",
    exercises:10
    },
    {
    name: "Using props to pass data",
    exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14
    }
  ]

 
  return (
    <div>
    
      <Header course={course} />
      <Content parts={parts} />
     
      <Total parts={parts} />
    </div>
  );
  
}

export default App;