import React, { useEffect, useState } from "react";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateProduct() {
  const navigate = useNavigate();

  const paperStyle = {
    width: 400,
    margin: "20px auto",
    padding: "20px",
  };

  const [updateProduct, setUpdateProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((res) => {
        setUpdateProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  // Wait until product is loaded
  if (!updateProduct) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === "rating.rate") {
      setUpdateProduct({
        ...updateProduct,
        rating: {
          ...updateProduct.rating,
          rate: Number(value),
        },
      });
    } else if (id === "rating.count") {
      setUpdateProduct({
        ...updateProduct,
        rating: {
          ...updateProduct.rating,
          count: Number(value),
        },
      });
    } else {
      setUpdateProduct({
        ...updateProduct,
        [id]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3000/products/${id}`, updateProduct)
      .then(() => {
        alert("Product updated successfully");
        navigate("/products");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Paper elevation={20} style={paperStyle}>
      <Typography variant="h5" align="center" sx={{ mb: 2 }}>
        Update Product
      </Typography>

      <Grid
        component="form"
        container
        spacing={2}
        onSubmit={handleSubmit}
      >
        <Grid size={12}>
          <TextField
            id="title"
            label="Title"
            fullWidth
            value={updateProduct.title}
            onChange={handleChange}
          />
        </Grid>

        <Grid size={12}>
          <TextField
            id="category"
            label="Category"
            fullWidth
            value={updateProduct.category}
            onChange={handleChange}
          />
        </Grid>

        <Grid size={6}>
          <TextField
            id="rating.rate"
            label="Rate"
            type="number"
            fullWidth
            value={updateProduct.rating?.rate}
            onChange={handleChange}
          />
        </Grid>

        <Grid size={6}>
          <TextField
            id="rating.count"
            label="Count"
            type="number"
            fullWidth
            value={updateProduct.rating?.count}
            onChange={handleChange}
          />
        </Grid>

        <Grid size={12}>
          <Button
            type="submit"
            variant="contained"
            color="success"
            fullWidth
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default UpdateProduct;