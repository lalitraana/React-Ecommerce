import React from "react";
import { formatMoney } from "../../pipes/priceFormatter";
import { addProductToCart } from "../../actions";
import { useDispatch } from "react-redux";

const ProductDetail = (props) => {
  const dispatch = useDispatch();
  const { title, image, price, description, category } = props.product;

  const onCart = () => {
    dispatch(addProductToCart(props.product));
  };

  return (
    <>
      <aside className="col-sm-5 border-right">
        <article className="gallery-wrap">
          <div className="img-big-wrap">
            <div style={{ padding: "2rem" }}>
              <span>
                <img
                  alt="j"
                  src={image}
                  style={{ width: "100%", height: "100%" }}
                />
              </span>
            </div>
          </div>
        </article>
      </aside>
      <aside className="col-sm-7">
        <article className="card-body p-5">
          <h3 className="title mb-3">{title}</h3>
          <p className="price-detail-wrap">
            <span className="price h3 text-warning">
              <span className="currency">$</span>
              <span className="num">{formatMoney(price)}</span>
            </span>
          </p>
          <dl className="item-property">
            <dt>Description</dt>
            <dd>
              <p className="text-capitalize">{description}</p>
            </dd>
          </dl>
          <dl className="param param-feature">
            <dt>category</dt>
            <dd className="text-capitalize">{category}</dd>
          </dl>
          <hr />
          <hr />
          <button
            onClick={onCart}
            className="btn btn-lg btn-outline-primary text-uppercase"
          >
            <i className="fa fa-shopping-cart" /> Add to cart
          </button>
        </article>
      </aside>
    </>
  );
};

export default ProductDetail;
