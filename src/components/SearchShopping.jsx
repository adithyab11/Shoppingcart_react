import React from 'react'
import Navbar from './Navbar'

const SearchShopping = () => {
  return (
    <div>
        <Navbar/>
        <center><h2>SEARCH</h2></center>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12">
                    <label htmlFor="" className="form-label">Id</label>
                   <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12">
                    <button className="btn btn-success">Search</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchShopping