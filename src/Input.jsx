import './Input.css'
import { useState } from 'react'
export default function Input({AddTask,name,onChange,allCompelete}){
      
      



       return( 
       <>
       <div id='input'>
       <button id='alltaken' onClick={allCompelete} ><img src="src\assets\xaitou.png"/></button>
       <input  type="text"  placeholder='What do you want to do' value={name} onChange={onChange}/>
       <button id="submit" onClick={AddTask}>提交</button>
       </div>
       </>
       )
}