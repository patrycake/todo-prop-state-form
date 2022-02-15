export default function EditTask(props) {
  function handleChange(event) {
    const { name, value } = event.target;

    props.setTaskInfo((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    props.doneEditing();
  }
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          placeholder="Add To Do Task"
          onChange={handleChange}
          value={props.taskInfo.task}
        />
        <input
          type="text"
          name="description"
          placeholder="Add To Do Description"
          onChange={handleChange}
          value={props.taskInfo.description}
        />
        <button className="form-button">Resubmit</button>
      </form>
    </div>
  );
}
