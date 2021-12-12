import React from "react";
import { useSelector } from "react-redux";
import ProductDetailComponent from "../../components/ProductDetail/ProductDetail";

const ProductDetail = (props) => {
  const prod = useSelector((state) => state.shop.products);
  const product = prod.find(
    (item) => item.id === parseInt(props.match.params.id)
  );
  return (
    <div className="container" style={{ padding: "6rem 0" }}>
      <div className="card">
        <div className="row">
          {product && <ProductDetailComponent product={product} />}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
