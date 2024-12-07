import './Footer.css'
export default function Footer( {doneTask,allTask,clear,compelete,all,uncompelete}){
   
    return (
        <>
          <div className='footer'>
            <div className="number">{doneTask}of{allTask}</div>
            <button className='all style'onClick={all} >all</button>
            <button className='compelete1 style' onClick={compelete}>compelete</button>
            <button className='uncompelete style'onClick={uncompelete} >uncompelete</button>
            <button className='clear style' onClick={clear}>clear</button>
          </div>
        
        </>
    )
}