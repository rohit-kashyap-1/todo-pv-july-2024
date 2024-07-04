import React, { useState } from 'react'
import './todo.css'

export default function Todo() {

  let [task,setTask] = useState('')
  let [tasks,setTasks]= useState((localStorage.getItem('tasks')!=undefined)?function(){

    let t = localStorage.getItem('tasks')
    //string to array?
    t = t.split(",") //rohit,ajmer =  ['rohit','ajmer']
    return t

    //we will use parse in array of ojects

  }:'')
  //push()
  //localStorage

  //['task 1','item 2']

  const handleSubmit = (e)=>{
    e.preventDefault()
    let a = [...tasks,task]
    setTasks(a)
    setTask('')
    localStorage.setItem('tasks',a)
  }
  let counter = 1


  return (
    <div className='container'>
      <form action='' method='' onSubmit={handleSubmit}>
        <input type='text' onChange={(e)=>{setTask(e.target.value)}} value={task}/>
        <button>Add Task</button>
      </form>

      {/* concept clarity */}
      <ul>
        {(tasks.length!=0)?tasks.map(function(item){
          return <li key={counter++}>{item}</li>
        }):''}
      </ul>
    </div>
  )
}
