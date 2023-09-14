import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ed } from './redux/Actions/action';


function Edit() {
  const obj=useParams(); 
  const modification=useSelector(state=>state.data.find(el=>el.id==obj.id))
  console.log(modification)
  const navigate=useNavigate()
  const [taskEdit,settaskEdit] = useState(modification.description)
  const Disptach=useDispatch()
const handleClick=()=>{
  Disptach(ed(taskEdit,obj.id))

}
  return (
    <div>
    <h2>Edit Task</h2>

    <input onChange={(e)=>settaskEdit(e.target.value)}
      type="text"
     value={taskEdit}
    />
    <label>
      <input
        type="checkbox"

       
      />
      Is Done
    </label>
    <Link  to={"/"}  ><button  onClick={handleClick} style={{backgroundColor:"bisque"}}  >Edit </button></Link>
  </div>

  )
}

export default Edit