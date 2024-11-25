import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {
  const [product,setProduct]=useState([]);
  const parmas=useParams();
  const id=parmas.id
  useEffect(()=>{
    axios.get('http://localhost:4000/product/'+id)
    .then(res=>setProduct(res.data))
    .catch(err=>console.log(err))
  },[])
  return (
    <div>
          <>
          <Header/>
          {product.map((product,i)=>{
            return(
  <div className="chitiet mt-4 ml-5 ">
    <div className="container">
      <div className="row">
        <div className="col-6">
          <a href="" className="imgp">
            <img src="https://placehold.co/500" alt="" />
          </a>
        </div>
        <div className="col-6 thongtin  ">
          <h4>{product.tensp}</h4>
          <p>{product.gia}</p>
          <div className="size mt-5">
            <h6>Select size</h6>
            <div className="row">
              <div className="col-7">
                <button
                  type="button"
                  className="btn btn-outline-dark mt-2 mr-2"
                >
                  EU 40
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark mt-2 mr-2"
                >
                  EU 40
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark mt-2 mr-2"
                >
                  EU 40
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark mt-2 mr-2"
                >
                  EU 40
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark mt-2 mr-2"
                >
                  EU 40
                </button>
              </div>
            </div>
            <div className="col-7 ">
              <a href="" className="Add ">
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
})}
  {/* end chi tiet sp */}
  <div className="splienquan">
    <div className="container"></div>
  </div>
  {/* end sp lien quan */}
</>
    </div>
  )
}

export default ProductDetail