import React, { useState } from "react";
import {
  Button,
  FormControl,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";

function ExpenseTracker() {
  const [itemDetails, setItemDetails] = useState({
    item_number: "",
    item: "",
    category: "",
    amount: "",
  });
  const [tableItems, setTableItems] = useState([]);

  const handleItemChange = (event) => {
    const fieldName = event.target.name;
    const value = event.target.value;
    setItemDetails({ ...itemDetails, [fieldName]: value });
  };

  const handleSubmit = () => {
    setTableItems([...tableItems, itemDetails]);
    setItemDetails({
      item_number: "",
      item: "",
      category: "",
      amount: "",
    });
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
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Item Number</TableCell>
              <TableCell>Item</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableItems.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.item_number}</TableCell>
                <TableCell>{item.item}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ExpenseTracker;
