import React, { useState } from "react";
import Product from "../../components/Product/Product";
import { paginationPipe } from "../../pipes/paginationFilter";
import Pagination from "../../components/Pagination/Pagination";
import { useSelector } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";

const ProductList = () => {
  const products = useSelector((state) => state.shop.products);
  const [state, setState] = useState({
    colValue: "col-lg-4",
    perPage: 12,
    currentPage: 1,
    pagesToShow: 3,
    gridValue: 3,
  });

  const onPrev = () => {
    setState({
      ...state,
      currentPage: state.currentPage - 1,
    });
  };

  const onNext = () => {
    setState({
      ...state,
      currentPage: state.currentPage + 1,
    });
  };

  const goPage = (n) => {
    setState({
      ...state,
      currentPage: n,
    });
  };

  return (
    <>
      {products.length > 0 ? (
        <div className="col-lg-12">
          <div className="row">
            {paginationPipe(products, state).map((product, i) => {
              let classes = `${state.colValue} col-md-6 mb-4`;
              return (
                <div key={i} className={classes}>
                  <Product key={product.id} product={product} />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-end">
            <Pagination
              totalItemsCount={products.length}
              currentPage={state.currentPage}
              perPage={state.perPage}
              pagesToShow={state.pagesToShow}
              onGoPage={goPage}
              onPrevPage={onPrev}
              onNextPage={onNext}
            />
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default ProductList;
