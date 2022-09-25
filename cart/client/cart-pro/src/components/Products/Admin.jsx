import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


function Admin() {
  const [products, setproducts] = useState([]);
  let navigate = useNavigate()

  useEffect(() => {
    Axios.get('http://localhost:8080/api/products', products)
      .then((result) => {
        console.log(result.data)
        setproducts(result.data)
      })
      .catch()
  }, [])

  const deleteProduct = (id) =>{
    Axios.delete(`http://localhost:8080/api/product/${id}`)
    .then(()=>{
      navigate('/admin')
    })
    .catch()
  }
  return (
    <>
      <div className="container mt-5">
        <h1>All Products</h1>
        <pre>{JSON.stringify(products)}</pre>
        <div className="row">
          <div className="col-md-9">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa vel dolores labore explicabo tempore repudiandae neque, saepe delectus ipsam blanditiis quas! Alias, quia.</p>
          </div>
        </div>
        <div className="row">
          <Link to='/create' className='btn btn-success'>Create</Link>
        </div>
        <div style={{marginBottom : '25px'}}></div>
          <div className="row">
            <div className="col-md-9">
              <table className="table table-hover">
                <thead className="bg-dark text-white">
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    products.length > 0 ? <>
                    {
                      products.map((product)=>{
                        return <tr>
                          <td>{product._id.substr(23,24)}</td>
                          <td>{product.name}</td>
                          <td><img src={product.image} height='40px' alt="" /></td>
                          <td>{product.price}</td>
                          <td>{product.qty}</td>
                          <td>
                            <Link to='/' className='btn btn-primary mr-2'>Edit</Link>
                            <Link onClick={deleteProduct(this,product._id)} className='btn btn-danger'>Delete</Link>
                          </td>
                        </tr>
                      })
                    }
                    </> : null
                  }
                </tbody>
              </table>
            </div>
          </div>
      </div>
    </>
  )
}

export default Admin

// Delete Api
// http://localhost:8080/api/products