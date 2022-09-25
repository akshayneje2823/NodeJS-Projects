import React,{useState, useEffect} from 'react';
import Axios from 'axios'


function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    Axios.get('http://localhost:8080/api/products',products)
    .then(result => setProducts(result.data))
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <div className='container'>
        <pre>{JSON.stringify(products)}</pre>
        <div className="row">
          {
            products.length > 0 ?  <>
            {
              products.map((product)=>{
                return <div className="col-md-3">
                  <div className="card">
                    <div className="card-header">
                      <img src={product.image} alt="img" />
                    </div>
                    <div className="card-body">
                      <ul>
                        <li>{product.name}</li>
                        <li>{product.price}</li>
                        <li>{product.qty}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              })
            }
            </>  
            : "Nothing is there"
          }
        </div>
    </div>
  )
}

export default ProductList