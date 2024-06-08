import React from 'react'
import Navbar from './Navbar'

const DeleteShopping = () => {
  return (
    <div>
      <Navbar/>
      <center><h2>DELETE</h2></center>
         <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12">
                    <label htmlFor="" className="form-label">Id</label>
                   <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12">
                    <button className="btn btn-success">Delete</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteShopping