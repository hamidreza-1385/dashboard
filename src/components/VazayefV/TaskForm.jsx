import { useState } from "react";
import { useTasks } from "../../context/TaskContext";
import ColorSlider from "../ColorSlider";

const TaskForm = () => {
  const [task, setTask] = useState("");
  const { addTask } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask(""); // پاک کردن ورودی بعد از افزودن تسک
    }
  };

  return (
    
    <form onSubmit={handleSubmit} className="flex gap-2">
      
      <div><input type="text" className="border p-2 rounded text-end w-100" placeholder="متن کار را وارد کنید..." value={task} onChange={(e) => setTask(e.target.value)} /></div>
      <ColorSlider/>
      <div className="justify-content-center d-flex pt-5"><button className="bg-primary text-white px-4 py-2 rounded">افزودن</button></div>
    </form>
  );
};

export default TaskForm;