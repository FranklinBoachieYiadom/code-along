import React from "react";
import {TrashIcon} from "@heroicons/react/outline";

const TaskItem=({task, handleDelete})=>{
    return (
        <div className="flex items-center justify-between bg-teal-100 p-2 border-2 border-gray-300 rounded-md">
            <div className="flex space-x-2">
                <input type= "checkbox" name="" id=""checked= {task.completed} onChanged={()=>{}} / >
                    <div className="flex-1">{task.text}</div>
            </div>
        <div className="flex-1">{task.text}</div>
        <button 
        className="bg-blue-800 p-2 rounded-md" 
         onClick={()=> handleDelete (task.id)}>
    <TrashIcon  height ={24} color="white"/>
    </button>
    </div>
   
    );

}
export default TaskItem;