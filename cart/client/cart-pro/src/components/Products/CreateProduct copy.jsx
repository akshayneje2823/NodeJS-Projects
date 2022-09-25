import React, { useState } from 'react';
import Axios from 'axios';

function CreateProduct() {
    const [product, setProduct] = useState({ name: "", image: "", price: "", qty: "", info: "" })
    const [flag, setFlag] = useState(false)
    const onchangeHandler = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value })
    }

    const submitHandler = (event) => {
        console.log(event.preventDefault())
        event.preventDefault();
        Axios.post("http://localhost:8080/api/products", product)
    }

    return (
        <div className='container mt-5'>
            {console.log(product)}
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        <h4>Create Product</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={submitHandler}>
                            <div className="form-group">
                                <input
                                    autoFocus
                                    type="text"
                                    className='form-control'
                                    placeholder='Enter Product Name...'
                                    name='name'
                                    onChange={onchangeHandler}
                                />
                            </div>
                            <div className="form-group">
                                <input t
                                    ype="number"
                                    className='form-control'
                                    placeholder='Enter Price...'
                                    name='price'
                                    onChange={onchangeHandler}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="number"
                                    className='form-control'
                                    placeholder='Enter QTY...'
                                    name='qty'
                                    onChange={onchangeHandler}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className='form-control'
                                    placeholder='Info...'
                                    name='info'
                                    onChange={onchangeHandler}
                                />
                            </div>
                            <button type='submit' className='btn btn-success btn-md'>Create Product</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateProduct