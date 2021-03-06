import React from "react";
import { Link } from "react-router-dom";
import { formatMoney } from "../../pipes/priceFormatter";
import "./Product.scss";
import { addProductToCart } from "../../actions";
import { useDispatch } from "react-redux";

const Product = (props) => {
  const dispatch = useDispatch();
  const { title, price, image, description, id } = props.product;

  return (
    <div className="card h-100 product">
      <Link to={`/products/${id}`} className="product__link">
        <img className="card-img-top product__img" src={image} alt={title} />
      </Link>
      <div className="card-body product__text">
        <h4 className="card-title product__title">
          <Link to={`/products/${id}`}>{title}</Link>
        </h4>
        <h5 className="product__price">${formatMoney(price)}</h5>
        <p className="card-text product__description">{description}</p>
        <button
          onClick={() => {
            dispatch(addProductToCart({ ...props.product }));
          }}
          className="btn btn-info product__add-to-cart"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
