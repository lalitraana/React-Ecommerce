import React from "react";
import { formatMoney } from "../../pipes/priceFormatter";
import CartItem from "../../components/CartItem/CartItem";
import { useSelector } from "react-redux";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.shop.cart);
  const cartItemCount = cartItems.reduce((count, curItem) => {
    return count + curItem.quantity;
  }, 0);
  const totalPrice = cartItems.reduce((count, curItem) => {
    return count + curItem.price * curItem.quantity;
  }, 0);
  return (
    <>
      <div className="container" style={{ paddingTop: "6rem" }}>
        <div className="card shopping-cart">
          <div className="card-header bg-dark text-light">
            <i className="fa fa-shopping-cart pr-2" aria-hidden="true"></i>
            Shipping cart
            <div className="clearfix"></div>
          </div>
          <div className="card-body">
            {cartItemCount ? (
              cartItems.map((cart) => <CartItem {...cart} img={cart.image} />)
            ) : (
              <h1 className="display-4 mt-5 text-center">
                There is no product in your cart
              </h1>
            )}
          </div>
          <div className="card-footer">
            <div className="pull-right" style={{ margin: "10px" }}>
              <div className="pull-right" style={{ margin: "5px" }}>
                Total price: <b>{formatMoney(totalPrice)}€</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
