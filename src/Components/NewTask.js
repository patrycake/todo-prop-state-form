import React, { useState } from "react";
import uniqid from "uniqid";

export default function NewTask(props) {
  const [formData, setFormData] = useState({
    task: "",
    description: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      id: uniqid(),
    }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    props.addTaskList((prevTaskList) => [...prevTaskList, formData]);
  }
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          placeholder="Add To Do Task"
          onChange={handleChange}
          value={formData.task}
        />
        <input
          type="text"
          name="description"
          placeholder="Add To Do Description"
          onChange={handleChange}
          value={formData.value}
        />
        <button className="form-button">Add Task</button>
      </form>
    </div>
  );
}
