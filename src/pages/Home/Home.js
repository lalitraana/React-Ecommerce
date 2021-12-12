import React, { useEffect } from "react";
import ProductList from "../../containers/ProductList/ProductList";
import { useDispatch } from "react-redux";
import { getProducts } from "../../actions";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <>
      <div className="container" style={{ paddingTop: "6rem" }}>
        <div className="row">
          <ProductList />
        </div>
      </div>
    </>
  );
};

export default Home;
