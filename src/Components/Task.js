import EditForm from "./EditTask";
import React, { useState } from "react";

export default function Task(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState(props.task);

  function handleEditClick() {
    setIsEdit(true);
  }
  function editComplete() {
    setIsEdit(false);
    const prevTaskArray = [...props.taskArray];
    prevTaskArray.splice(props.position, 1, formData);
    props.setTaskArray(prevTaskArray);
  }

  return isEdit ? (
    <EditForm
      doneEditing={editComplete}
      taskInfo={formData}
      setTaskInfo={setFormData}
    />
  ) : (
    <div className="task">
      <h2>{formData.task}</h2>
      <p>{formData.description}</p>
      <button onClick={props.removeSelf}>Delete</button>
      <button onClick={handleEditClick}>Edit</button>
    </div>
  );
}
