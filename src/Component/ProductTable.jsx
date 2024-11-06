import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function ProductTable(props) {
  return (
    <div>
        <div className="col-4">
      <div className="sp mt-4 ">
        <div className="card">
            
          <img
            className="card-img-top img-sp"
            src="https://placehold.co/400"
            alt="Card image"
          />
          <div className="card-body">
            <h4 className="card-title tille text-center">
              {props.tensp}
            </h4>
            <p className="card-text price text-center">{props.gia}</p>
            <a  href="#"
              className="btn btn fa fa-cart-plus text-center  add-to-cart  d-block justify-content-center  ">
             <FontAwesomeIcon icon={faCartShopping} />
             <span>Add to cart</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductTable