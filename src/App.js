import NewTask from "./Components/NewTask";
import taskList from "./taskList";
import Task from "./Components/Task";
import React, { useState } from "react";

function App() {
  const [taskArray, setTaskArray] = useState(taskList);
  console.log(taskArray);

  function removeTask(index) {
    const prevTaskArray = [...taskArray];
    prevTaskArray.splice(index, 1);
    setTaskArray(prevTaskArray);
  }

  const taskListElement = taskArray.map((task, index) => (
    <Task
      key={task.id}
      task={task}
      removeSelf={() => removeTask(index)}
      taskArray={taskArray}
      position={index}
      setTaskArray={setTaskArray}
    />
  ));
  return (
    <div className="App">
      <h1>To Do List</h1>
      <NewTask addTaskList={setTaskArray} />
      <div className="task-list">{taskListElement}</div>
    </div>
  );
}

export default App;
