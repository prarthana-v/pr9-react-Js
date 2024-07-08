import React from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNote } from '../Redux/action/noteAction';

const View = () => {

  const dispatch = useDispatch();
  const Record = useSelector(state => state.taskData.notes)
  console.log(Record);

  return (
    <div>
      <div className="container">
        <h3 className="text-center fw-normal mt-5">Tasks</h3>
        <div className="row mt-5">
          {
            Record.map((t, i) => {
              return (
                <div className="col-3 mb-5" key={i}>
                  <div className="card shadow p-4">
                    <p>{t.title} </p>
                    <p>{t.task}</p>

                    <div className="deletebtn">
                      <button className='btn btn-warning text-white rounded-5' onClick={() => dispatch(deleteNote(t.id))}>X</button>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}

export default View
