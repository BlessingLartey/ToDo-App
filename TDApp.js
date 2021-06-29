import React, {useState} from 'react'
import "./TD.css"

function TDApp() {

  const [task, setTask] = useState("")
  const [tasklist, setTaskList] = useState ([])

  const handleChange = (e) => {
    setTask(e.target.value)
  }

  const AddTask = () => {
if(task !== ""){
  const taskDetails = {
    id: Math.floor(Math.random() * 1000),
    value: task,
    isCompleted: false,
    
  }

  setTaskList([...tasklist, taskDetails])
} 
 }

 const deletetask = (e, id) => {
   e.preventDefault()
   setTaskList(tasklist.filter((t) => t.id !== id))
 }
 const taskCompleted = (e, id) =>{
  e.preventDefault()
  const element = tasklist.findIndex((elem) => elem.id === id);
  const newTaskList = [...tasklist];
  newTaskList[element] = {
    ...newTaskList[element],
    isCompleted: true,
  }

  setTaskList(newTaskList)
  

}
  return (
    <div className="todo">
      <input type="text" name="text" id="text" onChange={(e) => handleChange(e)} placeholder="add task to do..."/>
      <button className="add-btn" onClick={AddTask}>ADD</button>
      
      {tasklist !== [] ?(
      <ul>
        {tasklist.map((t) =>(
          <li className={t.isCompleted ? "crossText" : "listitem"} >{t.value}
            <button className="completed" onClick={(e) => taskCompleted(e, t.id)}>done</button>
            <button className="delete" onClick={(e) => deletetask(e, t.id)}>delete</button>

          </li>
          
        ))}
      </ul>

      ): null }

    </div>
  )
}

export default TDApp
