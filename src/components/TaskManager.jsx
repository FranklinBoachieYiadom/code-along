import React, {useEffect, useState} from "react";
import TaskItem from "./TaskItem";
import {v4 as uuid} from "uuid";

function TaskManager(){
    const [tasks, setTasks]= useState(()=>{
        const savedTasks = localStorage.getItem("tasks");
        if(!savedTasks)return[]
        return JSON.parse(savedTasks);
    });
    const [input, setInput] = useState("");
   
    const handleSubmit= (e)=> {
        e.preventDefault();
        if(input ==="") return;

        const newTask ={
            id: uuid(),
            text: input,
            completed: true,
        };

        setTasks([newTask, ...tasks], );
        setInput("");
    };
    const handleDelete = (id)=> {
        const newTasks = tasks.filter((task)=> task.id !== id);
        setTasks(newTasks);
    };
    useEffect(()=>{
        localStorage.setItem("tasks", JSON.stringify(tasks));
    },[tasks]);

return(
<div className="h-screen bg-blue-600 flex justify-center items-center">
          <div className="max-w-xl w-full max-h-96 bg-white rounded-xl px-5 py-10">
              <form
               onSubmit={handleSubmit}  
               className= "w-full space-x-5 flex justify-between mb-10" 
               >      
         <input 
                type= "text" 
                className="border-2 border-blue-400 p-2 rounded-md outline-none w-10/12"
                onChange={(e)=>setInput(e.target.value)}
                value={input}
                />
               <button 
               type= "submit"  
               className="bg-blue-600 text-white text-lg py-2 px-5 rounded-md"
               disabled={input === ""}
               > Add
            </button>

        </form>

        <div className="space-y-2 overflow-y-auto h-56">
        {tasks.map((task)=>

            <TaskItem key={task.id} task= {task} handleDelete={handleDelete} />
        )
        }
         
        </div>
    </div>
</div>

);
}

export default TaskManager;