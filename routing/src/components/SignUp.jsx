import { Button, Paper, TextField, Typography, Box } from "@mui/material";
import React from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

let renderCount = 0;

const schema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .matches(/^[A-Z][a-z]+ [A-Z][a-z]+$/, "Enter your full name"),

  email: Yup.string()
    .required("Email is required")
    .email("Enter a valid email"),

  age: Yup.number()
    .required("Age is required")
    .typeError("Age must be a number")
    .min(18, "Age must be at least 18")
    .max(100, "Age must be less than 100"),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must contain at least 8 characters"),

  cPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
});

function SignUp() {
  const paperStyle = {
    width: 400,
    margin: "20px auto",
    padding: "20px",
    display: "grid",
    gap: "20px",
  };

  renderCount++;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleData = (data) => {
    console.log(data);
  };

  return (
    <Paper elevation={20} style={paperStyle}>
      <Typography variant="h6">Create Account - {renderCount}</Typography>

      <Box
        component="form"
        onSubmit={handleSubmit(handleData)}
        sx={{
          display: "grid",
          gap: "20px",
        }}
      >
        <TextField
          label="Name"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />

        <TextField
          label="Email"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          label="Age"
          {...register("age")}
          error={!!errors.age}
          helperText={errors.age?.message}
        />

        <TextField
          label="Password"
          type="password"
          autoComplete="new-password"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <TextField
          label="Confirm Password"
          type="password"
          autoComplete="new-password"
          {...register("cPassword")}
          error={!!errors.cPassword}
          helperText={errors.cPassword?.message}
        />

        <Button variant="contained" type="submit">
          SignUp
        </Button>
      </Box>
    </Paper>
  );
}

export default SignUp;
