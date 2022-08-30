import React from "react";
import {TrashIcon, PencilAltIcon} from "@heroicons/react/outline";

const TaskItem=({task, handleDelete, handleCompleted, handleEdit})=>{
    return (
        <div className="flex items-center justify-between bg-teal-100 p-2 border-2 border-gray-300 rounded-md">
            <div className="flex space-x-2">
                <input 
                type= "checkbox" 
                name="" 
                id=""
                checked= {task.completed} 
                onChange={()=>handleCompleted(task.id)} 
                />
                    <div className="flex-1">{task.text}</div>
            </div>
            <div className="space-x-2">
                <button className= "bg-blue-800 p-2 rounded-md"
                onClick={()=> handleEdit(task.id)}>
                    <PencilAltIcon height ={24} color="white"/>
                </button>
           
        <button 
        className="bg-red-800 p-2 rounded-md" 
         onClick={()=> handleDelete (task.id)}>
    <TrashIcon  height ={24} color="white"/>
    </button>
    </div>
    </div>
   
    );

}
export default TaskItem;