import React from 'react'
import Navbar from './Navbar'

const AddShoppingcart = () => {
  return (
    <div>
        <Navbar/>
        <center><h2>SHOPPING</h2></center>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6">
                    <label htmlFor="" className="form-label">Id</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6">
                <label htmlFor="" className="form-label">Title</label>
                <input type="text" className="form-control" />  
                </div>
                <div className="col col-12 col-sm-6 col-md-6">
                <label htmlFor="" className="form-label">Price</label>
                <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6">
                <label htmlFor="" className="form-label">Description</label>
                <textarea name="" id="" className="form-control"></textarea>
                </div>
                <div className="col col-12 col-sm-6 col-md-6"> 
                <label htmlFor="" className="form-label">Catogory</label>
                <select name="" id="" className="form-control">
                    <option value="Home appliance">Home appliance</option>
                    <option value="Electronic gadjects">Electronic gadjects</option>
                    <option value="Toys">Toys</option>
                </select>  
      
                </div>
                <div className="col col-12 col-sm-6 col-md-6">
                <label htmlFor="" className="form-label">Image</label>
                <input type="file" name="" id="" className="form-control" />   
                </div>
                <div className="col col-12 col-sm-12 col-md-12">
                <label htmlFor="" className="form-label">Rating</label>
                <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6">
                    <button className="btn btn-success">Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddShoppingcart