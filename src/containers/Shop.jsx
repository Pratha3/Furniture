import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/product/productSlice";

function Shop() {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Shop</h1>
              </div>
            </div>
            <div className="col-lg-7"></div>
          </div>
        </div>
      </div>
      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            {products.map((product) => {
              let { id, title, price, image } = product;
              return (
                <div className="col-12 col-md-4 col-lg-3 mb-5" key={id}>
                  <a
                    className="product-item"
                    href="#"
                    onClick={() => dispatch(addToCart(product))}
                  >
                    <img src={image} className="img-fluid product-thumbnail" />
                    <h3 className="product-title">{title}</h3>
                    <strong className="product-price">${price}</strong>
                    <span className="icon-cross">
                      <img src="images/cross.svg" className="img-fluid" />
                    </span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
