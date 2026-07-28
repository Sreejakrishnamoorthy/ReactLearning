import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Atom } from "react-loading-indicators";
import { useNavigate } from "react-router-dom";
import useFetch from "./custom-hook/useFetch";
import { IoMdCart } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/cartSlice";

function ProductList() {
  let navigate = useNavigate();

  let { products, error, isLoading, setProducts } = useFetch(
    "http://localhost:3000/products"
  );

  let dispatch = useDispatch();

  let cartState = useSelector((state) => {
    return state.cart;
  });

  // Add product to cart
  let addItemToCart = (product) => {
    let checkProduct = cartState.some(
      (cartProduct) => cartProduct.id === product.id
    );

    if (!checkProduct) {
      dispatch(addItem(product));
      Swal.fire({
        title: "Success",
        text: "Product added to Successfully",
        icon: "success"
      });
    } else {
      Swal.fire({
        title: "Oops",
        text: "Product already added",
        icon: "info",
        footer:"Add someother Product"
      });
    }
  };

  // Delete product
  let handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/products/${id}`)
          .then(() => {
            let newProductList = products.filter(
              (product) => product.id !== id
            );

            setProducts(newProductList);

            Swal.fire({
              title: "Deleted!",
              text: "Product has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => {
            Swal.fire({
              title: "Error!",
              text: "Failed to delete product.",
              icon: "error",
            });
          });
      }
    });
  };

  // Loading
  if (isLoading) {
    return (
      <div>
        <center>
          <Atom
            color="#314acc"
            size="large"
            text=""
            textColor="#000000"
          />
        </center>
      </div>
    );
  }

  return (
    <div>
      <h1>Product List</h1>

      <article>
        <span>To Create New Product</span>

        <Button
          onClick={() => {
            navigate("/newproduct");
          }}
        >
          Click me!
        </Button>
      </article>

      {products.length !== 0 && (
        <section className="products">
          {products.map((product) => (
            <Card
              key={product.id}
              style={{ width: "18rem" }}
              className="product"
            >
              <center>
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{
                    width: "18rem",
                    height: "18rem",
                  }}
                />
              </center>

              <Card.Body>
                <Card.Title>{product.title}</Card.Title>

                <Card.Text
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  $ {product.price}
                </Card.Text>
              </Card.Body>

              <Card.Footer
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                {/* Add to Cart */}
                <Button
                  variant="primary"
                  onClick={() => addItemToCart(product)}
                >
                  <IoMdCart />
                </Button>

                {/* Edit */}
                <Button
                  variant="secondary"
                  onClick={() => {
                    navigate(`/update/${product.id}`);
                  }}
                >
                  <CiEdit />
                </Button>

                {/* Delete */}
                <Button
                  variant="secondary"
                  onClick={() => handleDelete(product.id)}
                >
                  <MdDelete />
                </Button>
              </Card.Footer>
            </Card>
          ))}
        </section>
      )}

      {products.length === 0 && !error && (
        <p>No products available.</p>
      )}

      {error && <p>{error}</p>}
    </div>
  );
}

export default ProductList;