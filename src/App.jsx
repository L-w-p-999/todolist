import { useState } from 'react'
import Header from './Header'
import Input from './Input'
import Task from './Task'
import Footer from './Footer'

let nextId= 0;
function App() {
  const [name, setName] = useState('');
  const [Tasks, setTasks] = useState([]);
  const[compelete,setCompelete]=useState('all')
  const [count,setCount]=useState(0)
  function allCompelete(){
        setCount(count+1)
        if(count%2!==0){
            setTasks(
              Tasks.map(a=>{
                return ({
                  id:a.id,
                  name:a.name,
                  done:false,
                 })
              })
            )
        }else{
          setTasks(
            Tasks.map(a=>{
            return(
              {
                id:a.id,
                name:a.name,
                done:true,
               }
            )
            })
          )
        }
  }
  const doneTask=Tasks.filter(a => a.done==true)
 
  return (
    <>
     <Header/>
     <Input AddTask={()=>{
       setTasks([
        ...Tasks, 
        { id: nextId++, name: name ,done:false,theme:'none'}
      ]);setName('')}
     }
      onChange={e => setName(e.target.value) } name={name}  allCompelete={allCompelete}></Input>
     
     <ul>
      {Tasks.map(task=>(
        <Task key ={task.id} value={task.name} done={task.done} whatstate={compelete}  handleDelete={() => {
          setTasks(
            Tasks.filter(a =>
              a.id !== task.id
            )
          );}}  handleOnchange={() => {
            setTasks(
              Tasks.map(a =>{
               if( a.id === task.id){
                 return (task.done?{
                  id:task.id,
                  name:task.name,
                  done:false,
                  theme:'block'
                 }:{
                  id:task.id,
                  name:task.name,
                  done:true,
                  theme:'block'
                 })
               }else{
                return a
               }
              }
              )
            );} } ></Task>
      ))
      
      }
      {Tasks.length>0?<Footer  doneTask={doneTask.length} allTask={Tasks.length}
      compelete={()=>setCompelete('compelete')}
      uncompelete={()=>setCompelete('uncompelete')}
      all={()=>setCompelete('all')}
     clear={()=>setTasks([])}
        ></Footer>:null}
      
     </ul>
     
    </>
  )
}

export default App
