import React from 'react'

function Todolist(props) {
  return (
    <li className="list-item">
        {props.item}
        <span className='button'>
        <button variant="link"
        onClick={e=>{
            props.deleteItem(props.index)
        }}>Delete</button>
        
    
          
       
        </span>

    </li>
    
  )
}

export default Todolist