import { useState } from "react";

export function CreateToDo(){
    const [title,setTitle] = useState("");
const [description,setDescription] = useState("");
    return <div>
        <input style={{
            padding : 10,
            margin : 10
        }} type="text" placeholder="title" onChange={(e)=>{
           
             setTitle(e.target.value);
        }}/> <br />



        <input style={{
            padding : 10,
            margin : 10
        }}  type="text" placeholder="description" onChange={(e)=>{
           
             setDescription(e.target.value);
        }} /> <br />






        <button style={{
            padding : 10,
            margin : 10
        }} onClick={()=>{
            fetch("http://localhost:3000/todos",{
                method : "POST",
                body : JSON.stringify({
                    title : title,
                    description : description
                }),
                headers : {
                    "Content-Type" : "application/JSON"
                }
            }).then(async (res)=>{
                const json = await res.json();
                console.log(josn);
                alert("Todo added");
            }).catch((err)=>{
                console.log("failed to add",err);
            })
        }}>Add a todo</button>
    </div>

}