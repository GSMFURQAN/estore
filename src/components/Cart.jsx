import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, delItem } from "../Redux/action/action";
import { useState } from "react";
// import "../App";

export default function Cart() {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  const [cartdata, setCartdata] = useState([]);

  const handleAdd = (item) => {
    dispatch(addItem(item));
  };

  const handleDel = (item) => {
    dispatch(delItem(item));
  };

  const emptyCart = (item) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  //  const total = state.map(x => x.price).reduce((a,b)=>a+b,0);

  const price = state.map((x) => x.price);
  console.log("price", price);
  const qty = state.map((x) => x.qty);
  console.log("qty", qty);

 

  let total =0;
    
    for (let i = 0; i < price.length; i++) {
      total = ((total + price[i] * qty[i])*100)/100;
    }
    
  
  
  console.log("total", total);
  const cartItems = (product) => {
    return (
      <>
        <div className="px-4 my-5 bg-light rounded-3 py-5">
          <div className="container py-4">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <img className="cartimg"
                  src={product.image}
                  alt={product.title}
                  height="200px"
                  width="180px"
                />
              </div>
              <div className="col-md-4">
                <h3>{product.title}</h3>
                <p className="lead fw-bold">
                  {product.qty} X ${product.price} = $
                  {product.qty * product.price}
                </p>
                <button
                  className="btn btn-outline-dark me-4"
                  onClick={() => handleDel(product)}
                >
                  -
                </button>
                <button
                  className="btn btn-outline-dark me-4"
                  onClick={() => handleAdd(product)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  // setCartdata([...cartdata, cartItems])
  console.log("cart state", state);
  return (
    <>
  
              <div className="row col-md-10">
      <div className="col-md-9">
        {state.length === 0 && emptyCart()}
        {state.length !== 0 && state.map(cartItems)}
      </div>
      <div className="px-3 mt-5 justify-content-center  card col-md-3  text-start">
        
        <h4 style={{float:"left"}}>Numbers of items({state.length}) :<p style={{float:"right"}}>{(total + '').substring(0,6)}</p> </h4>

        <h4 style={{float:"left" ,color : "green"}}>Discounts :<p style={{float:"right",color : "green"}}>None</p> </h4> 
        
        <h4 style={{float:"left",color : "green"}}>Delivery fee :<p style={{float:"right",color : "green"}}>{state.length >= 1 ? "$ 12" : 0}</p> </h4>

        
         <hr />
        
        <h4 className="px-2" style={{float:"left", backgroundColor:"blue",color:"white"}}>Total Value :<p style={{float:"right"}}>$ {state.length>=1 ? (((total+ 12) + '').substring(0,6)) : total} </p> </h4>
       
      </div>
    </div>
   
    </>
  );
}
