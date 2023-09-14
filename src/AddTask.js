import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AddT } from './redux/Actions/action';




function AddTask() {

  const [description, setDescription] = useState('');
  const [isDone, setIsDone] = useState(false);
  const navigate = useNavigate();
  const Disptach=useDispatch()
  const  handleClick=()=>{

if(description){
    navigate('/')
    Disptach(AddTask(description,isDone))
}
else{alert("input is empty ")}
  }


  return (
    <div>
      <h2>Add Task</h2>

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label>
        <input
          type="checkbox"

          onChange={() => setIsDone(!isDone)}
        />
        Is Done
      </label>
      <button className="custom-button" onClick={handleClick}>Add</button>

    </div>
  );
}

export default AddTask;