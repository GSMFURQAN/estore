import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
          setData(res.data);
          setFilter(res.data);
        });
    };
    getProducts();
  }, []);

  const filterProduct = (e) => {
    const updatedList = data.filter((x) => x.category === e);
    setFilter(updatedList);
  };
  console.log("updated list :", filter);

  const ShowProducts = () => {
    return(
    <>
      <div>
        <div className="buttons  d-flex justify-content-center mb-5 pb-5" role="group">
          <button
            className="btn btn-outline-dark mx-1"
            onClick={() => setFilter(data)} type="button"
          >
            All
          </button>
          <button
            className="btn btn-outline-dark mx-1"
            onClick={() => filterProduct("men's clothing")} type="button" 
          >
            Men's Wear
          </button>
          <button
            className="btn btn-outline-dark mx-1"
            onClick={() => filterProduct("women's clothing")} type="button" 
          >
            Women's Wear
          </button>
          <button
            className="btn btn-outline-dark mx-1"
            onClick={() => filterProduct("electronics")} type="button"
          >
            Electronics
          </button>
          <button
            className="btn btn-outline-dark mx-1"
            onClick={() => filterProduct("jewelery")} type="button"
          >
            Jewelery
          </button>
        </div>
      </div>

      {filter.length < 0
        ? null
        : filter.map((product) => {
            return (
              <div className="col-md-3 mb-4 " key={product.id} >
                <Link to={`/products/${product.id}`} style={{textDecoration:"none"}} className="card h-100 text-center p-4 text-dark">
                  <img
                    src={product.image}
                    className="card-img-top mb-4"
                    height="250px"
                    alt=""
                  />
                <div className="text-dark">
                  <h5 className="card-title mb-0" >
                    {product.title.substring(0,22)}...
                  </h5>
                  <p className="card-text lead fw-bold">{product.price}</p>
                  <Link to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</Link>
                </div>
                </Link>
              </div>
            );
          })}
    </>
    );
  };

  console.log(filter);

  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {<ShowProducts />}

        </div>
      </div>
    </>
  );
}
