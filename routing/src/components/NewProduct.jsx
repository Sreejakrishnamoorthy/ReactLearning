import React, { useState } from "react";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";

function NewProduct() {
  const paperStyle = {
    width: 400,
    margin: "20px auto",
    padding: "20px",
  };

  const [newProduct, setNewProduct] = useState({
    title: "",
    price: 500,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "",
    image:
      "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 0,
      count: 0,
    },
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === "rating.rate") {
      setNewProduct({
        ...newProduct,
        rating: {
          ...newProduct.rating,
          rate: Number(value),
        },
      });
    } else if (id === "rating.count") {
      setNewProduct({
        ...newProduct,
        rating: {
          ...newProduct.rating,
          count: Number(value),
        },
      });
    } else {
      setNewProduct({
        ...newProduct,
        [id]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();// avaoid reloading of the page


    // Later you can send this data using fetch() or axios
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    }).then(()=>{
        alert("data added successfully")
    });
  };

  return (
    <Paper elevation={20} style={paperStyle}>
      <Typography variant="h5" align="center" sx={{ mb: 2 }}>
        Create New Product
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
            variant="outlined"
            fullWidth
            value={newProduct.title}
            onChange={handleChange}
          />
        </Grid>

        <Grid size={12}>
          <TextField
            id="category"
            label="Category"
            variant="outlined"
            fullWidth
            value={newProduct.category}
            onChange={handleChange}
          />
        </Grid>

        <Grid size={6}>
          <TextField
            id="rating.rate"
            label="Rate"
            type="number"
            variant="outlined"
            fullWidth
            value={newProduct.rating.rate}
            onChange={handleChange}
          />
        </Grid>

        <Grid size={6}>
          <TextField
            id="rating.count"
            label="Count"
            type="number"
            variant="outlined"
            fullWidth
            value={newProduct.rating.count}
            onChange={handleChange}
          />
        </Grid>

        <Grid size={12}>
          <Button type="submit" variant="contained" fullWidth>
            Create Product
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default NewProduct;