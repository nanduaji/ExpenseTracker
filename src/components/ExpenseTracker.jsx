import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";

function ExpenseTracker() {
  useEffect(() => {
    document.title = "Expense Tracker";
  });

  const [itemDetails, setItemDetails] = useState({
    item_number: "",
    item: "",
    category: "",
    amount: "",
  });
  const [tableItems, setTableItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const handleItemChange = (event) => {
    const fieldName = event.target.name;
    const value = event.target.value;
    setItemDetails({ ...itemDetails, [fieldName]: value });
  };

  const handleSubmit = () => {
    if (
      !itemDetails.item ||
      !itemDetails.item_number ||
      !itemDetails.category ||
      !itemDetails.amount
    ) {
      alert("Fill all the fields");
    } else {
      setTableItems([...tableItems, itemDetails]);
      setTotalAmount(parseInt(itemDetails.amount) + parseInt(totalAmount));
    }
  };
  const handleDelete = (index) => {
    const updatedTableItems = tableItems.filter((_, idx) => idx !== index);
    setTableItems(updatedTableItems);
    setTotalAmount(parseInt(totalAmount) - parseInt(itemDetails.amount));
  };
  const handleDropDown = (event) => {
    const dropDownItem = event.target.value;
    setTableItems(tableItems.filter((item) => item.category == dropDownItem));
  };
  return (
    <div>
      <h2>Expense Tracker</h2>
      <FormControl>
        <TextField
          value={itemDetails.item_number}
          name="item_number"
          required
          id="outlined-required-item_number"
          label="Item Number"
          onChange={(event) => handleItemChange(event)}
        />
        <br />
        <TextField
          value={itemDetails.item}
          name="item"
          required
          id="outlined-required-item"
          label="Item"
          onChange={(event) => handleItemChange(event)}
        />
        <br />
        <TextField
          value={itemDetails.category}
          name="category"
          required
          id="outlined-required-category"
          label="Category"
          onChange={(event) => handleItemChange(event)}
        />
        <br />
        <TextField
          value={itemDetails.amount}
          name="amount"
          required
          id="outlined-required-amount"
          label="Amount"
          onChange={(event) => handleItemChange(event)}
        />
      </FormControl>
      <br />
      <Button onClick={handleSubmit}>Submit</Button>
      <br />
      <br />
      Total Amount : {totalAmount}
      <TableContainer>
        Sort By:{" "}
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value="Select"
          label="Category"
          onChange={(event) => handleDropDown(event)}
        >
          <MenuItem value="Select">Select</MenuItem>
          <MenuItem value="Groceries">Groceries</MenuItem>
          <MenuItem value="Fruits">Fruits</MenuItem>
        </Select>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Item Number</TableCell>
              <TableCell>Item</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableItems.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.item_number}</TableCell>
                <TableCell>{item.item}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.amount}</TableCell>
                <TableCell>
                  <Button
                    style={{ color: "red" }}
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ExpenseTracker;
