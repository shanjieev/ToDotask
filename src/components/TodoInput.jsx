import React,{useState} from "react";

function TodoInput(props) {
    const [inputText,setInputText] = useState('');
    const handleEnterPress = (e)=>{
        if(e.keyCode===13){
            props.addList(inputText)
            setInputText("")
        }
    }
  return (
    <div className="input-container-center">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your todo"
        value={inputText}
        onChange={e=>{
            setInputText(e.target.value)
        }}
        onKeyDown={handleEnterPress} 
      />
      <button type="button" class="btn btn-success" onClick={()=>{
        props.addList(inputText)
        setInputText("")
      }}>Add</button>
        
    </div>
  );
}

export default TodoInput;