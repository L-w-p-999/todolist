import './Task.css'
import { useState } from 'react'

export default function Task({value,handleDelete,handleOnchange,done,whatstate}){

   
      
 
      
            if(whatstate==='all'){

               return(
            <>
            <li className='task'>
               <input id='tickle' className='compelete'type="checkbox"  checked={done} onChange={handleOnchange}   />
               <p className='pp'>{done?<del>{value}</del>:value}</p>
               <button className='deletethis' onClick={handleDelete}>delete</button>
               </li>
            </>)}
            if(whatstate==='compelete'){
               if(done===true){
                  return(
                     <>
                     <li className='task'>
                        <input id='tickle' className='compelete'type="checkbox" checked={done}  onChange={handleOnchange}   />
                        <p className='pp'>{done?<del>{value}</del>:value}</p>
                        <button className='deletethis' onClick={handleDelete}>delete</button>
                        </li>
                     </>
                  )
               }
               
            }
            if(whatstate==='uncompelete'){
               if(done===false){
                  return(
                     <>
                     <li className='task'>
                        <input id='tickle' className='compelete'type="checkbox"  checked={done} onChange={handleOnchange}   />
                        <p className='pp'>{done?<del>{value}</del>:value}</p>
                        <button className='deletethis' onClick={handleDelete}>delete</button>
                        </li>
                     </>
                  )
               }
            }
         
      }

