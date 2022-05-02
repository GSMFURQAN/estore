import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {addItem} from "../Redux/action/action"

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch()

  const addProduct = (item)=>{
    dispatch(addItem(item))
  }

  useEffect(() => {
    const getproduct = async () => {
      const response = await axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => {
          setProduct(res.data);
        });
    };
    getproduct();
  }, []);
  console.log(id)
  console.log(product);

  const Productdetail = () => {
    return (
      <>
        
          <div className="col-md-6 pl-5 ">
            <img src={product.image} alt=""  height="400px"
            width="400px" />
          </div>

          <div className="col-md-6  ">
            <h3 className="text-uppercase">{product.category}</h3>
            <h2 className="display-5 text-start">{product.title}</h2>
            <h5 className="fw-bold text-center"> Rating {product.rating && product.rating.rate}</h5>
            <h3 className="fw-bold display-6 text-center"> $ {product.price}</h3>
            <p className="lead text-start">{product.description}</p>
            <button className="btn btn-outline-dark mx-2" onClick={()=> addProduct(product)}>Add to Cart</button>
            <Link to="/cart"  ><button className="btn btn-outline-dark">Go to Cart</button></Link>
          </div>
        
      </>
    );
  };
  return (
    <div className="container py-5">
        <div className="row py-4">
      <Productdetail />
      </div>
    </div>
  );
}
