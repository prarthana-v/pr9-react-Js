import React, { useState } from 'react'
import './style.css'
import { useDispatch } from 'react-redux';
import { addNote } from '../Redux/action/noteAction';

const Add = () => {

  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('task added');

    let obj = {
      id: Date.now(),
      title: title,
      task: task
    }

    dispatch(addNote(obj));
  }
  return (
    <div>
      <div className="">
        <header className='bg-warning  text-white py-2'>
          <h1 className='ps-5 fs-2'>Google Keep</h1>
        </header>
        <div className="container">
          <div className="row">
            <div className="form-floating mt-5" align="center">
              <div className="col-5">
                <form className="addnote shadow w-100" onSubmit={handleSubmit}>
                  <textarea className="pt-3" rows={1} cols={60} placeholder="Title..." onChange={(e) => setTitle(e.target.value)} value={title || ""}></textarea>
                  <textarea className="pt-2" rows={5} cols={60} placeholder="Add a Task here..." onChange={(e) => setTask(e.target.value)} value={task || ""} ></textarea>
                  <button className='btn btn-warning text-white px-3 py-1 rounded-5 m-0 fs-3 addbtn'>+</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add
