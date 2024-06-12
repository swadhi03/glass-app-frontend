import React from 'react'

const AddGlass = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Title</label>
                            <input type="text" className="form-label" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Shape</label>
                            <input type="text" className="form-label" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Colour</label>
                            <input type="text" className="form-label" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Price</label>
                            <input type="text" className="form-label" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Image</label>
                            <input type="file" className="form-label" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddGlass