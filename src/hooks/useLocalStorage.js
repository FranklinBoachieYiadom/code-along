import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue){
    const[data,setData]=useState(()=>{
    const result= localStorage.getItem(key);
    if (!result) return initialValue;
    return JSON.parse(result);
});

const setValue =(value)=>setData(value);


useEffect(()=> {
    localStorage.setItem(key, JSON.stringify(data));
}, [data,key]);

return {data, setValue}
}
export default useLocalStorage;