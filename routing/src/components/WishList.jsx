import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MdDelete } from "react-icons/md";
import { removeItem } from "../store/cartSlice";
function WishList() {
  let cartProducts = useSelector((state) => {
    return state.cart;
  });
  const dispatch = useDispatch();
 
  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };
  return (
    <div>
      {" "}
      {cartProducts.length !== 0 ? (
        <section className="products">
          {" "}
          {cartProducts.map((product) => (
            <Card
              key={product.id}
              style={{ width: "18rem" }}
              className="product"
            >
              {" "}
              <center>
                {" "}
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ width: "18rem", height: "18rem" }}
                />{" "}
              </center>{" "}
              <Card.Body>
                {" "}
                <Card.Title>{product.title}</Card.Title>{" "}
                <Card.Text
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  $ {product.price}{" "}
                </Card.Text>{" "}
              </Card.Body>{" "}
              <Card.Footer
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                {" "}
                <Button
                  variant="secondary"
                  onClick={() => handleDelete(product.id)}
                >
                  {" "}
                  <MdDelete />{" "}
                </Button>{" "}
              </Card.Footer>{" "}
            </Card>
          ))}{" "}
        </section>
      ) : (
        <h1>Please add Products</h1>
      )}{" "}
    </div>
  );
}

export default WishList;
