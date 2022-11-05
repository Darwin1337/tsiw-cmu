import { useState } from "react";
import AddTask from "./Components/AddTask";
import ManageTasks from "./Components/ManageTasks";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="container mx-auto">
      <div className="mt-5 max-w-3xl mx-auto">
        <AddTask add={ setTasks } />
      </div>
      <div className="mt-5 max-w-3xl mx-auto">
        <ManageTasks taskList={ tasks } changeTasks={ setTasks } />
      </div>
    </div>
  );
}

export default App;
