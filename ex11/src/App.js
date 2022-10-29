import { useState, useEffect } from "react";
import Task from "./Task.js";

const tasks = ["Play videogames", "Watch TV", "Play football", "Finish homework", "Cook dinner", "Wash the dishes", "Clean the cat's litter", "Definitely not study"]

function App() {
  const [taskList, setTaskList] = useState([tasks[Math.floor(Math.random() * tasks.length)]]);

  useEffect(() => {
    const taskInterval = setInterval(() => setTaskList(curList => [...curList, tasks[Math.floor(Math.random() * tasks.length)]]), 1000);
    return () => clearInterval(taskInterval);
  }, [])

  return (
    <>
      <h3>Diogo's todo list</h3>
      <ul>
        { taskList.map((task, index) => <Task key={ index } task={ task } />) }
      </ul>
    </>
  );
}

export default App;