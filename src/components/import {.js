import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styles from "./ExpenseTracker.module.css";

const ExpenseTracker = () => {
  const [categories, setOptions] = useState([
    {
      item: 1,
      description: "aaa",
      amount: 10,
      category: "None",
    },
    {
      item: 2,
      description: "bbb",
      amount: 10,
      category: "Groceries",
    },
    {
      item: 3,
      description: "ccc",
      amount: 10,
      category: "Fruits",
    },
    {
      item: 4,
      description: "ddd",
      amount: 10,
      category: "Utilities",
    },
  ]);
  const [newCategory, setNewCategory] = useState({
    item: "",
    description: "",
    amount: "",
    category: "",
  });
  const selectCategory = (event) => {
    const newCategories = [...categories];
    console.log(
      newCategories.filter((item) => item.category == event.target.value)
    );
    setOptions(
      newCategories.filter((item) => item.category == event.target.value)
    );
  };
  const handleIdChange = (e) => {
    setNewCategory({ ...newCategory, item: e.target.value });
  };
  const handleDescriptionChange = (e) => {
    setNewCategory({ ...newCategory, description: e.target.value });
  };
  const handleAmountChange = (e) => {
    setNewCategory({ ...newCategory, amount: e.target.value });
  };
  const handleCategoryChange = (e) => {
    setNewCategory({ ...newCategory, category: e.target.value });
  };

  const handleSubmit = () => {
    setOptions([...categories, newCategory]);
  };

  return (
    <>
      <FormControl>
        <InputLabel htmlFor="id-input">Id</InputLabel>
        <TextField
          onChange={(e) => handleIdChange(e)}
          id="id-input"
          aria-describedby="id-helper-text"
        />
        <FormHelperText id="id-helper-text">Enter the Id</FormHelperText>
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="description-input">Description</InputLabel>
        <TextField
          onChange={(e) => handleDescriptionChange(e)}
          id="description-input"
          aria-describedby="description-helper-text"
        />
        <FormHelperText id="description-helper-text">
          Enter the Description
        </FormHelperText>
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="amount-input">Amount</InputLabel>
        <TextField
          onChange={(e) => handleAmountChange(e)}
          id="amount-input"
          aria-describedby="amount-helper-text"
        />
        <FormHelperText id="amount-helper-text">
          Enter the Amount
        </FormHelperText>
      </FormControl>
      <Button onClick={handleSubmit}>Submit</Button>
      <label htmlFor="category" className={styles["category-label"]}>
        Category
      </label>
      <br />
      <Select
        className={styles["drop-down"]}
        onChange={(event) => selectCategory(event)}
      >
        <MenuItem value="">Select Category</MenuItem>
        {categories.map((category) => (
          <MenuItem key={category.item} value={category.category}>
            {category.category}
          </MenuItem>
        ))}
      </Select>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Category</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{row.item}</TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="right">{row.category}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ExpenseTracker;
